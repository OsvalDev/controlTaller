import React from 'react';
import logo from '../assets/carnivalLogo.png';

import Input from '../components/Input';

export default function Login(){

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-50 flex-col">
            <img src={logo} alt="Carnival logo" className="w-[50vw] md:w-[20vw] mb-6" />
            <div className="w-fit h-fit flex justify-center items-center flex-col px-8 py-4 rounded-xl shadow-lg bg-white">            
                <h3 className="w-full font-bold sm:text-3xl text-lg text-center mb-8">Inicio de sesion</h3>    
                <form className="w-full flex justify-center items-center flex-col">
                    <div className="mb-5">
                        <label htmlFor="idWorker" className="block mb-2 sm:text-sm text-xs font-medium text-gray-900">Numero de empleado</label>
                        <Input type="number" name="idWorker" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 sm:text-sm text-xs font-medium text-gray-900">Contraseña</label>                        
                        <Input type="password" name="password" />
                    </div>
                    <button id="btnLogin" type="button" className="text-white bg-[#C44890] hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-40">Aceptar</button>                                
                </form>
            </div>
        </div>
    );
}