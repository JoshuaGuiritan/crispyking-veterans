import FadeInSection from "/src/components/FadeInSection";

const about = ({about}) => {
    return(
        <div ref={about} className="w-screen min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center py-20 md:py-32 px-6">
            <div className="max-w-5xl">
                <FadeInSection delay={300}>
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-ck-red font-garet text-sm md:text-base font-bold tracking-widest uppercase mb-4">Our Story</h2>
                        <h1 className="text-gray-900 font-milk lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold leading-tight mb-6">About Crispy King</h1>
                        <p className="text-gray-600 font-garet text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Bringing authentic Filipino flavors and community values to every meal</p>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
                    <FadeInSection delay={400}>
                        <div className="space-y-6">
                            <div className="bg-ck-red/10 border-l-4 border-ck-red p-6 rounded-lg">
                                <h3 className="text-ck-red font-milk text-xl md:text-2xl font-bold mb-3">Our Mission</h3>
                                <p className="text-gray-700 font-garet leading-relaxed">To serve delicious, crispy Filipino fried chicken that brings joy and satisfaction to our community, one meal at a time.</p>
                            </div>
                            <div className="bg-ck-red/10 border-l-4 border-ck-red p-6 rounded-lg">
                                <h3 className="text-ck-red font-milk text-xl md:text-2xl font-bold mb-3">Our Values</h3>
                                <p className="text-gray-700 font-garet leading-relaxed">Quality ingredients, authentic recipes, exceptional service, and unwavering commitment to our customers and community.</p>
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={500}>
                        <div className="bg-gradient-to-br from-ck-red to-ck-red-dark rounded-2xl p-8 text-white">
                            <h3 className="font-milk text-2xl md:text-3xl font-bold mb-4">The Veterans Experience</h3>
                            <p className="font-garet text-base leading-relaxed mb-6">
                                Established in August 2024, our Veterans branch proudly joined the Crispy King family, bringing signature tasty and budget-friendly chicken meals to the heart of Zamboanga City.
                            </p>
                            <p className="font-garet text-base leading-relaxed">
                                As a locally operated franchise, we&apos;re committed to delivering not just food, but an experience — a welcoming space where our community can gather and feel at home.
                            </p>
                        </div>
                    </FadeInSection>
                </div>

                <FadeInSection delay={600}>
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 text-center">
                        <p className="text-gray-700 font-garet text-lg leading-relaxed mb-6">
                            Whether you're craving a quick bite or a hearty meal, we're here to serve comfort and flavor — crispy and hot, every single time.
                        </p>
                        <p className="text-ck-red font-milk text-xl md:text-2xl font-bold">Experience the difference that quality and dedication make.</p>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
}

export default about;
