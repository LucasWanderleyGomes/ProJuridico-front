import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN } from "../constants";

export const getCurrentUser = () => {
    try{
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(!token){
            return null
        }

        const decoded = jwtDecode(token)

        return decoded

    } catch (error) {
        console.log(error)
        return null
    }
}