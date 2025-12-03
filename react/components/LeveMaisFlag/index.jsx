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
    width: "100%",
    textAlign: "center",
    padding: "5px 0",
  },
}

const LeveMaisFlag = () => {
  const productContext = useProduct()

  // se não tiver contexto de produto, não renderiza nada
  if (!productContext || !productContext.product) {
    return null
  }

  const product = productContext.product

  // -------------------------------------------------------
  // Pegar SKU selecionado e preço base (sellingPrice)
  // -------------------------------------------------------
  const selectedItem =
    productContext.selectedItem ||
    (Array.isArray(product.items) ? product.items[0] : null)

  let sellingPrice = null

  if (
    selectedItem &&
    Array.isArray(selectedItem.sellers) &&
    selectedItem.sellers.length
  ) {
    const seller =
      selectedItem.sellers.find((s) => s.sellerDefault) ||
      selectedItem.sellers[0]

    if (
      seller &&
      seller.commertialOffer &&
      typeof seller.commertialOffer.Price === "number"
    ) {
      sellingPrice = seller.commertialOffer.Price
    }
  }

  // DEBUG opcional
  console.log("[LeveMaisFlag] sellingPrice:", sellingPrice)

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

  if (!benefitItem) {
    return null
  }

  const minQuantity = benefitItem.minQuantity
  const rawDiscount = benefitItem.discount
  const discountType = benefitItem.discountType || benefitItem.type || null

  console.log("[LeveMaisFlag] benefitItem:", benefitItem)
  console.log("[LeveMaisFlag] rawDiscount:", rawDiscount)
  console.log("[LeveMaisFlag] discountType:", discountType)

  // -----------------------------------------
  // 2) Calcular preço unitário da promoção
  //    cobrindo:
  //    - desconto em valor (centavos)
  //    - desconto em percentual
  // -----------------------------------------
  // normaliza rawDiscount para número
  let numericDiscount = null

  if (typeof rawDiscount === "number") {
    numericDiscount = rawDiscount
  } else if (typeof rawDiscount === "string") {
    const parsed = parseFloat(rawDiscount.replace(",", "."))
    numericDiscount = isNaN(parsed) ? null : parsed
  }

  let promoUnitPrice = null

  if (numericDiscount && numericDiscount > 0) {
    const discountTypeStr =
      typeof discountType === "string" ? discountType.toLowerCase() : ""

    // --------- CASO 1: desconto percentual explícito ----------
    if (discountTypeStr.includes("percent")) {
      if (sellingPrice != null) {
        const percent =
          numericDiscount <= 1 ? numericDiscount * 100 : numericDiscount
        const factor = 1 - percent / 100
        promoUnitPrice = sellingPrice * factor
      }
    }
    // --------- CASO 2: desconto nominal explícito ----------
    else if (
      discountTypeStr.includes("value") ||
      discountTypeStr.includes("nominal")
    ) {
      // no cenário monetário: discount = 999 → 9.99
      promoUnitPrice = numericDiscount / 100
    }
    // --------- CASO 3: sem discountType, usar heurística ----------
    else {
      // Se desconto for alto (>=100), quase certeza que é valor em centavos
      if (numericDiscount >= 100) {
        promoUnitPrice = numericDiscount / 100
      }
      // Se desconto for baixo e temos preço base, assumir percentual
      else if (sellingPrice != null) {
        const percent =
          numericDiscount <= 1 ? numericDiscount * 100 : numericDiscount
        const factor = 1 - percent / 100
        promoUnitPrice = sellingPrice * factor
      }
    }
  }

  console.log("[LeveMaisFlag] promoUnitPrice:", promoUnitPrice)

  // -----------------------------------------
  // 3) Montar texto exatamente como no print
  //    "PROMO | Leve 2 unidades por R$ 9,99 cada"
  // -----------------------------------------
  if (
    !minQuantity ||
    promoUnitPrice == null ||
    !isFinite(promoUnitPrice) ||
    promoUnitPrice <= 0
  ) {
    // fallback, se vier sem dados suficientes ou não der pra calcular
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