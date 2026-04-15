import FadeInSection from "/src/components/FadeInSection";
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const products = ({products}) => {
    return(
        <div ref={products} className="w-screen min-h-220 bg-[url('/assets/Images/products-bg.jpeg')] bg-cover bg-no-repeat bg-center overflow-x-hidden py-12 md:py-20">
            <div className="w-full h-full flex flex-col bg-[#000000cc] justify-center items-center backdrop-blur-sm py-8">
                <FadeInSection delay={300}>
                <h1 className="text-white font-milk xl:text-7xl lg:text-6xl md:text-5xl text-4xl md:mb-4 mb-8 transition-all duration-500 text-center">OUR MENU</h1>
                <p className="text-ck-yellow font-garet text-lg md:mb-12 mb-8 text-center font-medium">Crispy. Fresh. Delicious.</p>
                </FadeInSection>
                <FadeInSection delay={300}>
                <Carousel className="xl:w-5xl lg:w-4xl md:w-3xl sm:w-xl w-sm transition-all duration-500">
                    <CarouselContent className="flex justify-start items-center gap-4">
                        <CarouselItem className="">
                            <Card className="bg-gradient-to-br from-[#000000aa] to-[#00000066] border-2 border-ck-yellow/20 backdrop-blur-md rounded-2xl hover:border-ck-yellow/50 transition-all duration-300">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square p-6">
                                    <div className="flex w-full h-full md:flex-row flex-col justify-center items-center gap-6">
                                        <div className="flex justify-center items-center flex-shrink-0">
                                            <img src="/assets/Icons/friedchicken.png" className="xl:w-80 lg:w-64 md:w-56 md:mb-0 mb-6 sm:w-60 w-48 transition-all duration-500 hover:scale-105"/>
                                        </div>
                                        <div className="flex flex-col md:items-start items-center md:ml-0 ml-0">
                                            <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl text-xl font-milk text-white mb-3 transition-all duration-500">Crispy Fried Chicken</h1>
                                            <h6 className="xl:text-2xl sm:text-lg text-sm font-milk-cursive text-ck-yellow transition-all duration-500 font-bold">₱40.00/pc</h6>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="">
                            <Card className="bg-gradient-to-br from-[#000000aa] to-[#00000066] border-2 border-ck-yellow/20 backdrop-blur-md rounded-2xl hover:border-ck-yellow/50 transition-all duration-300">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square p-6">
                                    <div className="flex w-full h-full md:flex-row flex-col justify-center items-center gap-6">
                                        <div className="flex justify-center items-center flex-shrink-0">
                                            <img src="/assets/Icons/ngohiong.png" className="xl:w-80 lg:w-64 md:w-56 sm:w-56 w-40 md:mb-0 mb-6 transition-all duration-500 hover:scale-105"/>
                                        </div>
                                        <div className="flex flex-col md:items-start items-center md:ml-0 ml-0">
                                            <div className="xl:text-5xl lg:text-4xl sm:text-3xl text-xl font-milk text-white mb-3 transition-all duration-500">Ngohiong</div>
                                            <div className="xl:text-2xl sm:text-lg text-sm font-milk-cursive text-ck-yellow transition-all duration-500 font-bold">₱10.00/pc</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="">
                            <Card className="bg-gradient-to-br from-[#000000aa] to-[#00000066] border-2 border-ck-yellow/20 backdrop-blur-md rounded-2xl hover:border-ck-yellow/50 transition-all duration-300">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square p-6">
                                    <div className="flex w-full h-full md:flex-row flex-col justify-center items-center gap-6">
                                        <div className="flex justify-center items-center flex-shrink-0">
                                            <img src="/assets/Icons/meatball.png" className="xl:w-80 lg:w-64 md:w-56 sm:w-56 w-40 md:mb-0 mb-6 transition-all duration-500 hover:scale-105"/>
                                        </div>
                                        <div className="flex flex-col md:items-start items-center md:ml-0 ml-0">
                                            <div className="xl:text-5xl lg:text-4xl sm:text-3xl text-xl font-milk text-white mb-3 transition-all duration-500">Bola-bola</div>
                                            <div className="xl:text-2xl sm:text-lg text-sm font-milk-cursive text-ck-yellow transition-all duration-500 font-bold">₱10.00/pc</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="">
                            <Card className="bg-gradient-to-br from-[#000000aa] to-[#00000066] border-2 border-ck-yellow/20 backdrop-blur-md rounded-2xl hover:border-ck-yellow/50 transition-all duration-300">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square p-6">
                                    <div className="flex w-full h-full md:flex-row flex-col justify-center items-center gap-6">
                                        <div className="flex justify-center items-center flex-shrink-0">
                                            <img src="/assets/Icons/siomai.png" className="xl:w-80 lg:w-64 md:w-56 sm:w-48 w-40 md:mb-0 mb-6 transition-all duration-500 hover:scale-105"/>
                                        </div>
                                        <div className="flex flex-col md:items-start items-center md:ml-0 ml-0">
                                            <div className="xl:text-5xl lg:text-4xl sm:text-3xl text-xl font-milk text-white mb-3 transition-all duration-500">Siomai</div>
                                            <div className="xl:text-2xl sm:text-lg text-sm font-milk-cursive text-ck-yellow transition-all duration-500 font-bold">₱30.00/4pc</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="">
                            <Card className="bg-gradient-to-br from-[#000000aa] to-[#00000066] border-2 border-ck-yellow/20 backdrop-blur-md rounded-2xl hover:border-ck-yellow/50 transition-all duration-300">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square p-6">
                                    <div className="flex w-full h-full md:flex-row flex-col justify-center items-center gap-6">
                                        <div className="flex justify-center items-center flex-shrink-0">
                                            <img src="/assets/Icons/lumpia.png" className="xl:w-80 lg:w-64 md:w-56 sm:w-60 w-48 md:mb-0 mb-6 transition-all duration-500 hover:scale-105"/>
                                        </div>
                                        <div className="flex flex-col md:items-start items-center md:ml-0 ml-0">
                                            <div className="xl:text-4xl lg:text-3xl sm:text-2xl text-lg font-milk text-white mb-3 transition-all duration-500">Lumpiang Shanghai</div>
                                            <div className="xl:text-2xl sm:text-lg text-sm font-milk-cursive text-ck-yellow transition-all duration-500 font-bold">₱8.00/pc</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="bg-ck-yellow/90 border-none hover:bg-ck-yellow cursor-pointer text-black hover:text-black sm:flex justify-center hidden w-12 h-12 rounded-full transition-all"/>
                    <CarouselNext className="bg-ck-yellow/90 border-none hover:bg-ck-yellow cursor-pointer text-black hover:text-black sm:flex justify-center hidden w-12 h-12 rounded-full transition-all"/>
                    <h1 className="sm:hidden block text-sm text-ck-yellow mt-8 font-garet text-center font-medium">Swipe to see more</h1>
                </Carousel>
                </FadeInSection>
            </div>
        </div>
    );
}

export default products;
