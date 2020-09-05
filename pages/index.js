import React from "react";
import Index from "../components/header";
import Home from "../components/home";
import High from "../components/highlight";
import Footer from "../components/footer";
import Newslater from "../components/newslater";

function index() {
  return (
    <div>
      <head>
        <title>Cermati test front end</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
          crossOrigin="anonymous"
        ></link>
      </head>
      <Newslater />
      <Index />
      <Home />
      <High />
      <Footer />
    </div>
  );
}

export default index;
