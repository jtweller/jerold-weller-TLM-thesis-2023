import { useState, useEffect } from 'react'
import { userInfo } from '../../api/index'
import './DashBoard.css'

const DashBoard = ({isLoggedIn}) => {
    const [user, setUser] = useState()

    useEffect(() => {
        isLoggedIn ?
        userInfo().then(res => {
            const {user} = res.data
            setUser(user[0])
        })
            :  setUser('')
    },[isLoggedIn])

        if(user)
        return (
            <div className='wrapper'>
                <h1>Welcome, {user.username}</h1>
                <p>
                  Your options are located on the dropdown menu
                </p>
                <p>
                    Email: <b>{user.email}</b>
                </p>
            </div>
        )
    }
export default DashBoard
