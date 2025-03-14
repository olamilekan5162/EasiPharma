import "./homeLogin.css";
import { FaPrescriptionBottleMedical, FaArrowRightToBracket } from "react-icons/fa6";
import { useState } from "react"
import { auth } from "../../utils/firebaseConfig.js"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import  Spinner  from "../../components/spinner/Spinner"
import Button from "../../components/UI/button/Button.jsx";

const HomeLogin = () => {
  const [loading, setLoading] = useState(false)
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [level, setLevel] = useState("")
  const [sucess, setSuccess] = useState("")
  const [error, setError] = useState("")
  
  const isFormValid = userId !== "" && password !== "" && level !== ""
  
const  handleLogin = (e) => {
  setLoading(true)
  signInWithEmailAndPassword(auth, userId, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    // setSuccess("Login successful")
    setLoading(false)
    setTimeout(() =>{
      // return navigate('/homepage')
    }, 2000)
  })
  .catch((error) => {
      const errorCode = error.code;
      setLoading(false)
      console.log(errorCode)
      // setError(`Login attempt failed, ${errorCode}`)
    });
}
  return (
    <section className="login_container">
      <div className="login_hero">
        <h2>EasiPharma</h2>
        <FaPrescriptionBottleMedical className="login_icon" />
      </div>
      <div className="login_wrapper">
        <div className="login_card">
          <div>
            <div className="icon">
              <span>
                <FaArrowRightToBracket className="login_card_icon"/>
              </span>
            </div>

            <p>Sign in with your User ID and password</p>
          </div>

          <div>
            <form action="#" method="get">
              <fieldset>
                <div>
                  <input
                    type="text"
                    name="user_id"
                    placeholder="User ID"
                    required
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="Pword"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="drop_down">
                  <label htmlFor="options"> Level:</label>
                  <select name="level" id="options" value={level} onChange = {(e) => setLevel(e.target.value)}>
                    <option value="manager">Admin Manager</option>
                    <option value="keeper">Store Keeper</option>

                    <option value="staff">Staff</option>
                  </select>
                </div>

              <div className="btn">
                <Button variant="primary" onClick={handleLogin} disabled={!isFormValid}>{loading ? <Spinner loading={loading}/> : "Sign In"}
                </Button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeLogin;