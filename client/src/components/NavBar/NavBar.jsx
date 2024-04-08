import Logo from '../Logo'
import Links from '../Links'
import MoreInfo from './MoreInfo'
import { OverlayTrigger, Button } from 'react-bootstrap'
import './NavBar.css'

const popoverFocus = (
         
    <MoreInfo id="tooltip-trigger-focus"  title="moreInfo">
      <ul>
          <h3>What we provide</h3>
          <p>On-Serve is an App that provides service tracking for appliance warranty technicians.</p>
          <h3><b>Things like . . .</b></h3>
          <li><b>Job Assignment!</b></li>
          <li>Ticket Tracking</li>
          <li>Service Data Management</li>
      </ul>

    </MoreInfo >
)

const NavBar = ({isLoggedIn}) => (
    <div className='container'>
        <div className='navbar navbar-expand-lg bg-transperant'>
            <Logo />
            <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>
            <div className="moreInfo">
            <Button className="btn-sm bg-transparent btn-outline-light">More Info</Button>
            </div>
            </OverlayTrigger>
            <Links isLoggedIn={isLoggedIn} />
        </div>
    </div>
)

export default NavBar