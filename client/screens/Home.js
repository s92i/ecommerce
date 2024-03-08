import React from "react";
import Layout from "../components/layout/Layout";
import Categories from "../components/category/Categories";
import Banner from "../components/banner/Banner";
import Products from "../components/products/Products";
import Header from "../components/layout/Header";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Categories />
      <Banner />
      <Products />
    </Layout>
  );
};

export default Home;
