import React, { useEffect, useMemo, useState } from 'react'
import { withApollo } from 'react-apollo'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'

import productRatingSummaryQuery from '../../../queries/productRatingSummary.gql'
import styles from './buyTogether.css'

const TOTAL_PRODUCTS = 2

const formatPrice = (price) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price || 0)

const getSalesChannel = () => {
  if (typeof window === 'undefined') return '1'

  const runtime = window.__RUNTIME__ || {}

  return runtime.segment?.channel || runtime.binding?.salesChannel || '1'
}

const getProductItem = (product) => product?.items?.[0] || null

const getProductSeller = (product) => {
  const sellers = getProductItem(product)?.sellers || []

  return (
    sellers.find((seller) => seller?.sellerDefault) ||
    sellers.find((seller) => seller?.commertialOffer?.AvailableQuantity > 0) ||
    sellers[0] ||
    null
  )
}

const getCommercialOffer = (product) => getProductSeller(product)?.commertialOffer || null

const getProductSku = (product) => getProductItem(product)?.itemId || product?.productId

const getSellerId = (product) => getProductSeller(product)?.sellerId || '1'

const isProductAvailable = (product) =>
  Boolean(getProductSku(product) && getProductSeller(product) && getCommercialOffer(product)?.Price)

const getProductName = (product) => {
  const item = getProductItem(product)

  return item?.nameComplete || product?.productName || item?.name || ''
}

const normalizeProductUrl = (url) => {
  if (!url) return ''

  if (/^https?:\/\//i.test(url)) {
    try {
      const parsedUrl = new URL(url)

      return `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`
    } catch {
      return url
    }
  }

  return url.startsWith('/') ? url : `/${url}`
}

const getProductUrl = (product) => {
  const productPath =
    product?.link ||
    product?.url ||
    product?.productUrl ||
    (product?.linkText && `/${product.linkText}/p`)

  return normalizeProductUrl(productPath)
}

const getImageUrl = (product) => {
  const images = getProductItem(product)?.images || []
  const rasterImage = images.find(
    (image) => image?.imageUrl && !/\.svg(?:\?|$)/i.test(image.imageUrl)
  )

  return rasterImage?.imageUrl || images?.[0]?.imageUrl || '/arquivos/no-image.png'
}

const getCartImageUrl = (product) => {
  const imageUrl = getImageUrl(product)

  if (/ids\/\d+-\d+-\d+/i.test(imageUrl)) {
    return imageUrl.replace(/ids\/(\d+)-\d+-\d+/i, 'ids/$1-512-512')
  }

  if (/ids\/\d+/i.test(imageUrl)) {
    return imageUrl.replace(/ids\/(\d+)/i, 'ids/$1-512-512')
  }

  return imageUrl
}

const normalizeRatingValue = (value) => {
  const parsedValue = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value

  return Number.isFinite(parsedValue) ? parsedValue : 0
}

const normalizeReviewCount = (value) => {
  const parsedValue = Number(value)

  return Number.isFinite(parsedValue) ? parsedValue : 0
}

const getRatingFromProduct = (product) => {
  const rating =
    product?.ratingAverage ||
    product?.averageRating ||
    product?.reviewAverage ||
    product?.reviewsAverage ||
    product?.rating?.average ||
    product?.reviews?.average ||
    product?.aggregateRating?.ratingValue

  const count =
    product?.ratingCount ||
    product?.reviewCount ||
    product?.reviewsCount ||
    product?.totalReviews ||
    product?.rating?.count ||
    product?.reviews?.count ||
    product?.aggregateRating?.reviewCount

  return {
    rating: normalizeRatingValue(rating),
    count: normalizeReviewCount(count),
  }
}

const normalizeRatingResponse = (payload) => {
  if (!payload) return null

  const data = payload.data?.averageRatingByProductId || payload.averageRatingByProductId || payload.data || payload
  const rating =
    data.average ||
    data.ratingAverage ||
    data.averageRating ||
    data.rating?.average ||
    data.rating ||
    data.score ||
    data.ratingValue ||
    data.aggregateRating?.ratingValue ||
    data.reviewsRatingAverage

  const count =
    data.ratingCount ||
    data.count ||
    data.total ||
    data.totalReviews ||
    data.reviewCount ||
    data.reviewsCount ||
    data.rating?.count ||
    data.aggregateRating?.reviewCount ||
    data.reviewsRatingCount ||
    data.summaryTotalReviews

  return {
    rating: normalizeRatingValue(rating),
    count: normalizeReviewCount(count),
  }
}

