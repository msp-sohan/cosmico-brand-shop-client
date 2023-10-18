import { Link } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";
import "./register.css"
const Register = () => {
   const handleRegister = e =>{
      e.preventDefault()
      const form = e.target
      const name= form.name.value
      const photo = form.photo.value
      const email = form.email.value
      const password = form.password.value
      console.log(name, photo, email, password)
   }
   return (
      <div>
         <div className="body">
            <section>
               <form onSubmit={handleRegister}>
                  <h1>Sign Up</h1>
                  <div className="inputbox">
                     <ion-icon name="mail-outline"></ion-icon>
                     <input type="text" name="name" required />
                     <label htmlFor="">Full Name</label>
                  </div>
                  <div className="inputbox">
                     <ion-icon name="mail-outline"></ion-icon>
                     <input type="text" name="photo" required />
                     <label htmlFor="">PhotoURL</label>
                  </div>
                  <div className="inputbox">
                     <ion-icon name="mail-outline"></ion-icon>
                     <input type="email" name="email" required />
                     <label htmlFor="">Email</label>
                  </div>
                  <div className="inputbox">
                     <ion-icon name="lock-closed-outline"></ion-icon>
                     <input type="password" name="password" required />
                     <label htmlFor="">Password</label>
                  </div>
                  <div className="error">
                     <p>FireBase Error</p>
                  </div>
                  <button>Sign Up</button>
               </form>
               <div>
                  <div className="flex text-white justify-center items-center pt-2">
                     <hr />
                     <p>Or</p>
                     <hr />
                  </div>
                  <SocialLogin></SocialLogin>
                  <div className="login">
                     <p>Already have an account <Link to="/login">Login</Link></p>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Register;