import styles from './AudioCard.module.css'
import Image from 'next/image'
import firstImg from '../../public/export/Image3.png'

function AudioCard({ song, artist, img }) {
  return(
    <div className={styles.audioCardContainer}>
      <Image className={styles.audioCardImage} src={img} height={156} width={156}></Image>
      <div className={styles.gradient}></div>
      <div className={styles.audioCardInfo}>
        <p className={styles.song}>
          {song}
        </p>
        <p className={styles.artist}>
          {artist}
        </p>
      </div>
    </div>
  )
}


export default AudioCard;