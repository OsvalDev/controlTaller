import React, { Fragment } from 'react';

export default function FragmentRoute ({ children }) {
    return ( 
        <Fragment>
            { children }
        </Fragment>
    );
}
