"use client" 

import React, { useState } from 'react';
import styles from './Register.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 


const Register = () => {
  const [err, setErr] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); 


  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (isLoading) {
      return; 
    }
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      

      if (res.status === 201) { 
        router.push("/Dashboard/Login?Success=Account has been created"); 
      }
    } catch (error) {
      setErr(true);
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.register}>
       <h1 className={styles.title}>Register</h1>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder='username' className={styles.input} required />
        <input type="email" placeholder='email' className={styles.input} required />
        <input type="password" placeholder='password' className={styles.input} required />
        <button className={styles.button} disabled={isLoading}>
        {isLoading ? "Please Wait ...": "Register"}
        </button>
        {err && "Something went wrong!"}
        <span className={styles.span}>Do you have an account? <Link href="/Dashboard/Login" className={styles.link}>Login</Link></span>
      </form>
    </div>
  );
};

export default Register;
