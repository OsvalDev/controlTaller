import React from 'react';

export default function Card({children}) {

    return (
        <div className="bg-white rounded-lg p-4 shadow-sm flex-1 h-fit mx-8 mt-4">
            {children}
        </div>
    );

}