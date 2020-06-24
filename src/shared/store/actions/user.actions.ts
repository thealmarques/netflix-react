import { User } from "shared/interfaces/user.interfaces";

export const setUserType = '[USER] Set user';
export const setUser = (user: User) => {
    return {
        type: setUserType,
        payload: user
    };
}