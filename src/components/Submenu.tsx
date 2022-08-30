import { MutableRefObject, useContext, useEffect, useRef, useState } from 'react';
import { UIContext } from '../context/UIContext';

interface Props {

}

export const Submenu = () => {

  const {isSubmenuOpen, location, page:{page, links}} = useContext(UIContext);

  const container = useRef<HTMLDivElement>(null);

  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const {bottom, center} = location;

    submenu!.style.left = `${center}px`;
    submenu!.style.top  = `${bottom}px`;

    if(links.length === 3){
      setColumns('col-3');
    }

    if(links.length > 3){
      setColumns('col-4');
    }
  }, [location, links])
  

  return (
    <aside 
      className={isSubmenuOpen ? 'submenu show' : 'submenu'}
      ref={container}
    >
      <h4>{page}</h4>
      <div
        className={`submenu-center ${columns}`}
      >
        {
          links.map( ({label, icon, url}, index) => (
            <a href={url} key={index}>
              {icon}{label}
            </a>
          ))
        }
      </div>
    </aside>
  )
}
