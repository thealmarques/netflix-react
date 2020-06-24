import { User } from "../../interfaces/user.interfaces";
import { setUserType } from "../actions/user.actions";
import { Action } from "redux";

export const userInitialState: User = {
    username: ''
}

export const user = (state: User = userInitialState, action: Action | any): User => {
    switch (action.type) {
        case setUserType:
            return {
                ...state,
                username: action.payload.username
            }
        default:
            return state;
    }
}