import Head from 'next/head'

import React from 'react'
import Footer from './Footer'

import Navbar from './Navbar'

const Layout = ({ children, menu }) => {
    return (
        <div>
            <Navbar menu={menu} />
                <Head>
                    <title>CarbnForme</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout