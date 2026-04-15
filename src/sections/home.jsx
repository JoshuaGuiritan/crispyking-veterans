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
    setDropdown(!dropDown);
  };

  useEffect(() => {
    if (dropDown) {
      setddEffect("max-h-screen opacity-100");
    } else {
      setddEffect("max-h-0 opacity-0");
    }
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
      <div className="bg-black/60 w-full h-full flex flex-col justify-start items-start backdrop-blur-sm">
        <nav className="relative w-full border-b border-white/10">
          <div className="w-full h-20 flex justify-between items-center px-6 md:px-16 absolute top-0 z-50">
            <FadeInSection>
              <img
                src="/assets/Icons/cklogo.jpg"
                alt="Crispy King logo"
                className="h-14 w-auto transition-all duration-300 hover:opacity-85 active:opacity-70"
              />
            </FadeInSection>
            <div className="hidden md:flex items-center gap-16">
              <FadeInSection>
                <button
                  onClick={scrollAbout}
                  className="text-white text-xs font-garet font-semibold tracking-widest uppercase hover:text-ck-red transition-colors duration-200 relative group"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-ck-red group-hover:w-full transition-all duration-300 rounded-full"></span>
                </button>
              </FadeInSection>
              <FadeInSection>
                <button
                  onClick={scrollProducts}
                  className="text-white text-xs font-garet font-semibold tracking-widest uppercase hover:text-ck-red transition-colors duration-200 relative group"
                >
                  Menu
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-ck-red group-hover:w-full transition-all duration-300 rounded-full"></span>
                </button>
              </FadeInSection>
              <FadeInSection>
                <button
                  onClick={scrollContacts}
                  className="text-white text-xs font-garet font-semibold tracking-widest uppercase hover:text-ck-red transition-colors duration-200 relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-ck-red group-hover:w-full transition-all duration-300 rounded-full"></span>
                </button>
              </FadeInSection>
            </div>
            <FadeInSection>
              <button
                onClick={clickedMenu}
                className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-all ${dropDown ? 'bg-white/20' : 'hover:bg-white/10'}`}
              >
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${dropDown ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${dropDown ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${dropDown ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </FadeInSection>
          </div>
          {dropDown && (
            <div className={`fixed inset-0 top-20 w-full bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-start gap-2 pt-8 z-40 transition-all duration-300 ${ddEffect} overflow-hidden`}>
              <button 
                onClick={() => {scrollAbout(); setDropdown(false);}}
                className="text-white text-base font-garet font-semibold tracking-wide hover:text-ck-red transition-colors duration-200 py-3 px-6 w-full text-center hover:bg-white/5"
              >
                About Us
              </button>
              <button 
                onClick={() => {scrollProducts(); setDropdown(false);}}
                className="text-white text-base font-garet font-semibold tracking-wide hover:text-ck-red transition-colors duration-200 py-3 px-6 w-full text-center hover:bg-white/5"
              >
                Our Menu
              </button>
              <button 
                onClick={() => {scrollContacts(); setDropdown(false);}}
                className="text-white text-base font-garet font-semibold tracking-wide hover:text-ck-red transition-colors duration-200 py-3 px-6 w-full text-center hover:bg-white/5"
              >
                Contact Us
              </button>
            </div>
          )}
        </nav>

        
        <div className="w-full h-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 pt-12 md:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 max-w-6xl items-center w-full">
            <FadeInSection>
              <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                <div>
                  <h1 className="font-garet text-ck-red text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider leading-tight">
                    VETERANS BRANCH
                  </h1>
                  <p className="text-white/80 font-garet text-xs sm:text-sm md:text-base mt-2 sm:mt-3">Zamboanga City</p>
                </div>
                <p className="text-white/90 font-garet text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-lg">
                  Zamboanga&apos;s favorite destination for crispy, delicious Filipino fried chicken. Premium quality, authentic taste, unbeatable value.
                </p>
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2 md:pt-4">
                  <a
                    target="_blank"
                    href={locationLink}
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-ck-red text-white font-milk font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded-lg hover:bg-ck-red-dark transition-all duration-200 whitespace-nowrap"
                  >
                    Find Location
                    <svg className="w-3.5 sm:w-4 md:w-5 h-3.5 sm:h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <button
                    onClick={scrollProducts}
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 border-white text-white font-milk font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded-lg hover:bg-white hover:text-ck-red transition-all duration-200 whitespace-nowrap"
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <a target="_blank" href={locationLink} className="group block w-full">
                <img
                  src="/assets/Icons/Store.png"
                  alt="Crispy King storefront"
                  className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105 origin-center"
                />
              </a>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
