import React from "react"
import { useProduct } from "vtex.product-context"

// "CSS" em JS no mesmo arquivo
const styles = {
  wrapperPdp: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "8px",
    backgroundColor: "#FF6600",
    border: "2px solid #FF6600",
    overflow: "hidden",
    fontSize: "14px",
    lineHeight: 1.3,
    marginBottom: "16px",
    
  },
  badge: {
    color: "#FFFFFF",
    padding: "4px 14px",
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "14px",
  },
  labelPdp: {
    backgroundColor: "#FFFFFF",
    color: "#333333",
    padding: "4px 14px",
    width:"100%",
    textAlign:"center",
    padding:"5px 0"
  },
}

const LeveMaisFlag = () => {
  const productContext = useProduct()

  // se não tiver contexto de produto, não renderiza nada
  if (!productContext || !productContext.product) {
    return null
  }

  const product = productContext.product

  // -----------------------------------------
  // 1) Pegar benefits da PDP
  // -----------------------------------------
  const benefitsFromProduct = Array.isArray(product.benefits)
    ? product.benefits
    : []

  const benefitsFromContext = Array.isArray(productContext.benefits)
    ? productContext.benefits
    : []

  const benefits = benefitsFromProduct.length
    ? benefitsFromProduct
    : benefitsFromContext

  if (!benefits || !benefits.length) {
    return null
  }

  // procura benefício que contenha "Leve Mais Pague Menos" no nome
  const leveMais = benefits.find(
    (benefit) =>
      benefit &&
      typeof benefit.name === "string" &&
      benefit.name.toLowerCase().includes("leve mais pague menos")
  )

  if (!leveMais) {
    return null
  }

  const benefitItem =
    Array.isArray(leveMais.items) && leveMais.items.length
      ? leveMais.items[0]
      : null

  const minQuantity = benefitItem?.minQuantity
  const discount = benefitItem?.discount

  // no JSON que você mandou: discount = 999 → 9.99
  const promoUnitPrice =
    typeof discount === "number" ? discount / 100 : null

  // -----------------------------------------
  // 2) Montar texto exatamente como no print
  //    "PROMO | Leve 2 unidades por R$ 9,99 cada"
  //    (apenas "Leve 2 unidades" em negrito)
  // -----------------------------------------
  if (!minQuantity || !promoUnitPrice) {
    // fallback, se vier sem dados suficientes
    return (
      <div style={styles.wrapperPdp}>
        <span style={styles.badge}>PROMO</span>
        <span style={styles.labelPdp}>Leve mais pague menos</span>
      </div>
    )
  }

  const priceFormatted = promoUnitPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return (
    <div style={styles.wrapperPdp}>
      <span style={styles.badge}>PROMO</span>
      <span style={styles.labelPdp}>
        Leve <strong>{minQuantity} unidades</strong> por {priceFormatted} cada
      </span>
    </div>
  )
}

export default LeveMaisFlag
