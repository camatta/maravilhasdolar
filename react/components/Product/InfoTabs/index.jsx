import { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'

import styles from './infoTabs.css'

const InfoTabs = ({ children }) => {
  const { product } = useProduct()

  const productDescription = product?.description
  const productId = product?.cacheId

  const [activeAccordion, setActiveAccordion] = useState(null)
  const [descriptionExpanded, setDescriptionExpanded] = useState(false)

  useEffect(() => {
    setActiveAccordion(productDescription ? 'description' : null)
    setDescriptionExpanded(false)
  }, [productId, productDescription])

  const handleAccordionToggle = (accordionName) => {
    setActiveAccordion((currentAccordion) => (
      currentAccordion === accordionName ? null : accordionName
    ))
  }

  const shouldShowDescriptionToggle = productDescription?.length > 220
  const isDescriptionOpen = activeAccordion === 'description'
  const isReviewsOpen = activeAccordion === 'reviews'
  const hasReviews = Boolean(children)

  return (
    <div className={styles.productAccordions}>
      {productDescription && (
        <section className={styles.accordionItem}>
          <button
            type="button"
            className={styles.accordionHeader}
            onClick={() => handleAccordionToggle('description')}
          >
            <span className={styles.accordionTitle}>Descrição</span>
          </button>

          {isDescriptionOpen && (
            <div className={styles.accordionContent}>
              <div
                className={
                  descriptionExpanded
                    ? styles.descriptionContentExpanded
                    : styles.descriptionContent
                }
                dangerouslySetInnerHTML={{ __html: productDescription }}
              />

              {shouldShowDescriptionToggle && (
                <button
                  type="button"
                  className={styles.descriptionToggle}
                  onClick={() => setDescriptionExpanded((isExpanded) => !isExpanded)}
                >
                  {descriptionExpanded ? 'Ver menos' : 'Ver mais'}
                </button>
              )}
            </div>
          )}
        </section>
      )}

      {hasReviews && (
        <section className={styles.accordionItem}>
          <button
            type="button"
            className={styles.accordionHeader}
            onClick={() => handleAccordionToggle('reviews')}
          >
            <span className={styles.accordionTitle}>Avaliações</span>
          </button>

          {isReviewsOpen && (
            <div className={styles.accordionContent}>
              {children}
            </div>
          )}
        </section>
      )}
    </div>
  )
}

export default InfoTabs
