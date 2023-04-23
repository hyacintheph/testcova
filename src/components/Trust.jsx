import React from "react";
import advans from '../images/advans.png'
import activa from '../images/activa.png'
import chanas from '../images/chanas.png'
import grc from '../images/grc.png'
import om from '../images/om.png'
import prudential from '../images/prudential.png'
import smobil from '../images/smobil.png'
export const Trust = () => {
    return <div data-aos="fade-down" className={'px-8'}>
        <div className={'text-center'}><h2 className={'text-4xl font-bold'}>Trusted by</h2></div>
        <div className="px-10 py-12 mt-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
                <img className="h-auto max-w-full rounded-lg"
                     src={activa} alt="Activa"/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg"
                     src={prudential} alt="prudential"/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg"
                     src={smobil} alt="Smobilpay"/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg"
                     src={advans} alt="Advans"/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg"
                     src={chanas} alt="chanas"/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg"
                     src={om} alt="om"/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg"
                     src={grc} alt="grc"/>
            </div>
        </div>

    </div>
}