const fetchRatingSummary = async (productId) => {
  if (!productId) return null

  const endpoints = [
    `/_v/reviews-and-ratings/api/rating/${encodeURIComponent(productId)}`,
    `/_v/reviews-and-ratings/api/rating?productId=${encodeURIComponent(productId)}`,
    `/_v/reviews-and-ratings/api/products/${encodeURIComponent(productId)}/rating`,
  ]

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, { credentials: 'include' })

      if (!response.ok) continue

      const ratingData = normalizeRatingResponse(await response.json())

      if (ratingData?.rating > 0 && ratingData?.count > 0) return ratingData
    } catch {
      continue
    }
  }

  return null
}

const fetchRatingSummaryByGraphql = async (client, productId) => {
  if (!client || !productId) return null

  try {
    const response = await client.query({
      query: productRatingSummaryQuery,
      variables: { productId: String(productId) },
      fetchPolicy: 'network-only',
    })

    const ratingData = normalizeRatingResponse(response)

    return ratingData?.rating > 0 && ratingData?.count > 0 ? ratingData : null
  } catch {
    return null
  }
}

const getPriceData = (product) => {
  const offer = getCommercialOffer(product)
  const sellingPrice = offer?.Price || product?.priceRange?.sellingPrice?.highPrice || 0
  const regularPrices = [
    offer?.ListPrice,
    offer?.PriceWithoutDiscount,
    product?.priceRange?.listPrice?.highPrice,
    sellingPrice,
  ].filter((price) => Number.isFinite(price) && price > 0)
  const listPrice = Math.max(...regularPrices)

  return {
    sellingPrice,
    listPrice,
    hasDiscount: listPrice > sellingPrice,
  }
}

const fetchProductById = async (productId) => {
  if (!productId) return null

  const params = new URLSearchParams()
  params.set('fq', `productId:${productId}`)
  params.set('sc', getSalesChannel())

  try {
    const response = await fetch(`/api/catalog_system/pub/products/search/?${params}`)

    if (!response.ok) return null

    const products = await response.json()

    return products?.[0] || null
  } catch {
    return null
  }
}

const openMinicart = () => {
  if (typeof window === 'undefined') return

  window.dispatchEvent(new CustomEvent('openMinicart', { detail: { open: true } }))
  window.postMessage({ eventName: 'vtex:cartOpened' }, window.origin)

  const minicartButton =
    document.querySelector('.vtex-minicart-2-x-minicartIconContainer') ||
    document.querySelector('[data-testid="minicart-button"]')

  if (minicartButton) minicartButton.click()
}

const StarIcon = () => (
  <svg
    className={styles.buyTogetherRatingIcon}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="m12 2.8 2.83 5.73 6.33.92-4.58 4.46 1.08 6.3L12 17.23l-5.66 2.98 1.08-6.3-4.58-4.46 6.33-.92L12 2.8Z" />
  </svg>
)

const ProductCard = ({ product, rating, sellingPrice, canOpenProduct = false }) => {
  const productName = getProductName(product)
  const productUrl = canOpenProduct ? getProductUrl(product) : ''
  const productImage = (
    <img
      className={styles.buyTogetherImage}
      src={getImageUrl(product)}
      alt={productName}
      loading="lazy"
    />
  )

  return (
    <article className={styles.buyTogetherProduct}>
      {productUrl ? (
        <a
          className={styles.buyTogetherProductImage}
          href={productUrl}
          aria-label={`Ver detalhes de ${productName}`}
        >
          {productImage}
        </a>
      ) : (
        <div className={styles.buyTogetherProductImage}>
          {productImage}
        </div>
      )}

      <div className={styles.buyTogetherProductContent}>
        {rating?.rating > 0 && rating?.count > 0 && (
          <div className={styles.buyTogetherRating}>
            <span>{rating.rating.toFixed(1).replace('.', ',')}</span>
            <StarIcon />
          </div>
        )}

        <h3 className={styles.buyTogetherProductName}>
          {productUrl ? (
            <a
              className={styles.buyTogetherProductNameLink}
              href={productUrl}
            >
              {productName}
            </a>
          ) : (
            productName
          )}
        </h3>

        <strong className={styles.buyTogetherPriceHighlight}>
          {formatPrice(sellingPrice)}
        </strong>
      </div>
    </article>
  )
}

