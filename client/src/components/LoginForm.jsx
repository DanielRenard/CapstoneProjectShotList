import { useContext, useState } from "react";
import { useUserContext } from "../context/userContext";
import { MyThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import "/src/style/login.css"

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  const { currentUser, handleUpdateUser } = useUserContext();
  const { theme, darkMode } = useContext(MyThemeContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // console.log("button clicked");

    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password can not match user email.");
    } else {
      // successful password
      const data = { email: userEmail, password: userPassword };
      // connect to our api using fetch
      let result = await fetch(`http://localhost:8085/api/users/login`, {
        method: "POST", // Specify the HTTP method
        body: JSON.stringify(data),// body is all the data, and changed the language to JSON
        headers: { "Content-Type": "application/json" },
      }) // keys to tell our server what language we're speaking: application/json
        .then((response) => response.json()) //convert back from json
        .then((response) => {
          // if user not found what do we want our code to do? allow another login? setSubmitResult("user not Found")?
          if (response.result === 404) {
            navigate("/signup")
            // setSubmitResult("Email doesn't exist");
          } else if (response.result === 200) {
            setSubmitResult("Successful login");
            let cUser = response.data[0]
            handleUpdateUser(cUser)
            if (cUser.userType == 'user' ) navigate("/shotList")
           else navigate("/profile");
          } else if (response.result === 400) {
            setSubmitResult("Password not correct");
          }
          // console.log("post response", data.result);
          // return data.result;
        });
    }
  };

  if (currentUser.email)
    return (
      <div className="logIn">
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </div>
    );
  return (
    <div className="logIn">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            {/* Use a controlled form input - value AND onChange */}
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="userPassword"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>
        <button>Log In</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}

export default LoginForm;