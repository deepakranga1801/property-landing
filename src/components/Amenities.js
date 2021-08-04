import React from 'react';
import AmenitiesImg from '../Assets/Images/resort-spa2.jpg';

export default function Amenities() {
    return (
        <>
            <div className="container-fluid" id="amenities">
                <div className="row">
                    <div className="col-12 col-lg-6 px-0">
                            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={AmenitiesImg} alt="" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                            <div>
                                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                    <div className="sm:text-center lg:text-left">
                                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Amenities:</h2>

                                        <ul>
                                            <li>* Private Plunge pool with landscaped garden</li>
                                            <li>* Spa, Health Club</li>
                                            <li>* Kids area & Jacuzzi</li>
                                            <li>* All views offer breathtaking views of Duke’s Nose and the valley below</li>
                                        </ul>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
