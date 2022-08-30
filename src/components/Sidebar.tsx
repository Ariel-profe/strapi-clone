import { useContext } from 'react';
import {FaTimes} from 'react-icons/fa';

import { UIContext } from '../context/UIContext';
import {sublinks} from '../data/data';

export const Sidebar = () => {

  const {isSidebarOpen, toggleSidebar} = useContext(UIContext);
  return (
    <aside className={isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}>
      <div className="sidebar">
        <button
          className='close-btn'
          onClick={toggleSidebar}
        >
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {
            sublinks.map( ({links, page}, index) => (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map( ({icon, label, url}, index) => (
                    <a href={url} key={index}>
                      {icon}{label}
                    </a>
                  ))}
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </aside>
  )
}
