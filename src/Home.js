import React from 'react';
import Header from './components/Header';
import SlideOver from './components/SlideOver';
import Cards from './components/Cards';
import Location from './components/Location';
import About from './components/About';
import KeyHighlight from './components/KeyHighlight';
import Amenities from './components/Amenities';
import Footer from './components/Footer';
import Whatsapp from './components/subcomponents/Whatsapp'

export default function Home() {
    return (
        <>
            <Header />
            <SlideOver />
            <About />
            <Cards />
            <KeyHighlight />
            <Amenities />
            <Location /> 
            <Footer />
            <Whatsapp />  
        </>
    )
}
