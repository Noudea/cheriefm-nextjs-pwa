import styles from './categorie.module.css'
import Image from 'next/image'

function AnnonceCategorie ({ title, icon }) {
  
  return (
    <>
    <div className={styles.categoryContainer}>
      <p className={styles.titleCategory}> {title} </p>
      <span className={styles.separatedBar}></span>
      <Image src={icon} height={25} width={25}></Image>
    </div>
    </>
  )
}

export default AnnonceCategorie