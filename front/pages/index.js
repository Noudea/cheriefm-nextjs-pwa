import AppBar from '../components/appbar/AppBar'
import AudioCard from '../components/audioCard/AudioCard'
import Player from '../components/player/Player'
import styles from '../styles/Home.module.css'
import imgFirst from '../public/export/Image3'
import imgSecond from '../public/export/Image4.png'
import imgThird from '../public/export/Image5.png'
import imgFourth from '../public/export/Image6.png'


export default function Home () {
  return (
    <>
      <AppBar></AppBar>
      <div className={styles.songContainer}>
        <AudioCard song='Test' artist='Test' img={imgFirst}></AudioCard>
        <AudioCard song='Test' artist='Test' img={imgSecond}></AudioCard>
        <AudioCard song='Test' artist='Test' img={imgThird}></AudioCard>
        <AudioCard song='Test' artist='Test' img={imgFourth}></AudioCard> 
      </div>

      <Player></Player>
    </>
  )
}
