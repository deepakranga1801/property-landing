import React from 'react'
import Logo from '../Assets/Images/a21-logo.png'

export default function Header() {
    return (
        <>
            <div className=" bg-white fixed top-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span className="sr-only">Analah21</span>
                                <img className="h-20 w-auto" src={Logo} alt="" />
                            </a>
                        </div>
                        
                            <nav className="hidden md:flex space-x-10">
                                
                                <a href="#project" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    The Project
                                </a>
                                <a href="#villas" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Villas
                                </a>
                                <a href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Features
                                </a>
                                <a href="#amenities" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Amenities
                                </a>
                                <a href="#location" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Location
                                </a>

                            </nav>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <a href="https://api.whatsapp.com/send?phone=918958212121" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                    +91-8958212121
                                </a>
                            </div>
                        </div>
                    </div>                        
                </div>

        </>
    )
}
