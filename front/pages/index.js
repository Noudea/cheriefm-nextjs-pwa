import AppBar from '../components/appbar/AppBar'
import AudioCard from '../components/audioCard/AudioCard'
import Player from '../components/player/Player'
import styles from '../styles/Home.module.css'
import imgFirst from '../public/export/Image3.png'
import imgSecond from '../public/export/Image4.png'
import imgThird from '../public/export/Image5.png'
import imgFourth from '../public/export/Image6.png'
import VoirPlus from '../components/voirplus/voir_plus'
import AnnonceCategorie from '../components/categorie_actualite/annonce_categorie'
import zikmu from '../public/export/Zikmu.png'

export default function Home () {
  return (
    <>
      <div className={styles.songContainer}>
        <AudioCard song='Test' artist='Test' img={imgFirst}></AudioCard>
        <AudioCard song='Test' artist='Test' img={imgSecond}></AudioCard>
        <AudioCard song='Test' artist='Test' img={imgThird}></AudioCard>
        <AudioCard song='Test' artist='Test' img={imgFourth}></AudioCard> 
      </div>
      <div className={styles.voirPlusSongs}>
        <VoirPlus></VoirPlus>
      </div>
      <AnnonceCategorie title='Test' icon={zikmu}></AnnonceCategorie>
    </>
  )
}
