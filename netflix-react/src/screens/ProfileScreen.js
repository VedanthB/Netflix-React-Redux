import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../components/Nav';
import { logout, selectUser } from '../features/userSlice'
import { auth } from '../firebase';
import './ProfileScreen.css'

function ProfileScreen() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())

        })
    }

    return (
        <div className="profileScreen" >
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                     src={user?.photoUrl}
                     alt=""
                     />

                 <div className="profileScreen__details">
                    <h2>{user.email}</h2>

                 <div className="profileScreen__plans" >
                     <h3>Plans</h3>
                     
                        <button 
                          className="profileScreen__signOut"
                          onClick={signOut}
                         >Log out!
                       </button>
                 </div>

                 </div>
             </div>
            </div>
        </div>
    )
}

export default ProfileScreen
