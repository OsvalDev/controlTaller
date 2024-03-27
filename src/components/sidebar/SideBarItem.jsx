import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBarItem({pathTo, label}) {
    return(        
        <li><Link to={ pathTo } >{ label }</Link></li>
    );
}
