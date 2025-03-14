import "./homeLogin.css";
import { BiHealth } from "react-icons/bi";
import { GiHealthNormal } from "react-icons/gi";

const HomeLogin = () => {
  return (
    <section className="login_container">
      <div className="login_hero">
        <h2>EasiPharma</h2>
        <div className="login_icon">
          <BiHealth className="healthicon" />
        </div>
        <GiHealthNormal />
      </div>
      <div className="login_wrapper">
        <div className="login_card">
          <div>
            <div className="icon">
              <BiHealth className="iconic" />
              <GiHealthNormal />
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
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="Pword"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="drop_down">
                  <label htmlFor="options"> Level:</label>
                  <select name="level" id="options">
                    <option value="option1">Admin: Manager</option>
                    <option value="option2">Store Keeper</option>

                    <option value="option3">Staff</option>
                  </select>
                </div>

                <div className="btn">
                  <button type="submit"> Sign In</button>
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