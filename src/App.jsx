import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './routes';
import SideBar from './components/sidebar/SideBar';


function App() {
    return (
        <Router>                        
            <Routes>                
                {routes.map((route, index) => (
                    route.isPrivate ?(                        
                        <Route key = {index} path = { route.path } element = { 
                            <div className='flex bg-gray-50'>
                                <SideBar /> 
                                { route.element }
                            </div>
                        } />
                    ): (
                        <Route key={index} path = { route.path } element = { route.element } />
                    )
                ))}             
            </Routes>
        </Router>
    );
}

export default App;
