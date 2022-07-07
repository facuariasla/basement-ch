import type { NextPage } from "next";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import Clothes from "../components/Clothes";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeTitle from "../components/HomeTitle";
import Layout from "../components/Layout";



const Home: NextPage = () => {
  return (
    <RecoilRoot>
      <div >
        <Layout>
          <Header />
          <HomeTitle />
        </Layout>
        <Divider />
        <Layout>
          <Clothes />
          <Footer />
        </Layout>
      </div>
    </RecoilRoot>
  );
};

export default Home;
