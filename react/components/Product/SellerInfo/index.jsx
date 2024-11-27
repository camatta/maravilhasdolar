import { useProduct } from 'vtex.product-context';

import styles from './seller.info.css'

const SellerInfo = () => {
    const productContext = useProduct();
    
    if(!productContext?.selectedItem?.sellers?.length) return null
    
    const sellers = productContext?.selectedItem?.sellers;


    return (
        <div className={`${styles.sellerContainer} vtex-nivelepoc-sellerInfo`}>
            <h3 className={`${styles.sellerName} vtex-nivelepoc-sellerLabel`}>Vendido por: <strong className="vtex-nivelepoc-sellerName">{sellers[0]?.sellerName}</strong></h3>
        </div>
    )
}

export default SellerInfo