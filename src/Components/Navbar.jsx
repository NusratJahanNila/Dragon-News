import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    // to use Auth context
    // 1. use hook dia context er value nia ashte hobe
    const { user,logout } = use(AuthContext);

    // Logout 
    const handleLogout=()=>{
        logout()
        .then(()=>{
            alert('Log Out Successfully!')
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-3 text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="logni-btn flex gap-3">
                <img src={userImg} alt="user image" />
                {
                    // jodi user thake, Logout dekhabe,na thakle login korte bolbe
                    user ?
                        <button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button>
                        :
                        <Link to={'/auth/login'} className='btn btn-primary px-10'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;