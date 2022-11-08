import React from "react";
import Banner from "../Banner/Banner";
import Delivery from "../Delivery/Delivery";
import Faq from "../FAQ/Faq";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Delivery></Delivery>
      <Faq></Faq>
    </div>
  );
};

export default Home;
