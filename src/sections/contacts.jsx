import FadeInSection from "/src/components/FadeInSection";

const contacts = ({contacts}) => {
    return(
        <div ref={contacts} className="w-screen min-h-screen bg-[radial-gradient(circle_at_top_left,_#da2113,_#b50000)] overflow-x-hidden py-16 md:py-20 px-6">
            <div className="w-full h-full flex sm:flex-row flex-col-reverse sm:justify-evenly justify-center items-center gap-12 md:gap-16">
                <FadeInSection delay={300}>
                <img src="/assets/Images/contact-ck.png" className="xl:w-96 lg:w-80 md:w-72 sm:w-64 w-56 transition-all duration-500 sm:mt-0 mt-8 hover:scale-105"/>
                </FadeInSection>
                <FadeInSection delay={300}>
                <div className="flex flex-col justify-center items-center md:items-start max-w-lg">
                    <h1 className="text-white font-milk xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-5xl mb-8 md:mb-12 transition-all duration-500 text-center md:text-left">
                        Get In Touch
                    </h1>
                    <p className="text-white/80 font-garet text-lg text-center md:text-left mb-8">
                        We'd love to hear from you! Reach out through any of these channels.
                    </p>
                    <div className="flex md:flex-col flex-col gap-6 w-full">
                        <a href="tel:+630967-092-8349" target="_blank" className="group flex justify-center md:justify-start items-center gap-4 px-6 py-4 bg-ck-yellow/20 hover:bg-ck-yellow/40 rounded-xl transition-all duration-300 border border-ck-yellow/30 hover:border-ck-yellow">
                            <img src="/assets/Icons/call.png" className="xl:w-8 lg:w-7 sm:w-6 w-5 group-hover:scale-110 transition-transform"/>
                            <div className="flex flex-col md:items-start items-center">
                                <span className="text-white/70 font-garet text-sm">Call Us</span>
                                <h3 className="text-ck-yellow xl:text-2xl md:text-xl sm:text-lg text-base font-milk-cursive font-bold">0967-092-8349</h3>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/ck.veterans" target="_blank" className="group flex justify-center md:justify-start items-center gap-4 px-6 py-4 bg-ck-yellow/20 hover:bg-ck-yellow/40 rounded-xl transition-all duration-300 border border-ck-yellow/30 hover:border-ck-yellow">
                            <img src="/assets/Icons/facebook-icon.png" className="xl:w-8 lg:w-7 sm:w-6 w-5 group-hover:scale-110 transition-transform"/>
                            <div className="flex flex-col md:items-start items-center">
                                <span className="text-white/70 font-garet text-sm">Follow Us</span>
                                <h3 className="text-ck-yellow xl:text-2xl md:text-xl sm:text-lg text-base font-milk-cursive font-bold">CK Veterans</h3>
                            </div>
                        </a>
                    </div>
                </div>
                </FadeInSection>
            </div>
        </div>
    );
}

export default contacts
