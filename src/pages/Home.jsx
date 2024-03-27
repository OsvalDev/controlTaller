import React from 'react';
import logo from '../assets/carnivalLogo.png';

export default function Home() {

    return (
        <>
            <img src={logo} alt="Carnival logo" className="w-[50vw] md:w-[20vw] mb-6" />
        </>
    );
}