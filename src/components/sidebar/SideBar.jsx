import React from 'react';
import SideBarItem from './SideBarItem';

export default function SideBar(){

    return (
        <nav>
            <ul>
                <SideBarItem pathTo={ '/home' } label={ 'Inicio' } />
                <SideBarItem pathTo={ '/reports' } label={ 'Ordenes de trabajo' } />
                <SideBarItem pathTo={ '/history' } label={ 'Historial' } />
                <SideBarItem pathTo={ '/inventory' } label={ 'Inventario' } />
                <SideBarItem pathTo={ '/settings' } label={ 'Configuracion' } />
            </ul>
        </nav>
    );
}