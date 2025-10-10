import React, { useMemo, useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useProduct } from 'vtex.product-context'
import styles from './shipping-nairuz.css'

const formatMoney = (v, currency = 'BRL') => {
  if (v === 0) return 'Grátis'
  if (v == null || isNaN(v)) return '-'
  return (v / 100).toLocaleString('pt-BR', { style: 'currency', currency })
}

const formatEstimate = (estimate) => {
  if (!estimate) return ''
  const m = estimate.match(/^(\d+)(bd|d|h)$/i)
  if (!m) return estimate

  const n = parseInt(m[1], 10)
  const unit = m[2].toLowerCase()

  if (unit === 'bd') return n === 1 ? '1 dia útil' : `${n} dias úteis`
  if (unit === 'd') return n === 1 ? '1 dia' : `${n} dias`
  return n === 1 ? '1 hora' : `${n} horas`
}

const getSalesChannel = () => {
  try {
    const rt = window.__RUNTIME__ || {}
    return rt.segment?.channel || rt.binding?.salesChannel || '1'
  } catch {
    return '1'
  }
}

const ShippingRow = ({ name, price, estimate, deliveryWindow, rightBadge, extra }) => {
  return (
    <li className="pv3 bt b--muted-4">
      <div className="flex justify-between items-center">
        <div className="mr5">
          <div className="fw6 mb3">{name}</div>
          <div className="c-muted-1">
            {deliveryWindow
              ? `Janela: ${new Date(deliveryWindow.startDateUtc).toLocaleString('pt-BR')} — ${new Date(
                  deliveryWindow.endDateUtc
                ).toLocaleString('pt-BR')}`
              : `Prazo: ${formatEstimate(estimate)}`}
          </div>
          {extra ? <div className="c-muted-1 mt1">{extra}</div> : null}
        </div>
        <div className="tr">
          <div className="fw7">{formatMoney(price)}</div>
        </div>
      </div>
    </li>
  )
}

const ShippingNairuz = () => {
  const productContext = useProduct()
  const [cep, setCep] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currency, setCurrency] = useState('BRL')
  const [deliveries, setDeliveries] = useState([])
  const [pickups, setPickups] = useState([])

  // ver mais/ver menos (retirada)
  const [showAllPickups, setShowAllPickups] = useState(false)
  const listRef = useRef(null)
  const [listHeight, setListHeight] = useState('0px')

  const skuId = useMemo(() => productContext?.selectedItem?.itemId, [productContext])
  const seller = useMemo(
    () => productContext?.selectedItem?.sellers?.[0]?.sellerId || '1',
    [productContext]
  )

  useEffect(() => {
    setDeliveries([])
    setPickups([])
    setShowAllPickups(false)
    setError(null)
  }, [skuId])

  const handleCepChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 8)
    const masked = digits.replace(/(\d{5})(\d{1,3})/, '$1-$2')
    setCep(masked)
  }

  const handleSimulate = async () => {
    setError(null)
    setDeliveries([])
    setPickups([])
    setShowAllPickups(false)

    if (!skuId) {
      setError('Selecione uma variação antes de simular.')
      return
    }
    const cleanCep = cep.replace(/\D/g, '')
    if (cleanCep.length !== 8) {
      setError('Informe um CEP válido (8 dígitos).')
      return
    }

    setLoading(true)
    try {
      const sc = getSalesChannel()
      const params = new URLSearchParams()
      params.set('sc', sc)

      const res = await fetch(`/api/checkout/pub/orderForms/simulation?${params.toString()}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{ id: skuId, quantity: 1, seller }],
          postalCode: cleanCep,
          country: 'BRA'
        })
      })

      if (!res.ok) throw new Error(`Falha na simulação (${res.status})`)
      const data = await res.json()
      console.log('🔍 Retorno bruto da simulação:', data)

      setCurrency(data?.storePreferencesData?.currencyCode || 'BRL')

      const slas = (data?.logisticsInfo?.[0]?.slas || []).slice()
      const d = slas.filter(s => s.deliveryChannel === 'delivery').sort((a, b) => a.price - b.price)
      const p = slas.filter(s => s.deliveryChannel === 'pickup-in-point').sort((a, b) => a.price - b.price)

      setDeliveries(d)
      setPickups(p)
    } catch (e) {
      setError(e?.message || 'Erro ao simular frete.')
    } finally {
      setLoading(false)
    }
  }

  // mede a altura do conteúdo atual (1 item quando colapsado, todos quando expandido)
  useLayoutEffect(() => {
    if (!listRef.current) return
    const h = listRef.current.scrollHeight
    setListHeight(`${h}px`)
  }, [pickups, showAllPickups])

  const cheapestDelivery = deliveries[0]?.price
  const cheapestPickup = pickups[0]?.price
  const hasMorePickups = pickups.length > 1

  // renderiza somente a primeira retirada quando colapsado
  const visiblePickups = showAllPickups ? pickups : pickups.slice(0, 1)

  return (
    <div className="wrapperShipping">
      {/* Input/CTA/Link com seus estilos */}
      <div className={styles.inputBlock}>
        <div className={styles.inputRow}>
          <input
            className={styles.cepInput}
            placeholder="Insira o seu CEP"
            value={cep}
            onChange={handleCepChange}
            maxLength={9}
            inputMode="numeric"
            aria-label="Insira o seu CEP"
          />
          <button
            className={styles.calcButton}
            onClick={handleSimulate}
            disabled={loading}
            aria-label="Calcular frete"
          >
            {loading ? '...' : 'Calcular'}
          </button>
        </div>

        <a
          className={styles.helpLink}
          href="https://buscacepinter.correios.com.br/app/endereco/index.php?t"
          target="_blank"
          rel="noopener noreferrer"
        >
          Não sei meu CEP
        </a>
      </div>

      {error && <div className="c-danger mb3">{error}</div>}

      {!loading && !error && deliveries.length === 0 && pickups.length === 0 && (
        <div className="c-muted-1"></div>
      )}

      {/* Entrega primeiro */}
      {deliveries.length > 0 && (
        <div className="mb4">
          <h4 className={styles.titleModalidade}>Entrega:</h4>
          <ul className="list pl0 ma0">
            {deliveries.map((s) => (
              <ShippingRow
                key={s.id || s.name}
                name={'Entrega Maravilhas do Lar'}
                price={s.price}
                estimate={s.shippingEstimate}
                deliveryWindow={s.deliveryWindow}
                rightBadge={s.price === cheapestDelivery ? 'Mais barato' : null}
              />
            ))}
          </ul>
        </div>
      )}

      {/* Retirada com animação de expandir/recolher */}
      {pickups.length > 0 && (
        <div className="mb2">
          <h4 className={styles.titleModalidade}>Retirada em loja:</h4>

          <div
            className={styles.pickupListWrapper}
            style={{
              maxHeight: listHeight,
              opacity: showAllPickups ? 1 : 0.95,
              transition: 'max-height 0.5s ease, opacity 0.4s ease',
              overflow: 'hidden'
            }}
            ref={listRef}
          >
            <ul className="list pl0 ma0">
              {visiblePickups.map((s) => {
                const info = s.pickupStoreInfo || {}
                const addr = info.address
                const extra = info.isPickupStore
                  ? `${info.friendlyName || 'Ponto de retirada'}${
                      addr
                        ? ` — ${[addr.street, addr.neighborhood, addr.city].filter(Boolean).join(', ')}`
                        : ''
                    }`
                  : null

                return (
                  <ShippingRow
                    key={s.id || s.name}
                    name={extra}
                    price={s.price}
                    estimate={s.shippingEstimate}
                    deliveryWindow={s.deliveryWindow}
                    rightBadge={s.price === cheapestPickup ? 'Mais barato' : null}
                  />
                )
              })}
            </ul>
          </div>

          {hasMorePickups && (
            <div className={styles.toggleRow}>
              <button
                className={styles.toggleButton}
                onClick={() => setShowAllPickups((v) => !v)}
                aria-expanded={showAllPickups}
              >
                {showAllPickups
                  ? 'Ver menos opções de retirada'
                  : `Ver mais opções de retirada (${pickups.length - 1})`}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ShippingNairuz