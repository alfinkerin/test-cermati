import React from "react";
import Logo from "../../assets/logo.svg";

function index() {
  return (
    <div className="background :w-full h-screen ">
      <div className="deep px-10 lg:px-0 w-full h-full">
        <div className="pt-40 lg:px-10 lg:pt-24">
          <Logo className="w-12 h-12" />
        </div>
        <div className=" center w-full mt-16">
          <div className="px-10">
            <p className=" text-white text-3xl text-center">
              Hello! I’m Alfin Kerin Saputra
            </p>
            <p className="text-white text-2xl font-extrabold text-center ">
              Consult, Design, and Develop Website
            </p>
            <p className="text-white text-xl text-center ">
              Have something great in mind ? Feel free to contact me.
            </p>
            <p className="text-white text-xl text-center ">
              i'll help you to make it happen.
            </p>
            <div className="w-full text-center">
              <button className="w-48 h-10 text-white mt-6 bg-transparent border border-white hover:bg-white hover:text-darkblue rounded">
                Lets make contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
