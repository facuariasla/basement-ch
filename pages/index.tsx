import type { NextPage } from 'next'
import Divider from '../components/Divider'
import Header from '../components/Header'
import HomeTitle from '../components/HomeTitle'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Header/>
        <HomeTitle/>
      </Layout>
      <Divider/>
    </div>
  )
}

export default Home
