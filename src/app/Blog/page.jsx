import React from 'react'
import styles from './Blog.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getdata(){
 const res = await fetch('http://localhost:3000/api/posts')

 if(!res.ok){
  throw new Error('failed ti fetch data')
 }
 return res.json();
}


const Blog = async () => {

const data = await getdata();

  return (
    <div className={styles.blog}>
      {data.map((item) => (
        <Link href={`Blog/${item._id}`} className={styles.container} key={item._id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              // alt={item.title}
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>
       ))} 
    </div>
  )
}

export default Blog