import React, { useState, useRef } from 'react'
import styles from './FormContato.css'

const MSG_MAX = 500
const MAX_FILE_MB = 5
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024

const FormContato = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState(null)
  const [errors, setErrors] = useState({})
  const firstErrorRef = useRef(null)

  const [fileKey, setFileKey] = useState(0)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    anexo: null,
  })

  const onlyDigits = (v) => (v || '').replace(/\D/g, '')
  const isEmailValid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v || '').trim())
  const formatMB = (bytes) => (bytes / (1024 * 1024)).toFixed(2).replace('.', ',')

  const formatPhone = (digits) => {
    const d = (digits || '').slice(0, 11)
    if (!d) return ''
    if (d.length <= 2) return `(${d}`
    if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
    if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
    return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3, 7)}-${d.slice(7, 11)}`
  }

  // valida obrigatórios (mensagem e anexo são opcionais)
  const validate = (data) => {
    const e = {}
    if (!data.nome?.trim()) e.nome = 'Informe seu nome completo.'
    if (!data.email?.trim()) e.email = 'Informe seu e-mail.'
    else if (!isEmailValid(data.email)) e.email = 'E-mail inválido.'
    const tel = onlyDigits(data.telefone)
    if (!tel) e.telefone = 'Informe seu telefone com DDD.'
    else if (tel.length < 10 || tel.length > 11) e.telefone = 'Telefone deve ter 10 ou 11 dígitos.'
    return e
  }

  const validateField = (name, value) => {
    const temp = validate({ ...formData, [name]: value })
    setErrors((prev) => ({ ...prev, [name]: temp[name] }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'telefone') return
    if (name === 'mensagem') {
      const sliced = (value || '').slice(0, MSG_MAX)
      setFormData((prev) => ({ ...prev, mensagem: sliced }))
      return
    }
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) validateField(name, value)
  }

  // telefone com máscara
  const handleTelChange = (e) => {
    const digits = onlyDigits(e.target.value).slice(0, 11)
    setFormData((prev) => ({ ...prev, telefone: digits }))
    if (errors.telefone) validateField('telefone', digits)
  }
  const handleTelKeyDown = (e) => {
    const ctrl = e.ctrlKey || e.metaKey
    const allowedNav = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'Tab']
    if (ctrl || allowedNav.includes(e.key)) return
    if (!/^\d$/.test(e.key)) e.preventDefault()
  }
  const handleTelPaste = (e) => {
    e.preventDefault()
    const digits = onlyDigits((e.clipboardData || window.clipboardData).getData('text')).slice(0, 11)
    setFormData((prev) => ({ ...prev, telefone: digits }))
    if (errors.telefone) validateField('telefone', digits)
  }

  // anexo: valida tamanho (<= 5 MB), reseta input se inválido
  const handleFileChange = (e) => {
    const file = e.target.files?.[0] ?? null
    if (!file) {
      setFormData((prev) => ({ ...prev, anexo: null }))
      setErrors((prev) => ({ ...prev, anexo: undefined }))
      return
    }

    if (file.size > MAX_FILE_BYTES) {
      setErrors((prev) => ({
        ...prev,
        anexo: `Arquivo muito grande. Máximo ${MAX_FILE_MB} MB. O seu tem ${formatMB(file.size)} MB.`,
      }))
      setFormData((prev) => ({ ...prev, anexo: null }))
      setFileKey((k) => k + 1) // limpa o input file
      return
    }

    setErrors((prev) => ({ ...prev, anexo: undefined }))
    setFormData((prev) => ({ ...prev, anexo: file }))
  }

  const parseErrorResponse = async (res) => {
    const statusMsg = {
      400: 'Dados inválidos. Verifique os campos.',
      401: 'Não autorizado.',
      403: 'Permissão negada.',
      413: 'Arquivo muito grande.',
      429: 'Muitas tentativas. Tente novamente mais tarde.',
      500: 'Falha no servidor.',
      502: 'Instabilidade no serviço.',
      503: 'Serviço indisponível.',
    }[res.status]
    try {
      const txt = await res.text()
      try {
        const j = JSON.parse(txt)
        return j?.Message || j?.message || j?.error || statusMsg || `Erro ${res.status}`
      } catch {
        return txt || statusMsg || `Erro ${res.status}`
      }
    } catch {
      return statusMsg || 'Não foi possível enviar.'
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isLoading) return

    setFormError(null)
    const fieldErrors = validate(formData)
    setErrors(fieldErrors)

    // checagem defensiva do anexo antes de enviar
    if (formData.anexo && formData.anexo.size > MAX_FILE_BYTES) {
      setErrors((prev) => ({
        ...prev,
        anexo: `Arquivo muito grande. Máximo ${MAX_FILE_MB} MB. O seu tem ${formatMB(formData.anexo.size)} MB.`,
      }))
      setFormError('Há erros no formulário. Corrija os campos destacados.')
      return
    }

    if (Object.keys(fieldErrors).length) {
      const firstKey = Object.keys(fieldErrors)[0]
      firstErrorRef.current?.querySelector(`[name="${firstKey}"]`)?.focus()
      setFormError('Há erros no formulário. Corrija os campos destacados.')
      return
    }

    setIsLoading(true)
    try {
      // nomes do arquivo (original e encodado)
      const originalName = formData.anexo?.name || ''
      const encodedName = originalName ? encodeURIComponent(originalName) : ''

      // cria o documento com os novos campos
      const payload = {
        nome: formData.nome.trim(),
        email: formData.email.trim(),
        telefone: onlyDigits(formData.telefone),
        mensagem: formData.mensagem?.trim() || '',
        dataEnvio: new Date().toISOString(),
        status: 'pending',

        // campos usados no template de e-mail/trigger
        anexo: originalName,
        anexoEncoded: encodedName,
      }

      const createRes = await fetch('/api/dataentities/FC/documents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/vnd.vtex.ds.v10+json',
        },
        body: JSON.stringify(payload),
      })

      if (!createRes.ok) throw new Error(await parseErrorResponse(createRes))

      const created = await createRes.json()
      let rawId = created?.Id || created?.id || created?.DocumentId || created?.documentId
      if (!rawId) throw new Error('Não foi possível obter o ID do documento.')
      const docId = rawId.startsWith('FC-') ? rawId.slice(3) : rawId

      // upload do arquivo (usa o nome original)
      if (formData.anexo) {
        const fd = new FormData()
        fd.append('file', formData.anexo, originalName)
        const uploadUrl = `/api/dataentities/FC/documents/${docId}/anexo/attachments`

        let uploadRes = await fetch(uploadUrl, {
          method: 'POST',
          headers: { Accept: 'application/vnd.vtex.ds.v10+json' },
          body: fd,
        })
        if (!uploadRes.ok) {
          uploadRes = await fetch(uploadUrl, {
            method: 'PUT',
            headers: { Accept: 'application/vnd.vtex.ds.v10+json' },
            body: fd,
          })
        }
        if (!uploadRes.ok) throw new Error(`Falha ao enviar anexo: ${await parseErrorResponse(uploadRes)}`)
      }

      setIsSubmitted(true)
      // rola a página até o topo do componente para mostrar o banner
      setTimeout(() => {
        firstErrorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)

      setFormData({ nome: '', email: '', telefone: '', mensagem: '', anexo: null })
      setErrors({})
      setFileKey((k) => k + 1)
    } catch (err) {
      console.error(err)
      setFormError(err?.message || 'Não foi possível enviar. Tente novamente em instantes.')
    } finally {
      setIsLoading(false)
    }
  }

  const fieldStyle = (hasError) => ({
    ...inputStyle,
    borderColor: hasError ? '#c0392b' : '#dd5600',
    boxShadow: hasError ? '0 0 0 1px rgba(192,57,43,.2)' : 'none',
  })

  return (
    <div className={styles.containerFaleConosco} ref={firstErrorRef}>
      <div className={styles.fraseForm}>
        <p>Preencha as informações abaixo para abrir um ticket no nosso atendimento.</p>
      </div>

      {/* Banner de sucesso inline, sem sobrepor o restante */}
      {isSubmitted && (
        <div className={styles.successBanner} role="status" aria-live="polite">
          <strong>Recebido com sucesso!</strong>
          <div>Em breve entraremos em contato.</div>
        </div>
      )}

      {/* Renderiza o formulário apenas enquanto não foi enviado */}
      {!isSubmitted && (
        <form className={styles.formContato} onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: 14 }}>
          {formError && (
            <div role="alert" className={styles.formErrorBox}>
              {formError}
            </div>
          )}

          <div>
            <label htmlFor="fc-nome" className={styles.labelForm}>Nome Completo:</label>
            <input
              id="fc-nome"
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              onBlur={(e) => validateField('nome', e.target.value)}
              placeholder="Nome"
              required
              disabled={isLoading}
              autoComplete="name"
              aria-invalid={!!errors.nome}
              aria-describedby="err-nome"
              style={fieldStyle(!!errors.nome)}
            />
            {errors.nome && <small id="err-nome" className={styles.errorText}>{errors.nome}</small>}
          </div>

          <div>
            <label htmlFor="fc-email" className={styles.labelForm}>E-mail:</label>
            <input
              id="fc-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={(e) => validateField('email', e.target.value)}
              placeholder="Email"
              required
              disabled={isLoading}
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby="err-email"
              style={fieldStyle(!!errors.email)}
            />
            {errors.email && <small id="err-email" className={styles.errorText}>{errors.email}</small>}
          </div>

          <div>
            <label htmlFor="fc-telefone" className={styles.labelForm}>Telefone:</label>
            <input
              id="fc-telefone"
              type="tel"
              name="telefone"
              value={formatPhone(formData.telefone)}
              onChange={handleTelChange}
              onKeyDown={handleTelKeyDown}
              onPaste={handleTelPaste}
              onBlur={(e) => validateField('telefone', onlyDigits(e.target.value))}
              placeholder="Telefone"
              required
              disabled={isLoading}
              autoComplete="tel"
              inputMode="numeric"
              aria-invalid={!!errors.telefone}
              aria-describedby="err-telefone"
              maxLength={16}
              style={fieldStyle(!!errors.telefone)}
            />
            {errors.telefone && <small id="err-telefone" className={styles.errorText}>{errors.telefone}</small>}
          </div>

          <div>
            <label htmlFor="fc-mensagem" className={styles.labelForm}>Mensagem:</label>
            <textarea
              id="fc-mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              placeholder="Escreva sua mensagem aqui"
              rows={4}
              disabled={isLoading}
              maxLength={MSG_MAX}
              style={{ ...inputStyle, minHeight: 104, resize: 'vertical' }}
              aria-describedby="mensagem-count"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
              <small id="mensagem-count" aria-live="polite" className={styles.helpText}>
                {formData.mensagem.length}/{MSG_MAX}
              </small>
            </div>
          </div>

          {/* Anexo opcional com limite de 5 MB */}
          <div>
            <label htmlFor="fc-anexo" className={styles.labelForm}>Enviar Anexo</label>
            <input
              id="fc-anexo"
              key={fileKey}
              type="file"
              name="anexo"
              onChange={handleFileChange}
              disabled={isLoading}
              style={fieldStyle(!!errors.anexo)}
              aria-describedby="anexo-help err-anexo"
              // accept=".pdf,image/*"
            />
            <div id="anexo-help" className={styles.helpText} style={{ marginTop: 4 }}>
              Tamanho máximo: {MAX_FILE_MB} MB.
              {formData.anexo && (
                <span> Arquivo selecionado: {formData.anexo.name} ({formatMB(formData.anexo.size)} MB)</span>
              )}
            </div>
            {errors.anexo && <small id="err-anexo" className={styles.errorText}>{errors.anexo}</small>}
          </div>

          <button type="submit" disabled={isLoading} style={{ width: '100%', height: 45, backgroundColor: isLoading ? '#ccc' : '#dd5600', border: 'none', borderRadius: 2, color: '#fff', fontSize: 16, fontWeight: 700, cursor: isLoading ? 'not-allowed' : 'pointer' }} >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      )}

      {/* Estes blocos ficam sempre visíveis */}
      <div className={styles.wrapperCardsFaleConosco}>
        <div className={styles.cardFaleConosco}>
          <div className={styles.titleCardFaleConosco}><h3>Precisa de Ajuda?</h3></div>
          <div className={styles.textCardFaleConosco}><p>SAC: (11) 4000-1567</p></div>
        </div>
        <div className={styles.cardFaleConosco}>
          <div className={styles.titleCardFaleConosco}><h3>Vendas para Empresas</h3></div>
          <div className={styles.textCardFaleConosco}><p>WhatsApp: (11) 93236-1811</p></div>
        </div>
        <div className={styles.cardFaleConosco}>
          <div className={styles.titleCardFaleConosco}><h3>Entre em contato</h3></div>
          <div className={styles.textCardFaleConosco}><p>E-mail: sac@maravilhasdolar.com.br</p></div>
        </div>
      </div>

      <div className={styles.wrapperCtasFaleConosco}>
        <div className={styles.ctaFaleConosco}><a href="https://lp.maravilhasdolar.com/vagas-maravilhas-do-lar" target="_blank" rel="noreferrer">Trabalhe Conosco</a></div>
        <div className={styles.ctaFaleConosco}><a href="https://form.jotform.com/mktmlar/cadastro-de-fornecedor" target="_blank" rel="noreferrer">Seja um Fornecedor</a></div>
        <div className={styles.ctaFaleConosco}><a href="/nossas-lojas">Nossas Lojas</a></div>
        <div className={styles.ctaFaleConosco}><a href="/faq">Perguntas Frequentes</a></div>
        <div className={styles.ctaFaleConosco}><a href="/rastreie-seu-pedido">Rastreie o seu pedido</a></div>
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  height: '41px',
  padding: '15px 20px',
  border: '1px solid #dd5600',
  borderRadius: 2,
  fontSize: 14,
  backgroundColor: 'transparent',
  outline: 'none',
  boxSizing: 'border-box',
  color: '#333333',
}

export default FormContato
