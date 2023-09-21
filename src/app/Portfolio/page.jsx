import React from 'react'
import styles from './Portfolio.module.css'
import Link from "next/link";
import Image from 'next/image';
import port1 from '../../../public/illustration.png'
import port2 from '../../../public/apps.jpg'
import port3 from '../../../public/websites.jpg'

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/Portfolio/illustrations" className={styles.item}>
          <Image src={port1} className={styles.img}/>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/Portfolio/websites" className={styles.item}>
        <Image src={port3} className={styles.img}/>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/Portfolio/application" className={styles.item}>
        <Image src={port2} className={styles.img}/>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio