"use client"
import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {

//   const [data,setdata] = useState([])
//   const [isloading,setisloading] = useState(false)
//   const [Error,setError] = useState(false)

// useEffect(()=>{
//   const getdata = async () =>{
//     setisloading(true)
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   
//     if(!res.ok){
//      throw new Error('failed ti fetch data')
//     }
//     const datas = await res.json()
//     setdata(datas)
//     setisloading(false)
//    }
//    getdata()
// },[])

const session = useSession()
const router = useRouter()

const fetcher = (...args) => fetch(...args).then(res => res.json())

const {data , error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts',fetcher)

if(session.status === "loading"){
  return <p>Loading...</p>
}
if(session.status === "unauthenticated"){
  router?.push("/Dashboard/Login") 
}

if(session.status === "authenticated"){
  return (
    <div className={styles.dash}>Dashboard</div>
  )
 }
}

export default Dashboard