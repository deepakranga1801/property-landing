import React from 'react';
import SideForm from '../components/subcomponents/SideForm';

export default function SlideOver() {
    return (
        <>
            
            <div className="container-fluid lg:flex md:flex px-0">
                    <div className="col-lg-8 col-md-8 col-12 lg:h-screen h-72 home-bg"></div>
                    <div className="col-lg-4 col-md-4 col-12"><SideForm /></div>
            </div>

        </>
    )
}
