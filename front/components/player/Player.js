import {useEffect, useState} from 'react'
import styles from './Player.module.css'
import Image from 'next/image'
import PlayPauseButton from './playPauseButton/PlayPauseButton'


function Player () {
  const FLUX_CHERIEFM = 'https://scdn.nrjaudio.fm/fr/30201/mp3_128.mp3?origine=fluxradios&cdn_path=adswizz_lbs11&access_token=00a1ff392ac74fdab1b0f411362b99f9'

  const [radio,setRadio] = useState(false)


  useEffect(() => {
    const audioPlayer = document.getElementById('audioPlayer')
    audioPlayer.volume = 0.05
  },[radio])


  const toogleRadio = () => {
    const audioPlayer = document.getElementById('audioPlayer')
    console.log(audioPlayer)
    
    if(!radio) {
      audioPlayer.play()
      setRadio(!radio)
    } else {
      audioPlayer.pause()
      setRadio(!radio)
    }

  }

  return (
    <div className={styles.playerContainer}>
      <audio id='audioPlayer' className='player' src={FLUX_CHERIEFM} />
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageContainer}
          height={90}
          width={90}
          src='/covers/radio_preview.png'
        />
      </div>
      <div className={styles.infosContainer}>
        <p className={styles.artiste}>Marion Séclin</p>
        <p className={styles.title}>Woman in the world #2</p>
      </div>
      <div className={styles.buttonContainer}>
        <Image
          width={28}
          height={24}
          src='/icons/heart_outline.png'
        />
        <PlayPauseButton onClick={toogleRadio} radio={radio}></PlayPauseButton>
      </div>
    </div>
  )
}

export default Player
