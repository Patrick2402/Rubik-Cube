import {Link,Outlet} from 'react-router-dom'

const Homepage = () => {
    return (  
        <>
    <Link className="brick"to="/">Home</Link>
        <Link className="brick"to="/timer">Timer</Link>
        <Link className="brick"to="/registration">Registration</Link>
        <Outlet />
        </>
        );
}
 
export default Homepage;



