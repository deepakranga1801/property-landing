import React from 'react'
import Card from '../components/subcomponents/Card';
import Villa1 from '../Assets/Images/1.jpg';
import Villa2 from '../Assets/Images/2.jpg';
import Villa3 from "../Assets/Images/3.jpg";

export default function Cards() {
    return (
        <>
        <div className="container" id="villas">
            <div className="row px-5">
                <div className="col-12 col-lg-4 py-14">
                    <Card title={"ISTANA"} config={"4 Bedroom Signature Villas"} img={Villa1}/>
                </div>
                <div className="col-12 col-lg-4 py-14">
                    <Card title={"INARA"} config={"3 Bedroom Signature Villas"} img={Villa2}/>
                </div>
                <div className="col-12 col-lg-4 py-14">
                    <Card title={"MIRAYA"} config={"2 & 3 Bedroom Furnished Villas"} img={Villa3}/>
                </div>
            </div>
        </div>  
        </>
    )
}
