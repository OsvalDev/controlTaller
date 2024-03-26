import React, { useState } from 'react';
import logo from './assets/carnivalLogo.png'
function App() {

  return (
    <div className="App">
      <div class="w-screen h-screen flex justify-center items-center bg-gray-50 flex-col">
            <img src={logo} alt="Carnival logo" className="w-[50vw] md:w-[20vw] mb-6" />
            <div className="w-fit h-fit flex justify-center items-center flex-col px-8 py-4 rounded-xl shadow-lg bg-white">            
                <h3 class="w-full font-bold sm:text-3xl text-lg text-center mb-8">Inicio de sesion</h3>    
                <form class="w-full flex justify-center items-center flex-col">
                    <div class="mb-5">
                        <label for="idWorker" class="block mb-2 sm:text-sm text-xs font-medium text-gray-900">Numero de empleado</label>
                        <input type="number" id="idWorker" name="idWorker" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-[75vw] sm:w-96 p-2.5 " required />
                    </div>
                    <div class="mb-5">
                        <label for="password" class="block mb-2 sm:text-sm text-xs font-medium text-gray-900">Contraseña</label>
                        <div class="relative">
                            <input type="password" id="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-[75vw] sm:w-96 p-2.5 " required />
                            <div class="absolute inset-y-0 end-0 flex items-center pe-3.5">
                                <i id="ojito" class='bx bx-show cursor-pointer'></i>
                            </div>
                        </div>                    
                    </div>
                    <button id="btnLogin" type="button" class="text-white bg-[#C44890] hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-40">Aceptar</button>                                
                </form>
            </div>
        </div>
    </div>
  );
}

export default App;
