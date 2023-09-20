import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'

const Button = ({text , url}) => {
  return (
    <Link href={url}>
    <button className={styles.button}>{text}</button>
    </Link>
  )
}

export default Button