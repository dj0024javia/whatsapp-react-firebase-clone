import React from 'react'
import './LoginScreen.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
function LoginScreen() {

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => console.log(result)).catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">


                <img src="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/images/WhatsApp_Logo_1.png" />

                <div className="login__text">
                    <h1>Welcome to Whatsapp</h1>
                </div>

                <Button onClick={signIn}>Sign in With Google</Button>
            </div>
        </div>
    )
}

export default LoginScreen
