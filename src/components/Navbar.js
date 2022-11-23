import {Link,Outlet} from 'react-router-dom'
import '../styles/App.css'

const Navbar = () => {

    return (
    <div className="navbar">
        <Link className="brick"to="/">Home</Link>
        <Link className="brick"to="/timer">Timer</Link>
        <Link className="brick"to="/registration">Registration</Link>
        <Outlet />
    </div>
      );
}
 
export default Navbar;
