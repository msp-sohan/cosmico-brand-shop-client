import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import "./login.css"
const Login = () => {
   return (
      <div>
         <div className="body">
            <section>
               <form>
                  <h1>Login</h1>
                  <div className="inputbox">
                     <ion-icon name="mail-outline"></ion-icon>
                     <input type="email" name="email" required/>
                        <label htmlFor="">Email</label>
                  </div>
                  <div className="inputbox">
                     <ion-icon name="lock-closed-outline"></ion-icon>
                     <input type="password" name="password" required/>
                        <label htmlFor="">Password</label>
                  </div>
                  <div className="forget">
                     <label htmlFor=""><input type="checkbox"/>Remember Me</label>
                     <a href="#">Forget Password</a>
                  </div>
                  <button>Log in</button>
               </form>
               <div>
                  <div className="flex text-white justify-center items-center pt-2">
                     <hr />
                     <p>Or</p>
                     <hr />
                  </div>
                  <SocialLogin></SocialLogin>
                  <div className="register">
                     <p>Do not have a account <Link to="/register">Register</Link></p>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Login;