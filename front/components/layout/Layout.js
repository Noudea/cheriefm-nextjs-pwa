import AppBar from "../appbar/AppBar"
import NavBar from "../navbar/NavBar"
import styles from './Layout.module.css'

function Layout ({children}) {
    return (
        <main className={styles.layoutContainer}>
            <div className={styles.appBarContainer}>
                <AppBar></AppBar>
            </div>
            <div className={styles.pageContainer}>
                {children}
            </div>
            <div className={styles.navBarContainer}>
                <NavBar></NavBar>
            </div>
        </main>
    )
}

export default Layout
