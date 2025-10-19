import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser,setUser } = use(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ name, photoURL, email, password });
        // function call
        createUser(email, password)
            .then((result) => {
                // Signed up 
                const user = result.user;
                // console.log(user);
                // user er data ta setUser dia AuthProvider a pathai dao
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                console.log(errorCode);
            });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-xl font-bold text-center">Register your account!</h1>
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input
                                name='name'
                                type="text"
                                className="input"
                                placeholder="Enter your name"
                                required />
                            {/* Photo */}
                            <label className="label">Photo URL</label>
                            <input
                                name='photo'
                                type="text"
                                className="input"
                                placeholder="Enter your image"
                                required />
                            {/* Email */}
                            <label className="label">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="input"
                                placeholder="Enter your email address"
                                required />
                            {/* Password */}
                            <label className="label">Password</label>
                            <input
                                name='password'
                                type="password"
                                className="input"
                                placeholder="Enter your password"
                                required />
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