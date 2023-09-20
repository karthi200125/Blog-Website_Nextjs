import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/Components/Button/Button'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.item}>
        <h1>Better design for your digital products </h1>
        <p>Turning your ideas into rekaity . We bring together the teams from the global tech inductry</p>        
        <Button url="/Portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
    </div>
  )
}
