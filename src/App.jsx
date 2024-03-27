import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './routes';
import SideBar from './components/sidebar/SideBar';
import FragmentRoute from './components/FragmentRoute';

function App() {
    return (
        <Router>                        
            <Routes>                
                {routes.map((route, index) => (
                    route.isPrivate ?(                        
                        <Route key = {index} path = { route.path } element = { 
                            <FragmentRoute>
                                <SideBar /> 
                                { route.element }
                            </FragmentRoute>
                        } />
                    ): (
                        <Route key={index} {...route} />
                    )
                ))}             
            </Routes>
        </Router>
    );
}

export default App;
