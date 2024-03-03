import "/src/style/navbar.css";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
const {currentUser, handleUpdateUser} = useUserContext();
console.log(currentUser)
const navigate = useNavigate();

let anonymousLinks = (<><NavLink className="right" to="/signup">Sign Up</NavLink>
<NavLink className="right" to="/login">Login</NavLink></>)

let loggedInLinks = (<>
<button onClick={() => {handleUpdateUser({})
navigate('/login')
}}>Log Out</button></>)

let userLinks = (<>
<NavLink to="/">Home</NavLink>
<NavLink to="/shotlist">Shot List</NavLink></> )

let producerLinks = (<>
<NavLink to="/">Home</NavLink>
<NavLink to="/shotlist">Shot List</NavLink>
<NavLink to="/profile">Profile</NavLink></> )

let directorLinks = (<>
<NavLink to="/">Home</NavLink>
<NavLink to="/shotlist">Shot List</NavLink>
<NavLink to="/profile">Profile</NavLink></>)

let adminLinks = (<>
<NavLink to="/">Home</NavLink>
<NavLink to="/shotlist">Shot List</NavLink>
<NavLink to="/profile">Profile</NavLink></>)

let externalLinks = (<>
<a href="https://outlook.office.com/mail/" target="_blank">
Outlook
</a>
<a href="https://outlook.office.com/calendar/view/month" target="_blank">
Outlook Calendar
</a>
<a href="https://wd5.myworkday.com/nexstar/d/home.htmld" target="_blank">
Workday
</a>
<a
href="http://daybook-klfy.nexstar.tv/index.php?q=daybook"
target="_blank"
>
Daybook
</a></>)

  return (
    <div className="navbar">
      {/* <NavLink to="/">Home</NavLink> */}
      {/* <NavLink to="/shotlist">Shot List</NavLink> */}
      {/* <NavLink className="right" to="/login">Login</NavLink> */}
      {/* <NavLink className="right" to="/signup">Sign Up</NavLink> */}
      {/* <NavLink to="/profile">Profile</NavLink> */}
      
      {(currentUser.userType == 'producer')?producerLinks:""}
      {(currentUser.userType == 'director')?directorLinks:""}
      {(currentUser.userType == 'admin')?adminLinks:""}
      {(currentUser.userType == 'user')?userLinks:""}
      {externalLinks}
      {(currentUser._id)?loggedInLinks:anonymousLinks}
    </div>
  );
}
