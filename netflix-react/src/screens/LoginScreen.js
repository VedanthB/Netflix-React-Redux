import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'



function LoginScreen() {
    const [signIn, setSignIn] = useState(false)

    return (
        <div className='loginScreen' >
            <div className='loginScreen__background' >
                <img 
                 className='loginScreen__logo'
                 src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                 alt='' 
                />
                <button 
                  onClick={() => setSignIn(true)} 
                  className='loginScreen__button' 
                  > Sign in!
                </button>

                <div className='loginScreen__gradiant' > 
                 </div>

                 <div className='loginScreen__body' >

                       {signIn ? (
                           <SignupScreen />
                       ): (
                        <>
                        <h1>Unlimited films, TV programmes and
                            more.
                        </h1>
                        <h2>
                            Watch Anywhere. Cancel at Any Time.
                        </h2>
                        <h3>
                            Ready to watch? Enter Your Email to create or restart membership.
                        </h3>

                    <div className='loginScreen__input' >
                       <form>
                            <input type='email' placeholder='Email Address' />
                            <button 
                               onClick={() => setSignIn(true)}
                               className='loginScreen__getStarted' >
                                   Get Started!
                            </button>
                       </form>
                    </div>
                     </> 

                       )}
                       
                 </div>

            </div>
        </div>
    )
}

export default LoginScreen