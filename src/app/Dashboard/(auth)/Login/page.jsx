"use client"
import React from 'react'
import styles from './Login.module.css'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import google from '../../../../../public/google.png'

const Login = () => {

  const session = useSession()
  const router = useRouter()
  

  if(session.status === "loading"){
    return <p>Loading...</p>
  }
  if(session.status === "authenticated"){
    router?.push("/Dashboard") 
  }
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value
    const password = e.target[1].value
    signIn("credentials",email,password)
  };

  return (
    <div className={styles.login}>          
    <h1 className={styles.title}>Login</h1>
      <form action="" className={styles.form} onSubmit={handleSubmit}>        
         <div className={styles.googlecon}>
          <Image src={google} alt="google" className={styles.g_img}/>
          <button onClick={()=>signIn("google")} className={styles.google}>Login with Google</button>        
         </div>
         <div className={styles.line}><span>OR</span></div>
        <input type="email" placeholder='email' className={styles.input} required />
        <input type="password" placeholder='password' className={styles.input} required />
        <button className={styles.button}>Login</button>        
        {/* {err && "Something went wrong!"} */}
        <span className={styles.span}>Don't you have an account? <Link href="/Dashboard/Register" className={styles.link}>Create a Account</Link></span>        
      </form>
       
    </div>
  )
}

export default Login