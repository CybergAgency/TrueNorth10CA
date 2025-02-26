import React from 'react'
// import '../../components/blackView/Black.css';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom'
import HeaderBlack from './HeaderBlack';
import FooterBlack from './FooterBlack';
import favicon from '../blackView/images/icons/casino.png';

function BlackLayout() {
    const path = window.location.pathname; 
    const firstSegment = path.split('/')[1];
    
    return (
        <div id='blackLayout'>
            <Helmet>
                <title>Best online Casinos in {firstSegment=='fi'? 'Finland':firstSegment=='nz'? 'New Zealand':firstSegment=='ch'? 'Switzerland':'Canada'}</title>
                <meta name="description" content="Best online Casinos in {firstSegment=='fi'? 'Finland':firstSegment=='nz'? 'New Zealand':firstSegment=='ch'? 'Switzerland':'Canada'}" />
                <link rel="icon" type="image/x-icon" href={favicon} />
            </Helmet>
            <HeaderBlack />
            <Outlet />
            <FooterBlack />
        </div>
    )
}

export default BlackLayout
