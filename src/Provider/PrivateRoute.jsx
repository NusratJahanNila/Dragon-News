import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoute = ({ children }) => {
    const { user,loading } = use(AuthContext);
    // console.log(user);
    const location=useLocation();
    // console.log(location);

    // --------------------------------------------------
    // login obosthai jodi page reload hoi ,loading dekhabe, login page a nia jabe na
    if(loading){
        return <Loading></Loading>
    }
    // --------------------------------------------------

    // --------------------------------------------------
    if (user && user.email) {
        // if user? return children
        return children;
    }
    else{
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
    //else==> navigate to login
    // --------------------------------------------------
};

export default PrivateRoute;

// Kichu page thake ja login na korle access kora jai na.ejonno Private Route use kora hoi.

// private route er children hishabe component pass hobe!