import React from "react";
import Layout from "../components/Layout.js";
import dog from "../images/francis_peterson.jpg";
import "./Home.css";
const Home = () => {
  return (
    <Layout>
      <div id="bg">
        <img src={dog} alt="Pet Adoption" />
      </div>
    </Layout>
  );
};
export default Home;
