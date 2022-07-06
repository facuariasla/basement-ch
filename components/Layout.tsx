import Head from 'next/head'
import React from 'react'
import styles from '../styles/Layout.module.scss'

const Layout = ({children}:any) => {
  return (
    <div >
      <Head>
        <title>FA Basement Challenge</title>

      </Head>
      <div className={styles.layout}>
        {children}
      </div>
    </div>
  )
}

export default Layout