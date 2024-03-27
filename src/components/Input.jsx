import React from 'react';
export default function Input({type, name}){    
        
    return (
        <input type={type} id={name} name={name} className ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-[75vw] sm:w-96 p-2.5 " required />
    );
}