import {Link,Outlet} from 'react-router-dom'
import '/Users/patryk/Desktop/projekt/src/styles/App.css'

const Navbar = () => {

    return (
    <div className="navbar">
        <Link className="brick"to="/">Home</Link>
        <Link className="brick"to="/timer">Timer</Link>
        <Outlet />
    </div>
      );
}
 
export default Navbar;