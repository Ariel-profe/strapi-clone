import { UiState } from "./UIProvider";

type UiActionType =
| {type: '[UI] - ToggleSidebar'}
| {type: '[UI] - OpenSubmenu'}
| {type: '[UI] - CloseSubmenu'}

export const uiReducer = (state: UiState, action:UiActionType):UiState => {

    switch (action.type) {
        case '[UI] - ToggleSidebar':
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen
            }

        case '[UI] - OpenSubmenu':
            return {
                ...state,
                isSubmenuOpen: true
            }

        case '[UI] - CloseSubmenu':
            return {
                ...state,
                isSubmenuOpen: false
            }
    
        default:
            return state;
    }
};