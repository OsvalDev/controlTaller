import React from 'react';
import logo from '../assets/carnivalLogo.png';

import Form from '../components/FormLogin';

export default function Login(){
    
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-50 flex-col">
            <img src={logo} alt="Carnival logo" className="w-[50vw] md:w-[20vw] mb-6" />
            <div className="w-fit h-fit flex justify-center items-center flex-col px-8 py-4 rounded-xl shadow-lg bg-white">            
                <h3 className="w-full font-bold sm:text-3xl text-lg text-center mb-8">Inicio de sesion</h3>    
                <Form />
            </div>
        </div>
    );
}