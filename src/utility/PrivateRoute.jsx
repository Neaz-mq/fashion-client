import { useContext } from "react";
import { AuthContext } from "../Hook/AuthProvider";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    if (user) {
      return children;
    }

    return <Navigate to='/login' replace></Navigate>;
        
   
};

export default PrivateRoute;