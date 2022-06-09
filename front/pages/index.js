import Head from 'next/head'
import Image from 'next/image'
import Chat from '../components/chat/Chat'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Chat></Chat>
    </div>
  )
}
