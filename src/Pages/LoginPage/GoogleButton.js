
import React, { useState, useEffect, useCallback } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import axios from "axios";
import styled from 'styled-components';

function Googlebutton() {

    const clientId = '749258175280-j6no56csatjc94v44rm7d06f868s3g14.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: '',
            });
        };
        gapi.load('client:auth2', initClient);
    });
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [imgUrl, setImgUrl] = useState();
    const [islogin, setIslogin] = useState(false);
    const onSuccess = (res) => {
        console.log('success:', res);
        setEmail(res.profileObj.email);
        setName(res.profileObj.name);
        setImgUrl(res.profileObj.imageUrl);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("img", imgUrl);
        setIslogin(true);
    };

    // axios.post("http://localhost:8080/signup", {
    //     username: { name },
    //     email: { email },
    //     imageUrl: { imgUrl }
    // }).then(function (response) {
    //     console.log(response);
    // }).catch(function (error) {
    //     console.log(error);
    // });
    // const onFailure = (err) => {
    //     console.log('failed', err);
    // };
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                // onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
}
export default Googlebutton;