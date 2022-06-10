import styles from './categorie.module.css'
import Image from 'next/image'

function AnnonceCategorie ({ title, icon }) {
  return (
    <div className={styles.categoryContainer}>
      <p className={styles.titleCategory}> {title} </p>
      <span className={styles.separatedBar} />
      <div className={styles.iconContainer}>
        <Image
          src={icon}
          layout='fill'
          objectFit='contain'
        />
      </div>
    </div>
  )
}

export default AnnonceCategorie
