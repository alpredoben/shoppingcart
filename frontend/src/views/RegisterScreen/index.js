import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {RegisterUserAccount} from '../../redux/actions';

function RegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {loading, authUser, errors} = useSelector(state => state.UserRegisterReducer)

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(authUser) {
            props.history.push('/')
        }

        return () => {}
    }, [authUser]);

    const submitHandler = (e) => {
        e.preventDefault(); 
        dispatch(RegisterUserAccount({name, email, password, confirmPassword}))
    } 


    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li className="text-center">
                        <h2>Create New Account</h2>
                    </li>
                    <li>
                        { loading && <div>Loading...</div> }
                        { errors && <div>{errors}</div>}
                    </li>
                    <li>
                        <label htmlFor="fullname">Fullname</label>
                        <input type="text" name="fullname" id="fullname" onChange={(e) => setName(e.target.value)} placeholder="Fullname..." />
                    </li>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password..." />
                    </li>
                    <li>
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" name="cpassword" id="cpassword" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password..." />
                    </li>
                    <li>
                        <button type="submit" className="button button-primary">
                            LOGIN
                        </button>
                    </li> 
                    <li>
                        Already have an account ? <Link to="/login">Sign In</Link>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default RegisterScreen;