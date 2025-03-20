import "./homeLogin.css";
import { FaPrescriptionBottleMedical, FaArrowRightToBracket } from "react-icons/fa6";
import { useState, useContext } from "react"
import { auth } from "../../utils/firebaseConfig.js"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import  Spinner  from "../../components/spinner/Spinner"
import Button from "../../components/ui/button/Button.jsx";
import { UserContext } from "../../utils/UserAuthContext.jsx"

const HomeLogin = () => {
  const [loading, setLoading] = useState(false)
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [sucess, setSuccess] = useState("")
  const [error, setError] = useState("")
  const { setUser, level, setLevel } = useContext(UserContext)
  
  const isFormValid = userId !== "" && password !== "" && level !== ""
  
  const navigate = useNavigate()
  
const  handleLogin = (e) => {
  setLoading(true)
  signInWithEmailAndPassword(auth, userId, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setUser(user)
    // setSuccess("Login successful")
    setLoading(false)
    setTimeout(() =>{
      return navigate('/homepage/dashboard')
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
                <FaArrowRightToBracket className="login_card_icon" />
              </span>
            </div>

            <p>Sign in with the Login details below</p>

            <p className="login_details">
              {" "}
              Email: testing@easi.dev and password: easi001
            </p>
          </div>

          <div>
            <form action="#" method="get">
              <fieldset>
                <div>
                  <input
                    type="text"
                    name="user_id"
                    placeholder="Email"
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
                  <select
                    name="level"
                    id="options"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option value="" selected>Slect role</option>
                    <option value="Admin Manager">Admin(Manager)</option>
                    <option value="Staff">Staff</option>
                  </select>
                </div>

                <div className="btn">
                  <Button
                    variant="primary"
                    onClick={handleLogin}
                    disabled={!isFormValid}
                  >
                    {loading ? (
                      <Spinner color="#008000" loading={loading} />
                    ) : (
                      "Sign In"
                    )}
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