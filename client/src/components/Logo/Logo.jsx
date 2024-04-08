import { Link } from 'react-router-dom'
import logo from './Logo.png'

const Logo = () => (
    <Link to="/" className="navbar-brand">
     <img className="navLogo" src={logo} alt="Logo" />
    </Link>
)

export default Logo