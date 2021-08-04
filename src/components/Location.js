import React from 'react';
import Map from '../components/subcomponents/Map';

export default function Location() {
    return (
        <>
            <div className="container-fluid" id="location">
                <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="relative z-10 pb-4 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32" style={{'top':'14%'}}>
                                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                    <div className="sm:text-center lg:text-left">
                                        <p className="mt-2 text-2xl leading-8 font-medium tracking-tight text-grey-900 sm:text-2xl">
                                            Getting to Second Homes is effortless. It is just 90 kms from Mumbai, 80 kms from Pune & 27 kms from Lonavala.
                                        </p>
                                        <br/>
                                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Nearby Features:</h2>

                                        <ul>
                                            <li>* Pali Ganapati is 20 mins drive.</li>
                                            <li>* 15 min drive to Adlabs Imagica</li>
                                            <li>* 30 kms from Lonavala</li>
                                        </ul>
                                    </div>
                                </main>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 px-0">
                            <Map />
                        </div>
                    </div>
                </div>
        </>
                )
}
