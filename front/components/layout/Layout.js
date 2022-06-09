<<<<<<< HEAD
import React from 'react'

function Layout ({ children }) {
  return (
    <main>
      {children}
    </main>
  )
=======
import AppBar from "../appbar/AppBar"

function Layout ({children}) {
    return (
        <main>
            {children}
            <AppBar></AppBar>
        </main>
    )
>>>>>>> 089eb3579a400bbfd1cfc982340ef80a013ec5ec
}

export default Layout
