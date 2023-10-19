import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";


const Login = () => {
    const { logInUser } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logInUser(email, password)
            .then(result => {
                console.log(result.user);
             
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero my-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="hero-content flex-col lg:flex-row-reverse w-2/3  ">
        <form onSubmit={handleLogin}>
          <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-300 px-6 py-7">
            <h2 className="lg:text-3xl text-xl py-5 text-center font-bold">Please Login</h2>
            <div>
              
  
              <div className="form-control w-36">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Email</span>
                </label>
                <input 
                  className="form-controls w-40 lg:w-72 md:w-56 rounded-md p-2"
                  type="email" name="email"
                  placeholder=" Type Email" />
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Password</span>
                </label>
                <input 
                  className="form-control w-40 lg:w-72 md:w-56 rounded-md p-2"
                  type="password" name="password"
                  placeholder=" Type Password" />
  
              </div>
              <div className="form-control mt-6">
                <button   className="btn btn-primary w-1/3">Login</button>
                <br />
                <button   className="btn btn-primary w-1/3">Google Login</button>
              </div>
           
            </div>
          </div>
          </form>
        </div>
        
      </div>
    );
};

export default Login;