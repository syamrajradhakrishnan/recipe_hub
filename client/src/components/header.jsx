import React from "react";
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../images";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

export const Header = ({ title, image, type }) => {
    return (
        <div className="w-full mt- md:mt-16 h-[100vh]">
            <div className="relative w-full h-full">
                <img src={image ?? images[Math.floor(Math.random() * images.length)]} alt="Banner" className="w-full h-full object-cover" />
            </div>
            <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-16 z-8 flex flex-col item-center justify-center pt-40 2xl:pt-20 px-4">
                <h1 className="text-white text-4xl md:text-5xl font-bold text-center">{title}</h1>
                {
                    type && (
                        <p className="text-xl mt-4 text-center text-orange-600 px-6 py-4 rounded-full ">Welcome to Recipe Hub, where culinary creativity knows no bounds!
                        <br className="hidden md:block" /> Explore a world of flavors, share your favorite recipes, and embark on a delicious journey of discovery.</p>

                    )
                }
            </div>
        </div>
    )
}