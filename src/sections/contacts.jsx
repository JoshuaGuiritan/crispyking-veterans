import FadeInSection from "/src/components/FadeInSection";

const contacts = ({contacts}) => {
    return(
        <div ref={contacts} className="w-screen min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-x-hidden py-8 sm:py-12 md:py-16 lg:py-32 px-3 sm:px-4 md:px-6">
            <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                    <FadeInSection delay={300}>
                        <h2 className="text-ck-red font-garet text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-3 md:mb-4">Contact Us</h2>
                        <h1 className="text-gray-900 font-milk text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6">Let's Connect</h1>
                        <p className="text-gray-600 font-garet text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">We'd love to hear from you. Reach out through any of your preferred channels.</p>
                    </FadeInSection>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-start md:items-center">
                    <FadeInSection delay={400}>
                        <img 
                            src="/assets/Images/contact-ck.png" 
                            alt="Crispy King store" 
                            className="w-full h-auto rounded-3xl transition-all duration-300"
                        />
                    </FadeInSection>

                    <FadeInSection delay={500}>
                        <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:border-ck-red/50 transition-all duration-300 group cursor-pointer">
                                <a href="tel:+630967-092-8349" className="flex items-start gap-3 sm:gap-4 md:gap-6">
                                    <div className="flex-shrink-0 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-ck-red/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-ck-red group-hover:text-white transition-all flex-none">
                                        <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-ck-red group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 7.49a1 1 0 00.502.756l2.73 1.365a1 1 0 001.27-.39l3.58-6.573A1 1 0 0020.537 7.75l-1.585 1.585a1 1 0 00-.21 1.09l1.413 2.83a1 1 0 01-.39 1.27l-2.73 1.365a1 1 0 01-1.27-.39l-3.58-6.573a1 1 0 00-.756-.502L5.684 8.22a1 1 0 00-.684-.948L2 6.268V5z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-gray-600 font-garet text-xs sm:text-xs md:text-sm uppercase tracking-wider mb-0.5 sm:mb-1">Call Us</h3>
                                        <p className="text-ck-red font-milk text-base sm:text-lg md:text-2xl font-bold truncate">0967-092-8349</p>
                                        <p className="text-gray-500 font-garet text-xs sm:text-xs md:text-sm mt-0.5 sm:mt-1 md:mt-2">Available during business hours</p>
                                    </div>
                                </a>
                            </div>

                            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:border-ck-red/50 transition-all duration-300 group cursor-pointer">
                                <a href="https://www.facebook.com/ck.veterans" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 sm:gap-4 md:gap-6">
                                    <div className="flex-shrink-0 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-ck-red/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-ck-red group-hover:text-white transition-all flex-none">
                                        <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-ck-red group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-gray-600 font-garet text-xs sm:text-xs md:text-sm uppercase tracking-wider mb-0.5 sm:mb-1">Follow Us</h3>
                                        <p className="text-ck-red font-milk text-base sm:text-lg md:text-2xl font-bold truncate">CK Veterans</p>
                                        <p className="text-gray-500 font-garet text-xs sm:text-xs md:text-sm mt-0.5 sm:mt-1 md:mt-2">Connect and stay updated</p>
                                    </div>
                                </a>
                            </div>

                            <div className="bg-gradient-to-r from-ck-red to-ck-red-dark rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-white">
                                <h3 className="font-milk text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">Visit Us Today</h3>
                                <p className="font-garet text-xs sm:text-sm md:text-base leading-tight sm:leading-relaxed text-white/90">Experience authentic Filipino fried chicken that's crispy, hot, and absolutely delicious. We're located in the heart of Zamboanga City, ready to serve you!</p>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </div>
    );
}

export default contacts
