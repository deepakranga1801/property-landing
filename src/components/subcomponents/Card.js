import React from 'react'

export default function card(props) {
    return (
        <>
            
            <div className="antialiased text-gray-900">
                    <img src={props.img} alt="" className="w-full h-72 object-cover object-center rounded-lg shadow-md" />

                        <div className="relative px-4 -mt-16">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate" style={{'color':'#dbb226'}}>{props.title}</h4>

                                <div className="mt-1">
                                    {props.config}
                                </div>
                            </div>
                        </div>
                </div>
            
        </>
    )
}
