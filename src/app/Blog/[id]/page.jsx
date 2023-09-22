import React from 'react'
import styles from './blogpost.module.css'
import Image from 'next/image'

async function getdata(id){
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
 
  if(!res.ok){
   throw new Error('failed ti fetch data')
  }
  return res.json();
 }
 
 export async function generateMetadata({params}){
  const post =await getdata(params.id)
  return{
    title:post.title,
    description:post.desc
  }
 }

const BlogPost =async ({params}) => {

  const data= await getdata(params.id)
  return (
    <div className={styles.blogpost}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt="post image"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>      
      <div className={styles.content}>
        <p className={styles.text}>
         {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost