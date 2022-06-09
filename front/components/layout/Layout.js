import AppBar from "../appbar/AppBar"
import NavBar from "../navbar/NavBar"
import styles from './Layout.module.css'

function Layout ({children}) {
    return (
        <main className={styles.layoutContainer}>
            <AppBar></AppBar>
            <div className={styles.pageContainer}>
                {children}
            </div>
            <NavBar></NavBar>
        </main>
    )
}

export default Layout
