import Image from 'next/image'
import styles from './NavBar.module.css'

function NavBar() {
  return(
    <div className={styles.navBarContainer}>
      <div className={styles.iconContainer}>
        <div className={styles.imgContainer}>
          <Image
            layout='fill'
            objectFit='contain'
            src='/icons/research.png'
          />
        </div>
        <p>Recherche</p>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.imgContainer}>
          <Image
            layout='fill'
            objectFit='contain'
            src='/icons/radio.png'
          />
        </div>
        <p>Radios</p>
      </div>
      <div className={styles.homeButton}>
        <Image
          width={65}
          height={65}
          src='/icons/unknown.png'
        />
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.imgContainer}>
          <Image
            layout='fill'
           objectFit='contain'
            src='/icons/collection.png'
          />
        </div>       
        <p>Collection</p>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.imgContainer}>
          <Image
            layout='fill'
            objectFit='contain'
            src='/icons/chat.png'
          />
        </div>
        <p>Chat</p>
      </div>
    </div>
  )
}

export default NavBar