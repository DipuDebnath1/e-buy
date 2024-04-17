import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContaxt } from "../global/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
const Register = () => {
    const navigate = useNavigate()
    const {register} = useContext(AuthContaxt)

    const handleFrom = (e) =>{
        e.preventDefault()
        const from = e.target
        const password = from.password.value
        const email = from.email.value
        const userData = {email, password}
        console.log(userData);
        register(email, password)
        .then(res=>{
            if(res.user){
                toast.success('🦄 Account Crated Success ', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                 }); 
            }
            navigate('/')
        })
        .catch(err=>{
            toast.error(`🦄 Account Crated Failed <br> ${err.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
             }); 
        })
             
    }
    return (
        <div>
        <ToastContainer />
            <div className="card shrink-0 w-full max-w-sm mx-auto mt-[5rem] shadow-2xl bg-base-100">
                <h3 className="text-center text-xl font-bold pb-5">Sign Up Now</h3>
              <form onSubmit={handleFrom} className="card-body border">
                  <div className="form-control" >
                  <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                  <label className="label">
                      <p>Have a account please<Link to="/login" className="font-semibold"> Sign In</Link></p>
                  </label>
                  </div>
                  <div className="form-control mt-6">
                  <button className="btn btn-primary text-xl">Sign Up</button>
                  </div>
              </form>
              </div>
            </div>
    );
};

export default Register;