import { useContext, useState } from "react";
import { useUserContext } from "../context/userContext";
import { MyThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import "/src/style/signUpPage.css"

function SignUpPage() {
  const [userName, setUserName ] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userType, setUserType] = useState('user')
  const [userPassword, setUserPassword] = useState('')
  const [submitResult, setSubmitResult] = useState('')

  const {currentUser, handleUpdateUser} = useUserContext()
  const {theme, darkMode} = useContext(MyThemeContext)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (userPassword.length < 5) {
      setSubmitResult('Password must be at least 5 chars long')
    } else if (userPassword === userEmail) {
      setSubmitResult('Password can not match user email.')
    } else {
      // want fetch from backend route to post/create new user
      const data = { email: userEmail, password: userPassword, userName: userName, userType: userType };

      let result = await fetch('http://localhost:8085/api/users/signup', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      // setSubmitResult('Successful login')
      // handleUpdateUser(response.data[0])
      navigate('/login')
    }
  }

  if (currentUser.email) return (
    <div className={darkMode ? 'dark' : 'light'}>
      <p>Welcome {currentUser.email}!</p>
      <button onClick={()=> handleUpdateUser({})}>Log Out</button>
    </div>
  )
  return (
    <div className="signUp">
      <form onSubmit={handleSubmit}>
        <div className='formRow'>
          <label>
            User Name:
            <input type="text" value={userName} name="userName"
            onChange={(e) => setUserName(e.target.value)} />
          </label>
          <label>
            User Type:
            <select type="text" value={userType} name="userType"
            onChange={(e) => setUserType(e.target.value)}>
              <option value="user">User</option>
              <option value="producer">Producer</option>
              <option value="director">Director</option>
              <option value="admin">Administrator</option>
            </select>
          </label>
          <label>Email Address:
            {/* Use a controlled form input - value AND onChange */}
            <input type="email" value={userEmail} name='userEmail'
              onChange={(e) => setUserEmail(e.target.value)} />
          </label>
        </div>
        <div className="formRow">
          <label>Password:
            <input type='password' value={userPassword} name='userPassword'
              onChange={(e) => setUserPassword(e.target.value) } />
          </label>
        </div>
        <button >Sign Up</button>
        <p>{submitResult}</p>
      </form>
    </div>
  )
}

export default SignUpPage