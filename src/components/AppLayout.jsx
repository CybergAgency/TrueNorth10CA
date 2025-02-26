import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Helmet } from 'react-helmet-async'
import favicon from '../images/caFlg.png'

function AppLayout() {
    return (
       <>
          <Helmet>
                <title>Best social casino games in Canada</title>
                <meta name="description" content="Best social casino games in Canada" />
                <link rel="icon" type="image/x-icon" href={favicon} />
            </Helmet>
            <Header />
            <Outlet />
            <Footer />
            </>
    )
}

export default AppLayout
