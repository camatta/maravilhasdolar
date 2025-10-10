import React, { useMemo, useState, useEffect } from 'react'
import { useProduct } from 'vtex.product-context'

const formatMoney = (v, currency = 'BRL') =>
  (v / 100).toLocaleString('pt-BR', { style: 'currency', currency })

const formatEstimate = (estimate) => {
  if (!estimate) return ''
  const m = estimate.match(/^(\d+)(bd|d|h)$/i)
  if (!m) return estimate
  const num = m[1]
  const unit = m[2].toLowerCase()
  if (unit === 'bd') return `${num} dia${num === '1' ? '' : 's'} útil${num === '1' ? '' : 'eis'}`
  if (unit === 'd') return `${num} dia${num === '1' ? '' : 's'}`
  return `${num} h`
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
      <div className="flex justify-between items-start">
        <div className="mr3">
          <div className="fw6">{name}</div>
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
          {rightBadge ? <span className="dib mt1 pv1 ph2 br2 ba b--muted-4 c-muted-1 f7">{rightBadge}</span> : null}
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
  const [deliveries, setDeliveries] = useState([]) // deliveryChannel === 'delivery'
  const [pickups, setPickups] = useState([])       // deliveryChannel === 'pickup-in-point'

  const skuId = useMemo(() => productContext?.selectedItem?.itemId, [productContext])
  const seller = useMemo(
    () => productContext?.selectedItem?.sellers?.[0]?.sellerId || '1',
    [productContext]
  )

  useEffect(() => {
    // ao trocar o SKU, limpa resultados
    setDeliveries([])
    setPickups([])
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

      // log opcional para inspeção do payload bruto
      console.log('🔍 Retorno bruto da simulação:', data)

      setCurrency(data?.storePreferencesData?.currencyCode || 'BRL')

      const slas = (data?.logisticsInfo?.[0]?.slas || []).slice()

      // separa por canal
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

  const cheapestDelivery = deliveries[0]?.price
  const cheapestPickup = pickups[0]?.price

  return (
    <div className="pa4 br3 ba b--muted-4">
      <div className="mb3">
        <div className="flex">
          <input
            className="input-reset ba b--muted-4 br2 pa3 mr2 w-100"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={handleCepChange}
            maxLength={9}
            inputMode="numeric"
          />
          <button
            className="br2 ba b--transparent pv3 ph4 pointer"
            onClick={handleSimulate}
            disabled={loading}
          >
            {loading ? 'Calculando…' : 'OK'}
          </button>
        </div>
        <small className="mt2 db c-muted-2">Ex.: 30130-010</small>
      </div>

      {error && <div className="c-danger mb3">{error}</div>}

      {!loading && !error && deliveries.length === 0 && pickups.length === 0 && (
        <div className="c-muted-1">Informe o CEP para ver opções de entrega e retirada.</div>
      )}

      {/* Entrega em domicílio */}
      {deliveries.length > 0 && (
        <div className="mb4">
          <h4 className="mt0 mb3">Entrega em domicílio</h4>
          <ul className="list pl0 ma0">
            {deliveries.map((s) => (
              <ShippingRow
                key={s.id || s.name}
                name={s.name}
                price={s.price}
                estimate={s.shippingEstimate}
                deliveryWindow={s.deliveryWindow}
                rightBadge={s.price === cheapestDelivery ? 'Mais barato' : null}
              />
            ))}
          </ul>
        </div>
      )}

      {/* Retirar em loja/ponto */}
      {pickups.length > 0 && (
        <div className="mb2">
          <h4 className="mt0 mb3">Retirar em loja/ponto</h4>
          <ul className="list pl0 ma0">
            {pickups.map((s) => {
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
                  name={s.name}
                  price={s.price}
                  estimate={s.shippingEstimate}
                  deliveryWindow={s.deliveryWindow}
                  rightBadge={s.price === cheapestPickup ? 'Mais barato' : null}
                  extra={extra}
                />
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ShippingNairuz