const CartIcon = () => (
  <svg
    className={styles.buyTogetherButtonIcon}
    viewBox="0 0 26 23"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.6428 17.0628H8.71907C8.18698 17.0628 7.84837 16.5065 8.09023 16.0349L8.28372 15.6479H20.6428C20.9572 15.6479 21.2353 15.4423 21.32 15.1279L22.1907 12.0926C22.1181 12.0926 22.0335 12.0926 21.9609 12.0926C21.5498 12.0926 21.1507 12.0563 20.7516 11.9837L20.1107 14.2209H8.38046L5.94977 5.71954H14.3665C14.2819 5.28419 14.2456 4.83675 14.2456 4.37722V4.29257H5.5386L4.88558 1.97071C4.78884 1.66838 4.5107 1.4628 4.19628 1.4628H0.713488C0.314419 1.4628 0 1.77722 0 2.17629C0 2.57536 0.314419 2.87768 0.713488 2.87768H3.66419L7.08651 14.8498L6.82046 15.394C6.10698 16.8088 7.13488 18.4656 8.71907 18.4656H20.6428C21.0298 18.4656 21.3563 18.1512 21.3563 17.7642C21.3563 17.3772 21.0298 17.0507 20.6428 17.0507V17.0628ZM17.813 18.4777C16.64 18.4777 15.6847 19.433 15.6847 20.6061C15.6847 21.7791 16.64 22.7344 17.813 22.7344C18.986 22.7344 19.9414 21.7791 19.9414 20.6061C19.9414 19.433 18.986 18.4777 17.813 18.4777ZM17.813 21.3195C17.414 21.3195 17.0995 20.993 17.0995 20.6061C17.0995 20.2191 17.414 19.8926 17.813 19.8926C18.2121 19.8926 18.5144 20.2191 18.5144 20.6061C18.5144 20.993 18.2 21.3195 17.813 21.3195ZM10.6781 18.4777C9.50512 18.4777 8.54977 19.433 8.54977 20.6061C8.54977 21.7791 9.50512 22.7344 10.6781 22.7344C11.8512 22.7344 12.8065 21.7791 12.8065 20.6061C12.8065 19.433 11.8512 18.4777 10.6781 18.4777ZM10.6781 21.3195C10.2912 21.3195 9.96465 20.993 9.96465 20.6061C9.96465 20.2191 10.2912 19.8926 10.6781 19.8926C11.0651 19.8926 11.3795 20.2191 11.3795 20.6061C11.3795 20.993 11.0651 21.3195 10.6781 21.3195Z"
    />
    <path d="M21.4651 9.33536C21.2011 9.33536 20.9972 9.26338 20.8532 9.11942C20.7092 8.96345 20.6373 8.75351 20.6373 8.48957V5.5383H17.74C17.488 5.5383 17.2901 5.47231 17.1461 5.34035C17.0022 5.19638 16.9302 4.99843 16.9302 4.74649C16.9302 4.49455 17.0022 4.3026 17.1461 4.17063C17.2901 4.02667 17.488 3.95469 17.74 3.95469H20.6373V1.09339C20.6373 0.829456 20.7092 0.625506 20.8532 0.481541C20.9972 0.337577 21.2071 0.265594 21.4831 0.265594C21.747 0.265594 21.9449 0.337577 22.0769 0.481541C22.2209 0.625506 22.2929 0.829456 22.2929 1.09339V3.95469H25.1901C25.4541 3.95469 25.652 4.02667 25.784 4.17063C25.928 4.3026 25.9999 4.49455 25.9999 4.74649C25.9999 4.99843 25.928 5.19638 25.784 5.34035C25.652 5.47231 25.4541 5.5383 25.1901 5.5383H22.2929V8.48957C22.2929 8.75351 22.2209 8.96345 22.0769 9.11942C21.9449 9.26338 21.741 9.33536 21.4651 9.33536Z" />
  </svg>
)

