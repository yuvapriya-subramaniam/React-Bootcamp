import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RestaurantCards from "../components/RestaurantCards";
import Main from '../components/Main'

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default AppLayout;
