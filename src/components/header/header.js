import { NavLink } from "react-router-dom"



const Header = () => {
  return (
    <header className='main-header'>
      <center>
      <NavLink to="/news" >News</NavLink>
      &nbsp;
      <NavLink to="/about">About</NavLink>
      &nbsp;
      <NavLink to="/bookmarks">Bookmarks</NavLink>
      </center>
    </header>
  )
}

export default Header;