import "/src/style/navbar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shotlist">Shot List</NavLink>
      <NavLink className="right" to="/login">Login</NavLink>
      <NavLink to="/profile">Profile</NavLink>
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
      </a>
      <NavLink className="right" to="/signup">Sign Up</NavLink>
    </div>
  );
}
