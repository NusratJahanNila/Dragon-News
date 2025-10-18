import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-xl font-bold text-center">Register your account!</h1>
                        <form>
                            <fieldset className="fieldset">
                                {/* name */}
                                <label className="label">Name</label>
                                <input
                                    name='name'
                                    type="text"
                                    className="input"
                                    placeholder="Enter your name" />
                                {/* Photo */}
                                <label className="label">Photo URL</label>
                                <input
                                    name='photo'
                                    type=""
                                    className="input"
                                    placeholder="Enter your image" />
                                {/* Email */}
                                <label className="label">Email</label>
                                <input
                                    name='email'
                                    type="email"
                                    className="input"
                                    placeholder="Enter your email address" />
                                {/* Password */}
                                <label className="label">Password</label>
                                <input
                                    name='password'
                                    type="password"
                                    className="input"
                                    placeholder="Enter your password" />
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                            <p className='text-center'>Already Have An Account? <Link className='text-secondary font-semibold' to='/auth/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            
        </div>
    );
};

export default Register;