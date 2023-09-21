"use client"
import React, { useContext } from 'react'
import styles from './darkmode.module.css'
import {BsFillMoonFill , BsFillSunFill} from 'react-icons/bs'
import { Themecotext } from '../../../context/ThemeContext'

const DarkMode = () => {

const {toggle , mode} = useContext(Themecotext)

  return (
    <div className={styles.darkmode} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}><BsFillSunFill/></div>
        <div className={styles.ball} style={mode === "light" ? {left:"2px"} : {right:'2px'}}/>
    </div>
  )
}

export default DarkMode