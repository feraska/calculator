import { actions } from "@/enums/actions";
import { action, appState } from "@/interfaces/appState";

export const AuthReducer = (state:appState,action:action):appState => {
    switch(action.type) {
        case actions.click: 
            return {
            ...state,
            click:true
            }
        case actions.getRepaymnet:
            return {
                ...state,
                repaymnet:action.payload??0
            }
        case actions.getTotal:
            return {
                ...state,
                total:action.payload??0
            }    
    }
    return {
        ...state,
    }
}