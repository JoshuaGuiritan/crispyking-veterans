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
        <div ref={products} className="w-screen min-h-screen bg-white overflow-x-hidden py-20 md:py-32">
            <div className="w-full flex flex-col items-center">
                <div className="text-center mb-16 md:mb-20 px-6">
                    <FadeInSection delay={300}>
                        <h2 className="text-ck-red font-garet text-sm md:text-base font-bold tracking-widest uppercase mb-4">Signature Selection</h2>
                        <h1 className="text-ck-red-dark font-milk xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold mb-6 leading-tight">Our Menu</h1>
                        <p className="text-gray-600 font-garet text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Handcrafted Filipino favorites made with premium ingredients and authentic recipes</p>
                    </FadeInSection>
                </div>
                <FadeInSection delay={400}>
                    <div className="w-full max-w-6xl px-6">
                        <Carousel className="w-full">
                            <CarouselContent className="flex justify-start items-stretch gap-6">
                        <CarouselItem className="md:basis-1/2 lg:basis-1/2 basis-full">
                            <Card className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-ck-red/30 transition-all duration-500 group">
                                <CardContent className="flex flex-col h-full justify-between p-0 md:flex-row">
                                    <div className="flex justify-center items-center flex-shrink-0 p-8 md:w-1/2">
                                        <img src="/assets/Icons/friedchicken.png" className="w-40 md:w-48 transition-transform duration-500 group-hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-center items-start p-6 md:w-1/2 gap-4">
                                        <div>
                                            <h3 className="font-milk text-ck-red-dark text-2xl md:text-3xl font-bold mb-2">Crispy Fried Chicken</h3>
                                            <p className="text-gray-600 font-garet text-sm md:text-base leading-relaxed">Premium quality, perfectly seasoned and fried golden brown</p>
                                        </div>
                                        <div className="pt-4">
                                            <div className="text-ck-red font-garet text-3xl font-bold">₱40.00</div>
                                            <p className="text-gray-500 font-garet text-sm">per piece</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/2 basis-full">
                            <Card className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-ck-red/30 transition-all duration-500 group">
                                <CardContent className="flex flex-col h-full justify-between p-0 md:flex-row">
                                    <div className="flex justify-center items-center flex-shrink-0 p-8 md:w-1/2">
                                        <img src="/assets/Icons/ngohiong.png" className="w-40 md:w-48 transition-transform duration-500 group-hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-center items-start p-6 md:w-1/2 gap-4">
                                        <div>
                                            <h3 className="font-milk text-ck-red-dark text-2xl md:text-3xl font-bold mb-2">Ngohiong</h3>
                                            <p className="text-gray-600 font-garet text-sm md:text-base leading-relaxed">Traditional Filipino spring rolls, crispy and flavorful</p>
                                        </div>
                                        <div className="pt-4">
                                            <div className="text-ck-red font-garet text-3xl font-bold">₱10.00</div>
                                            <p className="text-gray-500 font-garet text-sm">per piece</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/2 basis-full">
                            <Card className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-ck-red/30 transition-all duration-500 group">
                                <CardContent className="flex flex-col h-full justify-between p-0 md:flex-row">
                                    <div className="flex justify-center items-center flex-shrink-0 p-8 md:w-1/2">
                                        <img src="/assets/Icons/meatball.png" className="w-40 md:w-48 transition-transform duration-500 group-hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-center items-start p-6 md:w-1/2 gap-4">
                                        <div>
                                            <h3 className="font-milk text-ck-red-dark text-2xl md:text-3xl font-bold mb-2">Bola-Bola</h3>
                                            <p className="text-gray-600 font-garet text-sm md:text-base leading-relaxed">Savory meat and spice meatballs, deliciously fried</p>
                                        </div>
                                        <div className="pt-4">
                                            <div className="text-ck-red font-garet text-3xl font-bold">₱10.00</div>
                                            <p className="text-gray-500 font-garet text-sm">per piece</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/2 basis-full">
                            <Card className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-ck-red/30 transition-all duration-500 group">
                                <CardContent className="flex flex-col h-full justify-between p-0 md:flex-row">
                                    <div className="flex justify-center items-center flex-shrink-0 p-8 md:w-1/2">
                                        <img src="/assets/Icons/siomai.png" className="w-40 md:w-48 transition-transform duration-500 group-hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-center items-start p-6 md:w-1/2 gap-4">
                                        <div>
                                            <h3 className="font-milk text-ck-red-dark text-2xl md:text-3xl font-bold mb-2">Siomai</h3>
                                            <p className="text-gray-600 font-garet text-sm md:text-base leading-relaxed">Steamed pork dumplings with authentic Filipino flavors</p>
                                        </div>
                                        <div className="pt-4">
                                            <div className="text-ck-red font-garet text-3xl font-bold">₱30.00</div>
                                            <p className="text-gray-500 font-garet text-sm">for 4 pieces</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/2 basis-full">
                            <Card className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-ck-red/30 transition-all duration-500 group">
                                <CardContent className="flex flex-col h-full justify-between p-0 md:flex-row">
                                    <div className="flex justify-center items-center flex-shrink-0 p-8 md:w-1/2">
                                        <img src="/assets/Icons/lumpia.png" className="w-40 md:w-48 transition-transform duration-500 group-hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-center items-start p-6 md:w-1/2 gap-4">
                                        <div>
                                            <h3 className="font-milk text-ck-red-dark text-2xl md:text-3xl font-bold mb-2">Lumpiang Shanghai</h3>
                                            <p className="text-gray-600 font-garet text-sm md:text-base leading-relaxed">Classic Filipino spring rolls with meat and vegetables</p>
                                        </div>
                                        <div className="pt-4">
                                            <div className="text-ck-red font-garet text-3xl font-bold">₱8.00</div>
                                            <p className="text-gray-500 font-garet text-sm">per piece</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                            </CarouselContent>
                            <div className="flex justify-center items-center gap-4 mt-8">
                                <CarouselPrevious className="bg-ck-red border-none hover:bg-ck-red-dark cursor-pointer text-white hover:text-white hidden md:flex w-12 h-12 rounded-full transition-all"/>
                                <CarouselNext className="bg-ck-red border-none hover:bg-ck-red-dark cursor-pointer text-white hover:text-white hidden md:flex w-12 h-12 rounded-full transition-all"/>
                            </div>
                            <p className="md:hidden text-sm text-gray-600 text-center font-garet mt-6">Swipe to explore more items</p>
                        </Carousel>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
}

export default products;
