import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";




export const Footer = () => {
    return (
        <footer className="text-orange-200 py-10 bg-gradient-to-r from-orange-500 to-orange-700">
    <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col md:flex-row justify-between border-t border-orange-800">
        <div className="flex justify-center md:justify-start">
            <p className="font-bold text-center text-lg md:text-xl">
                Recipe Hub
            </p>
        </div>

        <div className="mt-4 md:mt-0">
            <p className="text-orange-300 text-sm">QUICK LINKS</p>

            <div className="flex flex-col text-start mb-2 md:mb-0">
                <a
                    href='/'
                    className='block md:inline-block py-1 hover:text-gray-500'
                >
                    Home
                </a>
                <a
                    href='#'
                    className='block md:inline-block py-1 hover:text-gray-500'
                >
                    About
                </a>
                <a
                    href='#'
                    className='block md:inline-block py-1 hover:text-gray-500'
                >
                    Services
                </a>
                <a
                    href='#'
                    className='block md:inline-block py-1 hover:text-gray-500'
                >
                    Contact
                </a>
                <a
                    href='#'
                    className='block md:inline-block py-1 hover:text-gray-500'
                >
                    Chiefs
                </a>
            </div>
        </div>

        <div className="mt-4 md:mt-0">
            <p className="text-orange-300 text-sm">LEGAL</p>
            <div className='flex flex-col text-start mb-2 md:mb-0 text-xs'>
                <a
                    href='#'
                    className='block md:inline-block py-1 hover:text-gray-500'
                >
                    Terms and Conditions
                </a>
                <a
                    href='#'
                    className='block md:inline-block py-1 hover:text-gray-500'
                >
                    License Agreement
                </a>
                <a
                    href='#'
                    className='block md:inline-block py-1 hover:text-gray-500'
                >
                    Privacy Policy
                </a>
                <a
                    href='#'
                    className='block md:inline-block py-1 hover:text-gray-500'
                >
                    Copyright Information
                </a>
                <a
                    href='#'
                    className='block md:inline-block py-1 hover:text-gray-500'
                >
                    Cookies Policy
                </a>
            </div>
        </div>

        <div className="mt-4 md:mt-0">
            <p className="text-orange-300 text-sm">SOCIAL MEDIA</p>
            <div className="flex mt-2 md:mt-4 gap-3">
                <a
                    href='#'
                    className='bg-orange-600 p-1 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                >
                    <FaFacebook size={16} />
                </a>

                <a
                    href='#'
                    className='bg-orange-500 p-1 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                >
                    <FaInstagram size={16} />
                </a>
                <a
                    href='#'
                    className='bg-orange-600 p-1 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                >
                    <FaTwitter size={16} />
                </a>
                <a
                    href='#'
                    className='bg-orange-700 p-1 rounded-sm text-white hover:scale-110'
                >
                    <FaYoutube size={16} />
                </a>
            </div>
        </div>
    </div>

    <div className="flex items-center justify-center py-4">
        <span className="text-orange-400 text-xs">Syamraj &copy; 2024</span>
    </div>
</footer>

    )
}