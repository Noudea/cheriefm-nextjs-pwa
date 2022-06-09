import AppBar from "../appbar/AppBar"

function Layout ({children}) {
    return (
        <main>
            {children}
            <AppBar></AppBar>
        </main>
    )
}

export default Layout