import React from 'react'
import styles from './Portfolio.module.css'

const Layout = ({children}) => {
  return (
    <div>        
        <h1 style={{fontSize:'100px'}}>Our Works</h1>
        {children}
    </div>
  )
}

export default Layout