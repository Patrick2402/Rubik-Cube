import {Link,Outlet} from 'react-router-dom';
import '../styles/homenavbar.css';

const Homenavbar = () => {
    return (  
            <div className="Navbar">
                <Link className="Brick"to="/">Home</Link>
                <Link className="Brick"to="/timer">Timer</Link>
                <Link className="Brick"to="/registration">Registration</Link>
                <Link className="Brick"to="/login">Login</Link>
                <Outlet />
            </div>
    );
}
 
export default Homenavbar;