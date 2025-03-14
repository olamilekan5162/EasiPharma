import "./homeLogin.css";
import { FaPrescriptionBottleMedical, FaArrowRightToBracket } from "react-icons/fa6";
import { useState } from "react"
import { auth } from "../../utils/firebaseConfig.js"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import  Spinner  from "../../components/UI/Spinner"
import Button from "../../components/UI/Button";

const HomeLogin = () => {
  const [loading, setLoading] = useState(false)
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  
  const isFormValid = userId !== "" && password !== ""
  
const  handleLogin = () => {

  setLoading(true)
  setTimeout( () => {
    setLoading(false)
  }, 5000)
}
  return (
    <section className="login_container">
      <div className="login_hero">
        <h2>EasiPharma</h2>
        <FaPrescriptionBottleMedical />
      </div>
      <div className="login_wrapper">
        <div className="login_card">
          <div>
            <div className="icon">
              <FaArrowRightToBracket />
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
                  <select name="level" id="options">
                    <option value="option1">Admin Manager</option>
                    <option value="option2">Store Keeper</option>

                    <option value="option3">Staff</option>
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