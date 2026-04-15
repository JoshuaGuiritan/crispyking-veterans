import FadeInSection from "/src/components/FadeInSection";
import { useState, useEffect } from "react";

const home = ({ about, products, contacts }) => {
  const locationLink =
    "https://www.google.com/maps/place/Crispy+King+Veterans/@6.9080304,122.0787977,894m/data=!3m1!1e3!4m10!1m2!2m1!1scrispy+king!3m6!1s0x325041f9da4ee891:0xbeb14f99643146b6!8m2!3d6.90803!4d122.0802416!15sCgtjcmlzcHkga2luZ1oNIgtjcmlzcHkga2luZ5IBFGZhc3RfZm9vZF9yZXN0YXVyYW50qgFEEAEqDyILY3Jpc3B5IGtpbmcoADIeEAEiGkHFR-jv2lu_Zyy2nBQGWfP5sy8rpqOtvcDiMg8QAiILY3Jpc3B5IGtpbmfgAQA!16s%2Fg%2F11wbzchg7s?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D";

  const [img, setImg] = useState("bg-[url('/assets/Images/background-1.jpg')]");
  const [count, setCount] = useState(1);
  const [dropDown, setDropdown] = useState(false);
  const [hoverMenu, sethoverMenu] = useState("");
  const [hScreen, setHScreen] = useState("h-screen");
  const [ddEffect, setddEffect] = useState("max-h-0 opacity-0");

  const scrollAbout = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollProducts = () => {
    products.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollContacts = () => {
    contacts.current?.scrollIntoView({behavior: "smooth"});
  };

  const clickedMenu = () => {
    dropDown ? setDropdown(false) : setDropdown(true);
  };

  useEffect(() => {
    dropDown ? sethoverMenu("border border-gray-400 rounded-sm") : sethoverMenu("");
    !dropDown ? setHScreen("h-screen") : setHScreen("h-120");
    !dropDown ? setddEffect("max-h-0 opacity-0") : setddEffect("max-h-45 opacity-100");
  }, [dropDown]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((counts) => (counts === 4 ? 1 : counts + 1));
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 1) {
      setImg("bg-[url('/assets/Images/background-1.jpg')]");
    } else if (count === 2) {
      setImg("bg-[url('/assets/Images/background-2.jpg')]");
    } else if (count === 3) {
      setImg("bg-[url('/assets/Images/background-3.jpg')]");
    } else if (count === 4) {
      setImg("bg-[url('/assets/Images/background-4.jpg')]");
    }
  }, [count]);

  return (
    <div
      className={`${img} w-screen h-screen bg-no-repeat bg-cover bg-center transition-all duration-1000`}
    >
      <div
        className={`bg-[#000000cc] w-full h-full flex flex-col justify-start items-start backdrop-blur-sm`}
      >
        <div className="relative w-full">
          <div className="w-full h-24 flex justify-between px-6 md:px-12 absolute top-0 z-50">
            <div className="h-full flex justify-start items-center">
              <FadeInSection>
              <img
                src="/assets/Icons/cklogo.jpg"
                alt="crispyking logo"
                className="md:w-20 w-16 transition-all duration-500 ease-out hover:scale-110"
              />
              </FadeInSection>
            </div>
            <div className="h-full text-white text-sm flex justify-end items-center font-garet gap-8 transition-all duration-500 ease-out">
              <FadeInSection>
              <a
                role="button"
                className="md:block hidden cursor-pointer text-white hover:text-ck-yellow transition-colors duration-300 font-medium tracking-wider"
                onClick={scrollAbout}
              >
                ABOUT
              </a>
              </FadeInSection>
              <FadeInSection>
              <a
                role="button"
                className="md:block hidden cursor-pointer text-white hover:text-ck-yellow transition-colors duration-300 font-medium tracking-wider"
                onClick={scrollProducts}
              >
                PRODUCTS
              </a>
              </FadeInSection>
              <FadeInSection>
              <a
                role="button"
                className="md:block hidden cursor-pointer text-white hover:text-ck-yellow transition-colors duration-300 font-medium tracking-wider"
                onClick={scrollContacts}
              >
                CONTACTS
              </a>
              </FadeInSection>
              <FadeInSection>
              <a
                role="button"
                className="md:hidden block cursor-pointer"
                onClick={clickedMenu}
              >
                <div className="p-2 rounded-lg hover:bg-white/10 transition-all">
                  <img
                    src="/assets/Icons/Menu-icon.png"
                    alt="menu icon"
                    className="w-8"
                  />
                </div>
              </a>
              </FadeInSection>
            </div>
          </div>
          {dropDown && (
              <div className={`text-base w-full bg-[#000000cc] text-white flex flex-col justify-center items-center font-garet ${ddEffect} transition-all duration-300 md:hidden mt-24 gap-4 py-6`}>
                <a
                  role="button"
                  className="cursor-pointer hover:text-ck-yellow transition-colors duration-300"
                  onClick={scrollAbout}
                >
                  ABOUT
                </a>
                <a
                  role="button"
                  className="cursor-pointer hover:text-ck-yellow transition-colors duration-300"
                  onClick={scrollProducts}
                >
                  PRODUCTS
                </a>
                <a role="button" className="cursor-pointer hover:text-ck-yellow transition-colors duration-300" onClick={scrollContacts}>
                  CONTACTS
                </a>
              </div>
          )}
        </div>

        
        <div
          className={`md:h-screen ${hScreen} w-full flex justify-center items-center md:flex-row flex-col transition-all duration-700 ease-out gap-8 md:gap-16 px-6`}
        >
          <FadeInSection>
          <div className="flex flex-col justify-center md:items-start items-center max-w-2xl">
            <h1 className="font-milk text-white xl:text-8xl lg:text-7xl md:text-5xl sm:text-6xl text-4xl leading-tight">
              Veterans Branch
            </h1>
            <h3 className="font-garet text-ck-yellow xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg mt-3 font-medium tracking-wider">
              Zamboanga City
            </h3>
            <p className="text-white/80 font-garet text-lg md:text-base mt-6 md:mt-8 text-center md:text-left leading-relaxed">
              Taste the crispy perfection. Local flavors, signature quality.
            </p>
            <div className="w-full flex md:justify-start justify-center md:items-center items-end mt-8 md:mt-10">
              <a target="_blank" href={`${locationLink}`} className="group inline-flex items-center gap-3 px-8 py-3 md:py-4 bg-ck-yellow text-black font-milk rounded-lg hover:bg-ck-yellow/90 transition-all duration-300 font-bold text-lg md:text-xl">
                Find Us Here
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
          </FadeInSection>
          <FadeInSection>
          <a target="_blank" href={`${locationLink}`} className="group">
            <img
              src="/assets/Icons/Store.png"
              alt="store logo"
              className="xl:w-96 lg:w-80 md:w-72 sm:w-64 w-56 hover:scale-110 transition-all duration-500 ease-out filter drop-shadow-lg group-hover:drop-shadow-2xl"
              title="Crispy King - Veterans Bran Location via Google Maps"
            />
          </a>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default home;
