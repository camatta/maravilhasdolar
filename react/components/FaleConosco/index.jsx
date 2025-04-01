import React from 'react';
import styles from './fale-conosco.css';

const FaleConosco = () => {
  return (
    <div className={styles.wrapperFaleConosco}>
      <div className={styles.containerFaleConosco}>
        <div className={styles.titleFaleConosco}>
            <h1>Fale Conosco</h1>
        </div>
        <div className={styles.formFaleConosco}>
            <iframe
            src="https://formsui.directtalk.com.br/1.0/index.html?id=3eb80127-86cd-470a-8bca-2ddec20c7aa7&DepartmentId=dc6dbb94-3a21-4884-b159-e72be8e4e6ef&ChannelId=2"
            width="100%"
            height="600px"
            style={{ border: 'none', marginTop: '20px' }}
            title="Formulário de Contato"
            ></iframe>
        </div>
        <div className={styles.wrapperCardsFaleConosco}>
          <div className={styles.cardFaleConosco}>
            <div className={styles.titleCardFaleConosco}>
              <h3>Precisa de Ajuda?</h3>
            </div>
            <div className={styles.textCardFaleConosco}>
              <p>SAC: (11) 4000-1567</p>
            </div>
          </div>
          <div className={styles.cardFaleConosco}>
            <div className={styles.titleCardFaleConosco}>
              <h3>Compras para Pessoas Jurídicas</h3>
            </div>
            <div className={styles.textCardFaleConosco}>
              <p>WhatsApp: (11) 93236-1811</p>
            </div>
          </div>
          <div className={styles.cardFaleConosco}>
            <div className={styles.titleCardFaleConosco}>
              <h3>Entre em contato</h3>
            </div>
            <div className={styles.textCardFaleConosco}>
              <p>E-mail: sac@maravilhasdolar.com.br</p>
            </div>
          </div>
        </div>
        <div className={styles.wrapperCtasFaleConosco}>
          <div className={styles.ctaFaleConosco}>
            <a href="/trabalhe-conosco">Trabalhe Conosco</a>
          </div>
          <div className={styles.ctaFaleConosco}>
            <a href="/trabalhe-conosco">Seja um Fornecedor</a>
          </div>
          <div className={styles.ctaFaleConosco}>
            <a href="/trabalhe-conosco">Nossas Lojas</a>
          </div>
          <div className={styles.ctaFaleConosco}>
            <a href="/trabalhe-conosco">Perguntas Frequentes</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;
