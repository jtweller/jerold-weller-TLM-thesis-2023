import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='wrapper'>
            <h1 className="title">Welcome to On-Serve!</h1>
            <br />
            <p className="subTitle">Your appliance warranty service center!</p>
            <Link className="mx-auto btnWrap" to='/register'>
                <button className="btn btn-outline-dark">Register</button>
            </Link>
            <Link className="mx-auto btnWrap" to='/login'>
                <button className="btn btn-outline-dark">Login</button>
            </Link>
        </div>
    )
}
export default Home
