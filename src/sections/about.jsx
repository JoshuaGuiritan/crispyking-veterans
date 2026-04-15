import FadeInSection from "/src/components/FadeInSection";

const about = ({about}) => {
    return(
        <div ref={about} className="w-screen min-h-screen bg-[radial-gradient(circle_at_top_left,_#da2113,_#b50000)] flex flex-col items-center justify-center py-16 md:py-20 px-6">
                <div className="max-w-4xl">
                <h1 className="text-white lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-milk transition-all duration-500 mb-8 text-center"><FadeInSection delay={300}>ABOUT US</FadeInSection></h1>
                <div className="lg:text-xl md:text-lg sm:text-base text-sm transition-all duration-500 text-center">
                    <p className="text-white font-garet leading-relaxed mb-8">
                        <FadeInSection delay={300}>
                        Established in August 2024, our Veterans branch proudly joined the growing Crispy King family, bringing the brand's signature tasty, satisfying, and budget-friendly chicken meals to the heart of Zamboanga City. As a locally operated franchise, we're committed to not only delivering delicious food but also creating a welcoming space where our community can gather, enjoy, and feel at home.
                        </FadeInSection>
                    </p>
                    <p className="text-white/90 font-garet leading-relaxed mb-10">
                        <FadeInSection delay={400}>
                        Whether you're craving a quick bite or a hearty meal, we're here to serve comfort and flavor — crispy and hot, every time. Experience the difference that quality and dedication make.
                        </FadeInSection>
                    </p>
                </div>
                <div className="flex justify-center mt-12">
                    <h1 className="text-ck-yellow font-milk-cursive xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm"><FadeInSection delay={500}>— Crispy King Veterans Team</FadeInSection></h1>
                </div>
                </div>
        </div>
    );
}

export default about;
