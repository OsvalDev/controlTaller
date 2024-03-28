import React from 'react';
import SideBarItem from './SideBarItem';

import logo from '../../assets/carnivalLogo.png';

export default function SideBar(){

    return (
        <aside className='h-screen w-fit transition-transform -translate-x-full sm:translate-x-0'>
            <div className="h-full px-3 py-4 overflow-y-auto bg-white flex flex-col">
                <div className='flex-1'>
                    <div className='flex w-full justify-center'>
                        <img src={logo} alt="Carnival logo" className='w-[12vw]' />
                    </div>
                    <ul className="space-y-2 font-medium">
                        <SideBarItem pathTo={ '/home' } label={ 'Inicio' } />
                        <SideBarItem pathTo={ '/reports' } label={ 'Ordenes de trabajo' } />
                        <SideBarItem pathTo={ '/history' } label={ 'Historial' } />
                        <SideBarItem pathTo={ '/inventory' } label={ 'Inventario' } />
                        <SideBarItem pathTo={ '/settings' } label={ 'Configuracion' } />
                    </ul>
                </div>
                <ul className="space-y-2 font-medium">
                    <SideBarItem pathTo={ '/' } label={ 'Cerrar sesion' } />
                </ul>
            </div>
        </aside>
    );
}