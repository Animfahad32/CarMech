import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please Login using Google</h2>
            <button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign In</button>
        </div>
    );
};

export default Login;