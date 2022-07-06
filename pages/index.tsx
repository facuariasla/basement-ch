import type { NextPage } from "next";
import Clothes from "../components/Clothes";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeTitle from "../components/HomeTitle";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Header />
        <HomeTitle />
      </Layout>
      <Divider />
      <Layout>
        <Clothes />
        <Footer/>
      </Layout>
    </div>
  );
};

export default Home;
