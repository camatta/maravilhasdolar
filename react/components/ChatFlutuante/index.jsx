import React from "react"
import styles from "./chat-flutuante.css"

const ChatWhatsapp = ({
  phone = "551140001567",
  text = "Precisa de ajuda?",
  label = "WhatsApp",
}) => {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={styles.float}>
      <img
        src="https://storage.googleapis.com/m-infra.appspot.com/public/whatsapp/new-icon-whatsapp.svg"
        alt="WhatsApp"
        className={styles.icon}
        loading="lazy"
      />
      <span className={styles.bubble}>Podemos ajudar?</span>
    </a>
  )
}

export default ChatWhatsapp