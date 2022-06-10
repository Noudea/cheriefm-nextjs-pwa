import Image from 'next/image'
import styles from './actualitesCard.module.css'
import imgFirst from '../../public/export/Image7.png'

function ActualitesCard ({ image, text }) {
  return (

    <div className={styles.actualitesCardContainer}>
      {/* <div className={styles.imgContainer}>
        <Image className={styles.actualitesImage} src='/export/Image7.png' width={250} height={180} />
      </div> */}

      <div className={styles.imageContainer}>
        <Image
          className={styles.imageContainer}
          layout='fill'
          src='/export/Image7.png'
        />
      </div>
      <div className={styles.actualitesCardText}>
        <p> Le mois spécial les plus beaux concerts </p>
      </div>
    </div>
  )
}

export default ActualitesCard
