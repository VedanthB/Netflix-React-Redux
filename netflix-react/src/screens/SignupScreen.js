import React from 'react'
import { auth, provider } from '../firebase'
import './SignupScreen.css'
import { useDispatch } from 'react-redux';
 import { login } from '../features/userSlice';

function SignupScreen() {
    const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider)
         .then(({user}) => {
             dispatch(
                 login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        })
        .catch((error) => alert(error.message))
    }  


    return (
        <div className='signupScreen' >
               <img 
                  src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                  alt=""
                  className='signupScreen__logo' 
                  />
                  <button 
                    className='signupScreen__button'
                    onClick={signIn} 
                   >Login With Google
                   </button>
             
        </div>
    )
}

export default SignupScreen
