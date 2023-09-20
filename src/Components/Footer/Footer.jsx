import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {

    
  return (
    <div className={styles.footer}>
        <span>@2023 MYBLOG , ALL Rights reserverd</span>
        <div className={styles.img_con}>
          <Image src="/1.png" alt="Facebook" width={15} height={15} className='icon'/>
          <Image src="/2.png" alt="Instagram" width={15} height={15} className='icon'/>
          <Image src="/3.png" alt="Twitter" width={15} height={15} className='icon'/>
          <Image src="/4.png" alt="Youtupe" width={15} height={15} className='icon'/>
        </div>
    </div>
  )
}

export default Footer