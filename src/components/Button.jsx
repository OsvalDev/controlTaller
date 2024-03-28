import React from 'react';

export default function Button({onclickFun, label}){
    return(
        <>
            <button type="button" onClick={onclickFun} className='text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none '   >
                {label}
            </button>
        </>
    );
    
}