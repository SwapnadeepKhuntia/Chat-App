import {useSelector} from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom';

function RequiredAuth() {
    const {isLoggedIn} = useSelector((state) => state.auth);

    // console.log(isLoggedIn);
    
   return isLoggedIn ? (<Outlet/>) : (<Navigate to="/login" />);

}

export default RequiredAuth;