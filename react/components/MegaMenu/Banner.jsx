import { Link } from 'vtex.render-runtime'

import styles from './categoryMenu.css'

export const Banner = ({ bannerLink, src, bannerAlt }) => {
  return bannerLink !== "" ? (
    <Link
      to={bannerLink}
      className={styles.bannerImageLink}
    >
      <img
        src={src}
        alt={bannerAlt || 'Banner todas categorias'}
        title={bannerAlt || 'Banner todas categorias'}
        className={styles.bannerImage}
      />
    </Link>
  ) : (
    <img
      src={src}
      alt={bannerAlt || 'Banner todas categorias'}
      title={bannerAlt || 'Banner todas categorias'}
      className={styles.bannerImage}
    />
  )
}