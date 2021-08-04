import React from 'react';
import KeyImg from '../Assets/Images/amenities.jpg';

export default function KeyHighlight() {
    return (
        <>
            <div className="container-fluid pt-12" id="features">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                            <div>
                                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                    <div className="sm:text-center lg:text-left">
                                        <p className="mt-2 text-2xl leading-8 font-medium tracking-tight text-grey-900 sm:text-2xl">
                                            Live on your own ½ & 1 acre Farm plots starting INR 30 Lakhs onwards. Fully developed gated community plots with all facilities for a second home
                                        </p>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 px-0">
                            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={KeyImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
