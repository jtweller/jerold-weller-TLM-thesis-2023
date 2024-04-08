import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { handleRegister } from '../../api/index'
import './Forms.css'

export const Register = () => {
    const [newUser, setNewUser] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setNewUser(values => ({ ...values, [name]: value }))
      }

    const register = async (e) => {
        e.preventDefault()
        e.persist()
        await handleRegister(newUser)
        .then(res=> {
            setNewUser({
                isLoggedIn: true,
                username:'',
                email:'',
                password:''
            })
            const { token } = res.data;
            window.localStorage.setItem('api_token', token)
            window.location = '/'
        })
        .catch(err=>{
            console.log(err)
            alert('Something went wrong saving user.')
        })
}
    return (
        <div className='formWrap text-center rounded-2 pb-2 mx-auto'>
            <h1 className='mt-2'>Ready to work?</h1>
            <h3>Register today to keep track of your service tickets!</h3>
            <form className="form mx-4" onSubmit={(e)=>register(e)}>
                <h4>Username</h4>
                <input 
                    onChange={handleChange}
                    type="text" 
                    className="form-control mb-2" 
                    name="username" 
                    required />
                <h4>Email</h4>
                <input
                    onChange={handleChange}
                    type="email"
                    className="form-control mb-2" 
                    name="email" 
                    required />
                <h4>Password</h4>
                <input 
                    onChange={handleChange}
                    type="password" 
                    className="form-control mb-2" 
                    name="password" 
                    required />
                <button className="btn btn-sm mb-3">Submit</button>
            </form>
            <p>
                Already a user? <Link to='/login'>Login</Link> here.
            </p>
        </div>
    )
}

