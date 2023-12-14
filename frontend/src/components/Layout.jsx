import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from './HeaderNavlink'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout