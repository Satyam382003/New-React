import React from 'react'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' //In Outlet you can update the values or pages
import Header from './components/Header/Header'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
