import { FC, ReactElement, useReducer, useState } from 'react';

import { ILink, sublinks } from '../data/data';
import { UIContext } from "./UIContext";
import { uiReducer } from './uiReducer';

export interface Props {
    children: ReactElement
};

export interface UiState {
    isSidebarOpen: boolean;
    isSubmenuOpen: boolean;
};


const UI_INITIAL_STATE: UiState = {
    isSidebarOpen: false,
    isSubmenuOpen: false
};

export const UIProvider:FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState<ILink>({page: '', links: [{label: '', url: '', icon: <></>}]});

    const toggleSidebar = () => {
        dispatch({type: '[UI] - ToggleSidebar'})
    };

    const openSubmenu = (text: string, coords: {}) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page as any);
        
        setLocation(coords);
        dispatch({type: '[UI] - OpenSubmenu'})
    };

    const closeSubmenu = () => {
        dispatch({type: '[UI] - CloseSubmenu'})
    };
    

    return (
        <UIContext.Provider value={{
            ...state,
            location,
            page,

            //Mehthods
            toggleSidebar,
            openSubmenu,
            closeSubmenu
        }}>
            {children}
        </UIContext.Provider>
    )
};