import Image from 'next/image'
import iconCherie from '../../public/cherie_icon.png'
import searchIcon from '../../public/export/noun-list-search-3039030.png'
import styles from './AppBar.module.css'

function AppBar() {
  return(
    <div className={styles.appbar}>
      <div className={styles.imageicon}>
        <button className={styles.cherieIcon}>   
          <Image src={iconCherie} width={93} height={38}>
          </Image>
        </button>
      </div>
      <div className={styles.profilSearch}>
        <div>
          <button className={styles.research}>
            <Image src={searchIcon} width={27.2} height={19.43}/>
          </button>
        </div>
        <div className={styles.profile}>
            <Image className={styles.imageHomme} src='/homme-mature_contenu.jpg' width={33.85} height={33.85}/>
        </div>
      </div>
    </div>
  )
}

export default AppBar;