"use client"
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import DarkMode from '../DarkMode/DarkMode'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {

  const session = useSession()

const Links =[
  {
    id:'1',
    title:'Home',
    url:'/'
  },
  {
    id:'2',
    title:'Portfolio',
    url:'/Portfolio'
  },
  {
    id:'3',
    title:'Blog',
    url:'/Blog'
  },
  {
    id:'4',
    title:'About',
    url:'/About'
  },
  {
    id:'5',
    title:'Contact',
    url:'/Contact'
  },
  {
    id:'6',
    title:'Dashboard',
    url:'/Dashboard'
  },
]

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>MYBLOG</Link>
      <div className={styles.links}>
        <DarkMode/>
        {Links.map((link)=>(
          <Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>
        ))}
        {session.status === "authenticated" && 
        <button className={styles.logout} onClick={signOut}>Logout</button>
         }
      </div>
    </div>
  )
}

export default Navbar