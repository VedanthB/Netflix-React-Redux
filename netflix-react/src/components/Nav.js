import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    const user = useSelector(selectUser)

     const transitionNavBar = () => {
         if (window.scrollY > 100) {
             handleShow(true)
         } else {
             handleShow(false)
         }
     }

     useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
         return () => window.removeEventListener('scroll', transitionNavBar)
     }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`} >  
        <div className='nav__contents' >
            <img 
              className='nav__logo'
              src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
              alt=''
            />

            <img 
              className='nav__avatar'
              src={user?.photoUrl}
              alt=''
            />
        </div> 


        </div>
    )
}

export default Nav
