import React from 'react';

export default function CircleButton ({onclickFun, icon}) {
    return (
        <>
            <button type="button"  onClick={onclickFun}  className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2">
                {icon}
            </button>
        </>
    );
}