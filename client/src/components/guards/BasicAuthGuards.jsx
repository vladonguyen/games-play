import {useContext} from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/authContext";



export default function AuthGuard(props){

        const {isAuthenticated} = useContext(AuthContext);

        if(!isAuthenticated){
            return <Navigate to="/login" />;
        }

        return (
            <>
            {props.children}
            </>
        )
    
    
}