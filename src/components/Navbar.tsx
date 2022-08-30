import { useContext, MouseEvent, MouseEventHandler } from 'react';
import {FaBars} from 'react-icons/fa'
import { UIContext } from '../context/UIContext';

import logo from '../assets/logo.svg';


export const Navbar = () => {

  const {toggleSidebar, openSubmenu, closeSubmenu} = useContext(UIContext);

  const displaySubmenu = (e:any) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3
    
    openSubmenu(page, {center, bottom});
  };

  const handleSubmenu = (e:any) => {
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className='nav-logo' />
          <button 
            className="btn toggle-btn"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}
