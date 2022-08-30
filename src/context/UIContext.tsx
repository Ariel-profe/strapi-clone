import { createContext, ReactElement } from 'react';
import { ILink } from '../data/data';

interface ContextProps {
    isSidebarOpen: boolean;
    isSubmenuOpen: boolean;
    location: {center?: number, bottom?:number};
    page: ILink;
   

    //Methods
    toggleSidebar: () => void;
    openSubmenu: (text: string, coords: {}) => void;
    closeSubmenu: () => void;
}


export const UIContext = createContext({} as ContextProps);