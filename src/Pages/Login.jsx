import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { login,setUser } = use(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);
        // login function
        login(email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                // console.log(user);
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage,errorCode);
            });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-xl font-bold text-center">Login your account!</h1>
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="input"
                                placeholder="Enter your email address" />
                            <label className="label">Password</label>
                            <input
                                name='password'
                                type="password"
                                className="input"
                                placeholder="Enter your password" />
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        <p className='text-center'>Don't Have An Account? <Link className='text-secondary font-semibold' to='/auth/register'>Register</Link></p>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;