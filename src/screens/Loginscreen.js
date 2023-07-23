import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userAction';
export default function Loginscreen() {


    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch

    useEffect(() => {

        if (localStorage.getItem('currentUser')) 
        {
            window.location.href = '/'
        }

    }, [])


    function login() {
        const user = { email, password }
        dispatch(loginUser(user))
    }


    return (
        <div>
            <div className="row justify-content-center mt-6">
                <div>
                    <h2 style={{ fontSize: '35px' }}>LOGIN</h2>

                    <div>
                        <input required
                            type="text"
                            placeholder="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => { setemail(e.target.value) }}
                        />
                        <input required
                            type="text"
                            placeholder="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => { setpassword(e.target.value) }}
                        />
                        <button onClick={login} className="btn mt-2">LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}