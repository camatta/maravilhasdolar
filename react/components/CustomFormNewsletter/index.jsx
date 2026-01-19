import React, { useRef, useState } from "react";

import InputMask from "react-input-mask";

import styles from "./CustomFormNewsletter.css";

const CustomFormNewsletter = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formError, setFormError] = useState(null);
    const [messageSuccess, setMessageSuccess] = useState(null);
    const [errors, setErrors] = useState({});
    const firstErrorRef = useRef(null);
    const [formData, setFormData] = useState({ email: "", cpf: "", optIn: true });

    const isEmailValid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v || '').trim());

    const cpfSemPontuacoes = (v) => v.replace(/\.|-/g, "");

    // valida obrigatórios (mensagem e anexo são opcionais)
    const validate = (data) => {
        const e = {};
        if (!isEmailValid(data.email)) e.email = 'E-mail inválido.';
        return e;
    }

    const validateField = (name, value) => {
        if(value.length > 0) {
            const temp = validate({ ...formData, [name]: value });
            setErrors((prev) => ({ ...prev, [name]: temp[name] }));
        } else {
            setErrors({});
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if(name === "optIn") {
            setFormData((prev) => ({ ...prev, [name]: e.target.checked }));
        } else if(name === "cpf") {
            setFormData((prev) => ({ ...prev, [name]: cpfSemPontuacoes(value) }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
        if (errors[name]) validateField(name, value);
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
            503: 'Serviço indisponível.'
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
        e.preventDefault();
        if (isLoading) return;

        setFormError(null);
        const fieldErrors = validate(formData);
        setErrors(fieldErrors);

        if (Object.keys(fieldErrors).length) {
            const firstKey = Object.keys(fieldErrors)[0];
            firstErrorRef.current?.querySelector(`[name="${firstKey}"]`)?.focus();
            setFormError('Há erros no formulário. Corrija os campos destacados.');
            return;
        }

        setIsLoading(true);
        try {
            // cria o documento com os novos campos
            const payload = {
                email: formData.email.trim(),
                cpf: formData.cpf,
                optIn: formData.optIn,
                dataEnvio: new Date().toISOString()
            };

            const createRes = await fetch('https://centerlar.myvtex.com/custom-newsletter-rock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/vnd.vtex.ds.v10+json',
                },
                body: JSON.stringify(payload)
            });

            if (!createRes.ok) throw new Error(await parseErrorResponse(createRes));

            setFormData({ email: "", cpf: "", optIn: true });
            setErrors({});
            setMessageSuccess("Formulário enviado com sucesso!");

            setTimeout(() => setMessageSuccess(null), 4000);
        } catch (err) {
            console.error(err);
            setFormError(err?.message || 'Não foi possível enviar. Tente novamente em instantes.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div ref={firstErrorRef}>
            {formError && ( <div className={styles.errorForm} role="alert">{ formError }</div> )}
            {messageSuccess && ( <div className={styles.messageSuccess} role="alert">{ messageSuccess }</div> )}

            <form onSubmit={handleSubmit} noValidate className={styles.formNewsletter}>
                <div className={styles.fields}>
                    <div className={styles.firstLine}>
                        <div className={styles.field}>
                            <input
                                id="fc-email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                onBlur={(e) => validateField('email', e.target.value)}
                                placeholder="Insira seu melhor e-mail"
                                required
                                disabled={isLoading}
                                autoComplete="email"
                                aria-invalid={!!errors.email}
                                aria-describedby="err-email"
                                className={styles.inputEmail}
                            />
                            {errors.email && <small id="err-email">{ errors.email }</small>}
                        </div>

                        <div className={styles.field}>
                            <InputMask
                                id="fc-cpf"
                                name="cpf"
                                mask="999.999.999-99"
                                value={formData.cpf}
                                onChange={handleInputChange}
                                placeholder="Insira seu CPF"
                                type="tel"
                                onBlur={(e) => validateField('cpf', e.target.value)}
                                disabled={isLoading}
                                aria-invalid={!!errors.cpf}
                                aria-describedby="err-cpf"
                                className={styles.inputCpf}
                            />
                            {errors.cpf && <small id="err-cpf">{ errors.cpf }</small>}
                        </div>
                    </div>

                    
                    

                    <div className={`${styles.field} ${styles.optIn}`}>
                        <input
                            id="fc-optIn"
                            type="checkbox"
                            name="optIn"
                            onChange={handleInputChange}
                            disabled={isLoading}
                            className={styles.optIn}
                            checked={formData.optIn}
                        />
                        <label htmlFor="fc-optIn">Aceito receber ofertas e participar do clube de fidelidade</label>
                    </div>
                </div>

                <button type="submit" disabled={isLoading} className={styles.buttonSubmit}>
                    <div>{isLoading ? 'Enviando...' : 'Enviar'}</div>
                </button>
            </form>
        </div>
    )
}

export default CustomFormNewsletter;