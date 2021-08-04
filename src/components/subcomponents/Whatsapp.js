import React from 'react';
import WhatsappBtn from '../../Assets/Images/analah-whatsapp.png';

export default function Whatsapp() {
    return (
        <>
            <div className="whatsapp-api">
                <a href="https://api.whatsapp.com/send?phone=918958212121&text=Hi,%20I%27m%20interested%20in%20Weekend%20Home%20Properties"><img src={WhatsappBtn} alt=""/></a>
            </div>
        </>
    )
}
