import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";

function index() {
  const [show, setShow] = useState(false);
  const scrolled = useRef(false);
  const isMoreThan10 = useRef(true);

  useEffect(() => {
    const savedDate = Cookies.get("time");

    if (savedDate) {
      const lastDate = new Date(savedDate).getTime();
      const currentDate = new Date().getTime();

      if ((currentDate - lastDate) / 1000 > 600) {
        isMoreThan10.current = true;
      } else {
        isMoreThan10.current = false;
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  });

  function scrollHandler(e) {
    if (
      isMoreThan10.current &&
      !scrolled.current &&
      window.scrollY > window.innerHeight / 3
    ) {
      scrolled.current = true;
      setShow(true);
      Cookies.set("time", new Date().toISOString());
    }
  }

  return (
    <div>
      <div
        className={`
        fixed bottom-0 left-0 bg-blue w-full lg:w-460 opacity-75   transform bg-blue-300 transition-all duration-1000
        ${show ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="w-full py-2 px-4">
          <div
            className="text-right cursor-pointer  text-white"
            onClick={() => setShow(false)}
          >
            x
          </div>
          <p className="text-white  font-bold text-2xl">
            Get Latest updates in web technologies
          </p>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <form className="">
            <input
              className="w-full lg:w-3/5 px-4 my-4 h-8"
              placeholder="Email Address"
            />
            <button className="bg-darkorange opacity-100 lg:mx-4 w-full lg:w-40 h-8 text-white">
              Count me in !
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default index;
