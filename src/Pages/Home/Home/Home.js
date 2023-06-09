import React from "react";
import useTitle from "../../../hooks/useTitile";
import Banner from "../Banner/Banner";
import Delivery from "../Delivery/Delivery";
import Faq from "../FAQ/Faq";
import Service from "../Service/Service";
import ContactForm from "../ContactForm/ContactForm";
import BestSeller from "../BestSeller/BestSeller";
import BlackFridayOffers from "../BlackFridayOffers/BlackFridayOffers";
import ClientReview from "../ClientReview/ClientReview";
import UpComingFoodCard from "../UpcomigFood/UpcomingFood";
import FoodCart from "../FoodCart/FoodCart";

const Home = () => {
  useTitle('Home')
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Delivery></Delivery>
      <BlackFridayOffers></BlackFridayOffers>
      <BestSeller></BestSeller>
      <Faq></Faq>
      <UpComingFoodCard></UpComingFoodCard>
      <ClientReview></ClientReview>
      <FoodCart></FoodCart>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