const BuyTogether = ({
  title = 'Compre Junto',
  buttonText = 'Adicionar kit ao carrinho',
  client,
}) => {
  const productContext = useProduct() || {}
  const { orderForm, setOrderForm } = useOrderForm() || {}
  const [isAdding, setIsAdding] = useState(false)
  const [recommendedProduct, setRecommendedProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [ratings, setRatings] = useState({})

  const mainProduct = useMemo(() => {
    if (!productContext.product) return null

    if (!productContext.selectedItem) return productContext.product

    return {
      ...productContext.product,
      items: [productContext.selectedItem],
    }
  }, [productContext.product, productContext.selectedItem])

  useEffect(() => {
    if (!mainProduct?.productId) return undefined

    let cancelled = false

    const fetchSuggestion = async () => {
      setLoading(true)

      try {
        const response = await fetch(
          `/api/catalog_system/pub/products/crossselling/suggestions/${mainProduct.productId}?sc=${getSalesChannel()}`
        )

        if (!response.ok) {
          if (!cancelled) setRecommendedProduct(null)
          return
        }

        const products = await response.json()
        const suggestion = (products || []).find(
          (product) =>
            product?.productId && String(product.productId) !== String(mainProduct.productId)
        )

        if (!suggestion) {
          if (!cancelled) setRecommendedProduct(null)
          return
        }

        const completeProduct = await fetchProductById(suggestion.productId)
        const productToUse = completeProduct || suggestion

        if (!cancelled) {
          setRecommendedProduct(isProductAvailable(productToUse) ? productToUse : null)
        }
      } catch {
        if (!cancelled) setRecommendedProduct(null)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchSuggestion()

    return () => {
      cancelled = true
    }
  }, [mainProduct?.productId])

  const products = useMemo(
    () =>
      [mainProduct, recommendedProduct]
        .filter((product) => product && isProductAvailable(product))
        .slice(0, TOTAL_PRODUCTS),
    [mainProduct, recommendedProduct]
  )

  useEffect(() => {
    if (products.length !== TOTAL_PRODUCTS) return undefined

    let cancelled = false

    const fetchRatings = async () => {
      const ratingEntries = await Promise.all(
        products.map(async (product) => {
          const productId = product?.productId
          const productRating = getRatingFromProduct(product)

          if (productRating.rating > 0 && productRating.count > 0) {
            return [productId, productRating]
          }

          const graphqlRating = await fetchRatingSummaryByGraphql(client, productId)

          return [productId, graphqlRating || await fetchRatingSummary(productId)]
        })
      )

      if (cancelled) return

      setRatings(
        ratingEntries.reduce((acc, [productId, rating]) => {
          if (productId && rating?.rating > 0 && rating?.count > 0) {
            acc[productId] = rating
          }

          return acc
        }, {})
      )
    }

    fetchRatings()

    return () => {
      cancelled = true
    }
  }, [client, products])

  const pricingData = useMemo(() => {
    const productCards = products.map((product) => {
      const price = getPriceData(product)

      return {
        product,
        price,
      }
    })

    const totalSellingPrice = productCards.reduce(
      (total, productData) => total + (productData.price.sellingPrice || 0),
      0
    )
    const totalListPrice = productCards.reduce(
      (total, productData) => total + (productData.price.listPrice || 0),
      0
    )
    const hasDiscount = totalListPrice > totalSellingPrice
    const discountPercent =
      hasDiscount && totalListPrice > 0
        ? Math.round((1 - totalSellingPrice / totalListPrice) * 100)
        : 0

    return {
      productCards,
      totalPrice: totalSellingPrice,
      listPrice: totalListPrice,
      hasDiscount,
      discountPercent,
    }
  }, [products])

  const refreshOrderForm = async () => {
    try {
      const response = await fetch('/api/checkout/pub/orderForm', {
        method: 'GET',
        credentials: 'include',
      })

      if (response.ok) {
        const latestOrderForm = await response.json()
        if (setOrderForm) setOrderForm(latestOrderForm)

        return latestOrderForm
      }
    } catch {
      return orderForm
    }

    return orderForm
  }

  const syncOrderForm = (latestOrderForm) => {
    if (!latestOrderForm) return

    const productImageMap = products.reduce((acc, product) => {
      const sku = String(getProductSku(product) || '')

      if (sku) acc[sku] = getCartImageUrl(product)

      return acc
    }, {})

    const syncedOrderForm = {
      ...latestOrderForm,
      items: (latestOrderForm.items || []).map((item) => {
        const imageUrl = productImageMap[String(item.id)]

        if (!imageUrl) return item

        return {
          ...item,
          imageUrl,
          imageUrls: {
            at1x: imageUrl,
            at2x: imageUrl,
            at3x: imageUrl,
          },
        }
      }),
    }

    if (setOrderForm) setOrderForm(syncedOrderForm)

    if (typeof window !== 'undefined') {
      window.postMessage(
        { eventName: 'vtex:orderFormUpdated', orderForm: syncedOrderForm },
        window.origin
      )
      window.dispatchEvent(new Event('orderFormUpdated.vtex'))
      window.postMessage(
        { eventName: 'vtex:addToCart', items: syncedOrderForm.items || [] },
        window.origin
      )
    }
  }

  const fallbackAddToCart = async (cartItems) => {
    const salesChannel = getSalesChannel()

    for (const item of cartItems) {
      await fetch(
        `/checkout/cart/add?sku=${item.id}&qty=${item.quantity}&seller=${item.seller}&sc=${salesChannel}`,
        { credentials: 'include' }
      )
    }
  }

  const handleAddToCart = async () => {
    if (products.length !== TOTAL_PRODUCTS || isAdding) return

    const cartItems = products
      .map((product) => ({
        id: String(getProductSku(product)),
        quantity: 1,
        seller: String(getSellerId(product)),
      }))
      .filter((item) => item.id && item.seller)

    if (cartItems.length !== TOTAL_PRODUCTS) return

    setIsAdding(true)

    try {
      const currentOrderForm = await refreshOrderForm()
      const orderFormId = currentOrderForm?.id || orderForm?.id

      if (!orderFormId) {
        await fallbackAddToCart(cartItems)
      } else {
        const endpoint = `/api/checkout/pub/orderForm/${orderFormId}/items?sc=${getSalesChannel()}`
        let response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ orderItems: cartItems }),
        })

        if (!response.ok) {
          response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ items: cartItems }),
          })
        }

        if (!response.ok) {
          await fallbackAddToCart(cartItems)
        } else {
          const updatedOrderForm = await response.json()
          syncOrderForm(updatedOrderForm)
        }
      }

      const latestOrderForm = await refreshOrderForm()
      syncOrderForm(latestOrderForm)
      openMinicart()
    } catch (error) {
      console.error('Erro ao adicionar compre junto:', error)
    } finally {
      setIsAdding(false)
    }
  }

  if (loading || products.length !== TOTAL_PRODUCTS) return null

  return (
    <section className={styles.buyTogetherContainer} aria-label={title}>
      <h2 className={styles.buyTogetherTitle}>{title}</h2>

      <div className={styles.buyTogetherWrapper}>
        <div className={styles.buyTogetherProducts}>
          {pricingData.productCards.map(({ product, price }, index) => (
            <React.Fragment key={`${getProductSku(product)}-${index}`}>
              <ProductCard
                product={product}
                rating={ratings[product.productId]}
                sellingPrice={price.sellingPrice}
                canOpenProduct={index > 0}
              />

              {index < pricingData.productCards.length - 1 && (
                <div className={styles.buyTogetherPlus} aria-hidden="true">
                  +
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <aside className={styles.buyTogetherTotal}>
          <h3 className={styles.buyTogetherTotalTitle}>Compre junto e economize!</h3>
          <div className={styles.buyTogetherTotalPrice}>
            {pricingData.hasDiscount && (
              <span className={styles.buyTogetherListPrice}>
                {formatPrice(pricingData.listPrice)}
              </span>
            )}
            <div className={styles.buyTogetherTotalRow}>
              <strong className={styles.buyTogetherTotalHighlight}>
                {formatPrice(pricingData.totalPrice)}
              </strong>
              {pricingData.discountPercent > 0 && (
                <span className={styles.buyTogetherDiscount}>
                  -{pricingData.discountPercent}%
                </span>
              )}
            </div>
          </div>

          <button
            className={styles.buyTogetherButton}
            type="button"
            disabled={isAdding}
            onClick={handleAddToCart}
          >
            <CartIcon />
            <span className={styles.buyTogetherButtonText}>
              {isAdding ? 'Adicionando...' : buttonText}
            </span>
          </button>
        </aside>
      </div>
    </section>
  )
}

export default withApollo(BuyTogether)
