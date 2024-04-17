import { useContext } from "react";
import { AuthContaxt } from "../global/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from "react-router-dom"

const Login = () => {

    const {login} = useContext(AuthContaxt)
    const navigate = useNavigate()

    const handleFrom = (e) =>{
        e.preventDefault()
        const from = e.target
        const password = from.password.value
        const email = from.email.value
        login(email, password)
        .then(res=>{
            if (res.user) {
                 toast.success('🦄 Wow so easy!', {
                 position: "top-right",
                 autoClose: 2000,
                 hideProgressBar: false,
                 closeOnClick: true,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
                 theme: "light",
             });
             navigate('/') 
            }
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
                <h3 className="text-center text-xl font-bold pb-5">Sign In Now</h3>
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
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign In</button>
                        <p>Dont{`'`}t have a account please <Link className="font-semibold" to={'/register'}>Sign Up</Link></p>
                        </div>
                    </form>
                    </div>
        </div>
    );
};

export default Login;