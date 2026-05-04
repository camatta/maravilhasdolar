import React, { useState, useRef } from 'react'
import styles from './FormTrabalheConosco.css'

const MAX_FILE_MB = 5
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024

const DEFAULT_CIDADES = [
  'Americana (SP)',
  'Amparo (SP)',
  'Araçatuba (SP)',
  'Araraquara (SP)',
  'Bauru (SP)',
  'Botucatu (SP)',
  'Campinas (SP)',
  'Capivari (SP)',
  'Catanduva (SP)',
  'Cosmópolis (SP)',
  'Franca (SP)',
  'Hortolândia (SP)',
  'Indaiatuba (SP)',
  'Valinhos (SP)',
  'Várzea Paulista (SP)',
]

const normalizeCidade = (cidade) => {
  if (typeof cidade === 'string') return cidade.trim()
  return (cidade?.__editorItemTitle || cidade?.nome || '').trim()
}

const getCidadesOptions = (cidades) => {
  const source = Array.isArray(cidades) && cidades.length ? cidades : DEFAULT_CIDADES

  return source.map(normalizeCidade).filter(Boolean)
}

const CIDADES_TEXTO_DEFAULT = DEFAULT_CIDADES.join('\n')

const getCidadesFromText = (cidadesTexto) => {
  if (typeof cidadesTexto !== 'string' || !cidadesTexto.trim()) return []

  return cidadesTexto
    .split('\n')
    .map((cidade) => cidade.trim())
    .filter(Boolean)
}

