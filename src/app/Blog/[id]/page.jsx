import React from 'react'
import styles from './blogpost.module.css'
import Image from 'next/image'

async function getdata(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
 
  if(!res.ok){
   throw new Error('failed ti fetch data')
  }
  return res.json();
 }
 

const BlogPost =async ({params}) => {

  const data= await getdata(params.id)
  return (
    <div className={styles.blogpost}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, exercitationem!
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jhon</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src=""
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>      
    </div>
  )
}

export default BlogPost