import React from 'react'
import './LoginScreen.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
function LoginScreen() {

    const [{ }, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch(error => alert(error.message))
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