const FormTrabalheConosco = ({ cidades, cidadesTexto = CIDADES_TEXTO_DEFAULT }) => {
  const cidadesOptions = getCidadesFromText(cidadesTexto)

  if (!cidadesOptions.length) cidadesOptions.push(...getCidadesOptions(cidades))
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
    cidade: '',
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

  const validate = (data) => {
    const e = {}
    if (!data.nome?.trim()) e.nome = 'Informe seu nome completo.'
    if (!data.email?.trim()) e.email = 'Informe seu e-mail.'
    else if (!isEmailValid(data.email)) e.email = 'E-mail inválido.'
    const tel = onlyDigits(data.telefone)
    if (!tel) e.telefone = 'Informe seu telefone com DDD.'
    else if (tel.length < 10 || tel.length > 11) e.telefone = 'Telefone deve ter 10 ou 11 dígitos.'
    if (!data.cidade) e.cidade = 'Selecione uma cidade.'
    return e
  }

  const validateField = (name, value) => {
    const temp = validate({ ...formData, [name]: value })
    setErrors((prev) => ({ ...prev, [name]: temp[name] }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'telefone') return
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) validateField(name, value)
  }

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
      setFileKey((k) => k + 1)
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

    if (formData.anexo && formData.anexo.size > MAX_FILE_BYTES) {
      setErrors((prev) => ({
        ...prev,
        anexo: `Arquivo muito grande. Máximo ${MAX_FILE_MB} MB. O seu tem ${formatMB(formData.anexo.size)} MB.`,
      }))
      setFormError('Há erros no formulário. Corrija os campos destacados.')
      return
    }

    if (Object.keys(fieldErrors).length) {
      firstErrorRef.current?.querySelector(`[name="${Object.keys(fieldErrors)[0]}"]`)?.focus()
      setFormError('Há erros no formulário. Corrija os campos destacados.')
      return
    }

    setIsLoading(true)
    try {
      const originalName = formData.anexo?.name || ''
      const encodedName = originalName ? encodeURIComponent(originalName) : ''

      const payload = {
        nome: formData.nome.trim(),
        email: formData.email.trim(),
        telefone: onlyDigits(formData.telefone),
        cidade: formData.cidade,
        dataEnvio: new Date().toISOString(),
        status: 'pending',
        anexo: originalName,
        anexoEncoded: encodedName,
      }

      const createRes = await fetch('/api/dataentities/TC/documents', {
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
      const docId = rawId.startsWith('TC-') ? rawId.slice(3) : rawId

      if (formData.anexo) {
        const fd = new FormData()
        fd.append('file', formData.anexo, originalName)
        const uploadUrl = `/api/dataentities/TC/documents/${docId}/anexo/attachments`

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
      setTimeout(() => {
        firstErrorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)

      setFormData({ nome: '', email: '', telefone: '', cidade: '', anexo: null })
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
    borderColor: hasError ? '#c0392b' : '#ccc',
    boxShadow: hasError ? '0 0 0 1px rgba(192,57,43,.2)' : 'none',
  })

  return (
    <div className={styles.containerFaleConosco} ref={firstErrorRef}>
      {!isSubmitted && (
        <div className={styles.fraseForm}>
        <p>Quer fazer parte do time da Mara?<br/>Preencha o formulário abaixo para se cadastrar<br/>em nosso banco de talentos. </p>
        </div>
      )}

      {isSubmitted && (
        <div className={styles.successBanner} role="status" aria-live="polite">
          <strong>Currículo enviado com sucesso!</strong>
        </div>
      )}

      {!isSubmitted && (
        <form className={styles.formTrabalheConosco} onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: 14 }}>
          {formError && (
            <div role="alert" className={styles.formErrorBox}>
              {formError}
            </div>
          )}

          <div>
            <label htmlFor="tc-nome" className={styles.labelForm}>Nome:</label>
            <input
              id="tc-nome"
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              onBlur={(e) => validateField('nome', e.target.value)}
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
            <label htmlFor="tc-email" className={styles.labelForm}>E-mail:</label>
            <input
              id="tc-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={(e) => validateField('email', e.target.value)}
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
            <label htmlFor="tc-telefone" className={styles.labelForm}>Telefone:</label>
            <input
              id="tc-telefone"
              type="tel"
              name="telefone"
              value={formatPhone(formData.telefone)}
              onChange={handleTelChange}
              onKeyDown={handleTelKeyDown}
              onPaste={handleTelPaste}
              onBlur={(e) => validateField('telefone', onlyDigits(e.target.value))}
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
            <label htmlFor="tc-cidade" className={styles.labelForm}>Cidade</label>
            <select
              id="tc-cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleInputChange}
              onBlur={(e) => validateField('cidade', e.target.value)}
              disabled={isLoading}
              aria-invalid={!!errors.cidade}
              aria-describedby="err-cidade"
              style={{ ...fieldStyle(!!errors.cidade), height: 41, cursor: 'pointer' }}
            >
              <option value="">Selecionar cidade</option>
              {cidadesOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.cidade && <small id="err-cidade" className={styles.errorText}>{errors.cidade}</small>}
          </div>

          <div>
            <label htmlFor="tc-anexo" className={styles.labelForm}>Anexo</label>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            border: `1px dashed ${errors.anexo ? '#c0392b' : '#C0C0C0'}`,
            borderRadius: 40,
            padding: '0 16px',
            height: 48,
            backgroundColor: '#fff',
            cursor: 'pointer',
            }}
            onClick={() => document.getElementById('tc-anexo').click()}
        >
            <span style={{
            backgroundColor: '#ff6600',
            color: '#fff',
            fontSize: 13,
            fontWeight: 600,
            padding: '6px 16px',
            borderRadius: 40,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            }}>
            Escolher arquivo
            </span>
            <span style={{
            fontSize: 13,
            color: formData.anexo ? '#333' : '#aaa',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            }}>
            {formData.anexo ? formData.anexo.name : 'Anexe o seu currículo'}
            </span>
        </div>

        {/* Input real escondido */}
        <input
            id="tc-anexo"
            key={fileKey}
            type="file"
            name="anexo"
            onChange={handleFileChange}
            disabled={isLoading}
            accept=".pdf,.doc,.docx"
            style={{ display: 'none' }}
            aria-describedby="anexo-help err-anexo"
        />

        <div id="anexo-help" className={styles.helpText} style={{ marginTop: 4 }}>
            Tamanho máximo: {MAX_FILE_MB} MB.
            {formData.anexo && (
            <span> ({formatMB(formData.anexo.size)} MB)</span>
            )}
        </div>
        {errors.anexo && <small id="err-anexo" className={styles.errorText}>{errors.anexo}</small>}
        </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              height: 45,
              backgroundColor: isLoading ? '#ccc' : '#ccc',
              border: 'none',
              borderRadius: 2,
              color: '#fff',
              fontSize: 16,
              fontWeight: 700,
              cursor: isLoading ? 'not-allowed' : 'pointer',
            }}
          >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      )}
    </div>
  )
}

FormTrabalheConosco.schema = {
  title: 'Formulario Trabalhe Conosco',
  type: 'object',
  properties: {
    cidadesTexto: {
      type: 'string',
      title: 'Cidades',
      description: 'Cadastre uma cidade por linha. Exemplo: Campinas (SP)',
      default: CIDADES_TEXTO_DEFAULT,
      widget: {
        'ui:widget': 'textarea',
      },
    },
  },
}

const inputStyle = {
  width: '100%',
  height: '48px', // Um pouco mais alto, padrão Figma
  padding: '0 25px',
  border: '1px solid #EAEAEA', // Cinza neutro do Figma
  borderRadius: '25px', // Arredondado estilo pílula
  fontSize: '14px',
  backgroundColor: '#FFFFFF',
  outline: 'none',
  boxSizing: 'border-box',
  color: '#333333',
  transition: 'all 0.3s ease', // Suaviza a mudança de cor ao clicar
}


export default FormTrabalheConosco
