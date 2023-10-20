import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Hook/AuthProvider";




const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = e => {
  
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
   
    createUser(email, password)
      .then(result => {
        console.log(result.user);

        // new user has been created
        const user = { email };
        fetch('http://localhost:5000/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/.test(password)) {
              Swal.fire({
                title: 'Success!',
                text: 'User Added database',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }

          })
      })

      .catch(error => {
        console.error(error);
      })

  }

  return (
    <div className="hero my-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="hero-content flex-col lg:flex-row-reverse w-2/3  ">
        <form onSubmit={handleRegister}>
          <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-300 px-6 py-7">
            <h2 className="lg:text-3xl text-xl py-5 text-center font-bold">Please Register</h2>
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
                <button className="btn btn-primary w-1/3">Register</button>
              </div>

            </div>
          </div>
         
        </form>
        
      </div>
      
    </div>
  );
};

export default Register;