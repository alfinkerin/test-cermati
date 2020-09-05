import React, { useState } from "react";

function Index() {
  const [state, setState] = useState(true);

  return (
    <>
      <div
        className={`${
          !state && "transform -translate-y-48 "
        } transition-all duration-1000 fixed lg:flex w-full px-4 lg:px-56 xl:px-64 py-4 bg-smokegrey text-sm lg:text-base xl:text-lg justify-center`}
      >
        <p className=" ">
          By accessing using this website, you acknoledge that you have read and
          understand our{" "}
          <a href="" className="text-blue">
            Cookie Police
          </a>
          ,{" "}
          <a href="" className="text-blue">
            {" "}
            Privacy Police{" "}
          </a>
          , and our{" "}
          <a href="" className="text-blue">
            Terms of service
          </a>
        </p>
        <button
          onClick={() => setState(false)}
          className="w-24 lg:w-32 h-10 lg:h-12 mt-4 lg:mt-0 text-white rounded bg-blue"
        >
          Got it
        </button>
      </div>
    </>
  );
}

export default Index;
