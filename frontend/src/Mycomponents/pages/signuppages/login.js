import React, { useState } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';


const Login = () => {
    let mystyle = {
        marginTop: "130px",
        marginBottom: "220px",
        maxWidth: "500px"
    }

    const [userName, setusername] = useState('');
    const [passWord, setpassword] = useState('');
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const [redirectlogin, setRedirectlogin] = useState(false);
    const [redirectverify, setRedirectverify] = useState(false);



    const loginClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios({
            url: "token",
            method: "POST",
            data: 'grant_type=password&username=' + userName + '&password=' + passWord,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;application/json',
                'Access-Control-Allow-Origin': '*',
                'withCredentials': 'true'
            }
        }).then((resp) => {
            // console.log(resp.data.access_token);//Check the response if its ok then comment this
            setLoading(false);
            if (resp.data.is_verified === true) {
                localStorage.setItem("token", resp.data.access_token)
                // const token = localStorage.getItem("token")
                // console.log(token);
                setRedirectlogin(true);
            }
            else if (resp.data.is_verified === false){
                setRedirectverify(true);
            }
        })
            .catch((error) => {
                setLoading(false);
                // console.error(error.response.data.errors); // to see what is the error 
            })


    }
    if (redirectlogin) {
        return <Redirect to="/user" />
    }
    if (redirectverify) {
        return <Redirect to="/verify" />
    }

    return (
        <div className="container bg-dark text-light border border-dark w-50">
        <form className="container text-center " style={mystyle}>
            <h1 style={{ fontFamily: 'Droid Sans' }}>Login</h1>
            <hr />
            <label htmlFor="exampleInputUsername mt-5" className="form-label mt-3"
            ><h5>Username</h5></label
            >
            <input
                type="text"
                className="form-control  "
                id="exampleInputUsername"
                value={userName}
                onChange={(e) => { setusername(e.target.value) }}
            />
            <label htmlFor="exampleInputPassword1 " className="form-label mt-3"
            ><h5>Password</h5></label
            >
            <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={passWord}
                onChange={(e) => { setpassword(e.target.value) }}
            />

            {!loading && (
                <button className="btn btn-light mt-3 px-4" type="button" onClick={loginClick}>Log in</button>
            )}
            {loading && (
                <button className="btn btn-light mt-3 px-4" type="button" disabled>
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/>
                    Loading...
                </button>
            )}
        </form>
        </div>

    )
}


export default Login