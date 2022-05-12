import { Outlet } from "react-router-dom"
import Header from "../header/header"
import { Fragment } from 'react';

const Layout = () => {
  return (
    <>

      <Header />
      
      <Outlet />
    </>
  )
}

export default Layout;