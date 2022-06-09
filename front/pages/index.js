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
    <div className={styles.homeContainer}>
      <AnnonceCategorie title='En ce moment' icon={zikmu}></AnnonceCategorie>
      <div className={styles.songContainer}>
        <AudioCard song='Coeur brisé' artist='Yanns' img={imgFirst}></AudioCard>
        <AudioCard song='Bambino' artist='Yanns' img={imgSecond}></AudioCard>
        <AudioCard song='Clic Clic Pan Pan' artist='Yanns' img={imgThird}></AudioCard>
        <AudioCard song='Ma Gadji' artist='Yanns' img={imgFourth}></AudioCard>
      </div>
      <div className={styles.voirPlusSongs}>
        <VoirPlus></VoirPlus>
      </div>
      <AnnonceCategorie title='Podcasts' icon='/icons/podcasts.png'></AnnonceCategorie>
      <div className={styles.songContainer}>
        <AudioCard song='Women in the world #1' artist='Priya Singh' img='/covers/podcast1.png'></AudioCard>
        <AudioCard song='Women in the world #2' artist='Marion Séclin' img='/covers/podcast2.png'></AudioCard>
        <AudioCard song='Lorem Ipsum' artist='Lorem Ipsum' img='/covers/podcast3.png'></AudioCard>
        <AudioCard song='Dolor Amet' artist='Lorem Ipsum' img='/covers/podcast3.png'></AudioCard>
      </div>
      <div className={styles.voirPlusSongs}>
        <VoirPlus></VoirPlus>
      </div>
      <div className={styles.playerContainer}>
        <Player></Player>
      </div>
    </div>
  )
}
