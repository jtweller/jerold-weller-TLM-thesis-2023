import { useState } from 'react'
import { Link } from 'react-router-dom'
import { handleLogin } from '../../api/index'
import './Forms.css'

export const Login = () => {
    const [user, setUser] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setUser(values => ({ ...values, [name]: value }))
      }

    const login = async (e) => {
        e.preventDefault()
        e.persist()
        await handleLogin(user)
            .then(res => {
                const { token } = res.data
                setUser({
                    email:'',
                    password:''
                })
                window.localStorage.setItem('api_token', token)
                window.location = '/'
            })
            .catch(err=>{
                console.log(err)
                alert('Invalid credentials.')
            })
}
    return (
        <div className='formWrap text-center rounded-2 pb-2 mx-auto'>
            <h1 className='mt-2'>Login</h1>
            <form className="form mx-4" onSubmit={(e)=>login(e)}>
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
                <button className="btn btn-primary mb-3">Submit</button>
            </form>
                <p>
                    Don't have an account? <Link to='/register'>Register</Link> here.
                </p>
        </div>
    )
}
