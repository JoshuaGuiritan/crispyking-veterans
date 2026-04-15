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
        <div ref={products} className="w-screen min-h-screen bg-white overflow-x-hidden py-8 sm:py-12 md:py-20 lg:py-32">
            <div className="w-full flex flex-col items-center">
                <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-3 sm:px-4 md:px-6">
                    <FadeInSection delay={300}>
                        <h2 className="text-ck-red font-garet text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-3 md:mb-4">Signature Selection</h2>
                        <h1 className="text-ck-red-dark font-milk text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">Our Menu</h1>
                        <p className="text-gray-600 font-garet text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">Handcrafted Filipino favorites made with premium ingredients and authentic recipes</p>
                    </FadeInSection>
                </div>
                <FadeInSection delay={400}>
                    <div className="w-full max-w-7xl px-2 sm:px-3 md:px-4 lg:px-6">
                        <Carousel className="w-full px-1 sm:px-0">
                            <CarouselContent className="flex justify-start items-stretch gap-3 sm:gap-4 md:gap-6">
                        <CarouselItem className="basis-full md:basis-1/2">
                            <Card className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-ck-red/50 transition-all duration-300 group">
                                <CardContent className="flex flex-col h-full justify-between p-0 sm:flex-row">
                                    <div className="flex justify-center items-center flex-shrink-0 p-3 sm:p-4 md:p-6 lg:p-8 sm:w-1/2">
                                        <img src="/assets/Icons/friedchicken.png" className="w-24 xs:w-28 sm:w-36 md:w-40 lg:w-48 transition-transform duration-300 group-hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-center items-start p-3 sm:p-4 md:p-6 sm:w-1/2 gap-2 sm:gap-3 md:gap-4">
                                        <div>
                                            <h3 className="font-milk text-ck-red-dark text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">Crispy Fried Chicken</h3>
                                            <p className="text-gray-600 font-garet text-xs sm:text-xs md:text-sm lg:text-base leading-tight sm:leading-relaxed">Premium quality, perfectly seasoned and fried golden brown</p>
                                        </div>
                                        <div className="pt-1 sm:pt-2 md:pt-4">
                                            <div className="text-ck-red font-garet text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold">₱40.00</div>
                                            <p className="text-gray-500 font-garet text-xs sm:text-xs md:text-sm">per piece</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="basis-full md:basis-1/2">
                            <Card className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-ck-red/50 transition-all duration-300 group">
                                <CardContent className="flex flex-col h-full justify-between p-0 sm:flex-row">
                                    <div className="flex justify-center items-center flex-shrink-0 p-3 sm:p-4 md:p-6 lg:p-8 sm:w-1/2">
                                        <img src="/assets/Icons/ngohiong.png" className="w-24 xs:w-28 sm:w-36 md:w-40 lg:w-48 transition-transform duration-300 group-hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-center items-start p-3 sm:p-4 md:p-6 sm:w-1/2 gap-2 sm:gap-3 md:gap-4">
                                        <div>
                                            <h3 className="font-milk text-ck-red-dark text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">Ngohiong</h3>
                                            <p className="text-gray-600 font-garet text-xs sm:text-xs md:text-sm lg:text-base leading-tight sm:leading-relaxed">Traditional Filipino spring rolls, crispy and flavorful</p>
                                        </div>
                                        <div className="pt-1 sm:pt-2 md:pt-4">
                                            <div className="text-ck-red font-garet text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold">₱10.00</div>
                                            <p className="text-gray-500 font-garet text-xs sm:text-xs md:text-sm">per piece</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="basis-full md:basis-1/2">
                            <Card className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-ck-red/50 transition-all duration-300 group">
                                <CardContent className="flex flex-col h-full justify-between p-0 sm:flex-row">
                                    <div className="flex justify-center items-center flex-shrink-0 p-3 sm:p-4 md:p-6 lg:p-8 sm:w-1/2">
                                        <img src="/assets/Icons/meatball.png" className="w-24 xs:w-28 sm:w-36 md:w-40 lg:w-48 transition-transform duration-300 group-hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-center items-start p-3 sm:p-4 md:p-6 sm:w-1/2 gap-2 sm:gap-3 md:gap-4">
                                        <div>
                                            <h3 className="font-milk text-ck-red-dark text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">Bola-Bola</h3>
                                            <p className="text-gray-600 font-garet text-xs sm:text-xs md:text-sm lg:text-base leading-tight sm:leading-relaxed">Savory meat and spice meatballs, deliciously fried</p>
                                        </div>
                                        <div className="pt-1 sm:pt-2 md:pt-4">
                                            <div className="text-ck-red font-garet text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold">₱10.00</div>
                                            <p className="text-gray-500 font-garet text-xs sm:text-xs md:text-sm">per piece</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="basis-full md:basis-1/2">
                            <Card className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-ck-red/50 transition-all duration-300 group">
                                <CardContent className="flex flex-col h-full justify-between p-0 sm:flex-row">
                                    <div className="flex justify-center items-center flex-shrink-0 p-3 sm:p-4 md:p-6 lg:p-8 sm:w-1/2">
                                        <img src="/assets/Icons/siomai.png" className="w-24 xs:w-28 sm:w-36 md:w-40 lg:w-48 transition-transform duration-300 group-hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-center items-start p-3 sm:p-4 md:p-6 sm:w-1/2 gap-2 sm:gap-3 md:gap-4">
                                        <div>
                                            <h3 className="font-milk text-ck-red-dark text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">Siomai</h3>
                                            <p className="text-gray-600 font-garet text-xs sm:text-xs md:text-sm lg:text-base leading-tight sm:leading-relaxed">Steamed pork dumplings with authentic Filipino flavors</p>
                                        </div>
                                        <div className="pt-1 sm:pt-2 md:pt-4">
                                            <div className="text-ck-red font-garet text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold">₱30.00</div>
                                            <p className="text-gray-500 font-garet text-xs sm:text-xs md:text-sm">for 4 pieces</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="basis-full md:basis-1/2">
                            <Card className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-ck-red/50 transition-all duration-300 group">
                                <CardContent className="flex flex-col h-full justify-between p-0 sm:flex-row">
                                    <div className="flex justify-center items-center flex-shrink-0 p-3 sm:p-4 md:p-6 lg:p-8 sm:w-1/2">
                                        <img src="/assets/Icons/lumpia.png" className="w-24 xs:w-28 sm:w-36 md:w-40 lg:w-48 transition-transform duration-300 group-hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-center items-start p-3 sm:p-4 md:p-6 sm:w-1/2 gap-2 sm:gap-3 md:gap-4">
                                        <div>
                                            <h3 className="font-milk text-ck-red-dark text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">Lumpiang Shanghai</h3>
                                            <p className="text-gray-600 font-garet text-xs sm:text-xs md:text-sm lg:text-base leading-tight sm:leading-relaxed">Classic Filipino spring rolls with meat and vegetables</p>
                                        </div>
                                        <div className="pt-1 sm:pt-2 md:pt-4">
                                            <div className="text-ck-red font-garet text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold">₱8.00</div>
                                            <p className="text-gray-500 font-garet text-xs sm:text-xs md:text-sm">per piece</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                            </CarouselContent>
                            <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8">
                                <CarouselPrevious className="bg-ck-red border-none hover:bg-ck-red-dark cursor-pointer text-white hover:text-white hidden sm:flex w-10 h-10 md:w-12 md:h-12 rounded-full transition-all items-center justify-center"/>
                                <CarouselNext className="bg-ck-red border-none hover:bg-ck-red-dark cursor-pointer text-white hover:text-white hidden sm:flex w-10 h-10 md:w-12 md:h-12 rounded-full transition-all items-center justify-center"/>
                            </div>
                            <p className="sm:hidden text-xs text-gray-600 text-center font-garet mt-4">Swipe to see more</p>
                        </Carousel>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
}

export default products;
