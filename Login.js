import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const [ {} , dispatch ] = useStateValue()
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error) => alert(error.message))
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='data:image/png;base64,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' alt='Vijay Youtube' />
                <div className='login__text'>
                    <h1>Login</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
