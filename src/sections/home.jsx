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
    if (dropDown) {
      setHScreen("h-auto");
      setddEffect("max-h-screen opacity-100");
    } else {
      setHScreen("h-screen");
      setddEffect("max-h-0 opacity-0 pointer-events-none");
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
      className={`${img} w-screen min-h-screen bg-no-repeat bg-cover bg-center transition-all duration-1000`}
    >
      <div className="bg-black/60 w-full min-h-screen flex flex-col justify-start items-start backdrop-blur-sm">
        <nav className="relative w-full border-b border-white/10 z-50">
          <div className="w-full h-20 flex justify-between items-center px-6 md:px-16 absolute top-0 z-50">
            <FadeInSection>
              <img
                src="/assets/Icons/cklogo.jpg"
                alt="Crispy King logo"
                className="h-12 sm:h-14 w-auto transition-all duration-300 hover:opacity-85 active:opacity-70"
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
          <div className={`absolute top-20 left-0 right-0 w-full bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-lg md:hidden flex flex-col items-center gap-3 py-8 transition-all duration-300 ${ddEffect}`}>
            <button 
              onClick={() => {scrollAbout(); setDropdown(false);}}
              className="text-white text-base font-garet font-semibold tracking-wide hover:text-ck-red transition-colors duration-200 py-3 px-6 rounded-lg hover:bg-white/10 w-full text-center"
            >
              About Us
            </button>
            <button 
              onClick={() => {scrollProducts(); setDropdown(false);}}
              className="text-white text-base font-garet font-semibold tracking-wide hover:text-ck-red transition-colors duration-200 py-3 px-6 rounded-lg hover:bg-white/10 w-full text-center"
            >
              Our Menu
            </button>
            <button 
              onClick={() => {scrollContacts(); setDropdown(false);}}
              className="text-white text-base font-garet font-semibold tracking-wide hover:text-ck-red transition-colors duration-200 py-3 px-6 rounded-lg hover:bg-white/10 w-full text-center"
            >
              Contact Us
            </button>
          </div>
        </nav>

        
        <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 max-w-6xl items-center w-full">
            <FadeInSection>
              <div className="flex flex-col gap-6 sm:gap-8">
                <div>
                  <h1 className="font-milk text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                    Crispy King
                  </h1>
                  <h2 className="font-garet text-ck-red text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-3 sm:mt-4 font-bold tracking-wide">
                    Veterans Branch
                  </h2>
                </div>
                <p className="text-white/90 font-garet text-sm sm:text-base md:text-base lg:text-lg leading-relaxed max-w-md">
                  Zamboanga&apos;s favorite destination for crispy, delicious Filipino fried chicken. Premium quality, authentic taste, unbeatable value.
                </p>
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <a
                    target="_blank"
                    href={locationLink}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-ck-red text-white font-milk font-bold text-sm sm:text-base md:text-lg rounded-lg hover:bg-ck-red-dark transition-all duration-300"
                  >
                    Find Location
                    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <button
                    onClick={scrollProducts}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-milk font-bold text-sm sm:text-base md:text-lg rounded-lg hover:bg-white hover:text-ck-red transition-all duration-300"
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <a target="_blank" href={locationLink} className="group block">
                <img
                  src="/assets/Icons/Store.png"
                  alt="Crispy King storefront"
                  className="w-full h-auto rounded-2xl transition-all duration-500 group-hover:scale-105 origin-center"
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
