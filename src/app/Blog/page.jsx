import React from 'react'
import styles from './Blog.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getdata(){
 const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
  cache:{"no-store" : 10}
 })

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
        <Link href="/Blog/test123" className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src=""
              alt=""
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