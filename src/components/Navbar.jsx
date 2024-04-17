import {  useContext, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { ContextData } from "../global/ContextInfo";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline, IoMdMenu } from "react-icons/io";
import { AuthContaxt } from "../global/AuthProvider";
 

const Navbar = () => {
    const { localStorageData} = useContext(ContextData)
    const { user, logout} = useContext(AuthContaxt)
    const [showMenu, setShowMenu] = useState(false)
    const [userMenu, setUserMenu] = useState(false)

    const handleLogout = () =>{
      logout()
    }



     return (
        <nav className="bg-gray-100 py-3">
           <div className="max-w-7xl px-5 mx-auto flex justify-between items-center">
                <div className="logo md:w-3/12 flex items-center gap-4">
                  <IoMdMenu onClick={()=> setShowMenu(!showMenu)} className="text-4xl cursor-pointer" />
                    <Link to={'/'}><h1 className="text-3xl">E-<span className="text-red-600 font-bold">BuY</span></h1></Link>
                </div>
                <div className="md:w-6/12 100 text-center">

                <input type="text" name="" className="hidden md:block mx-auto md:w-[20rem] text-center py-1 rounded outline-none border-2" placeholder="Search product here" id="" />

                 
                </div>
                <div className="w-3/12">
                    <ul className="flex gap-5 justify-end">
                        <div className="relative pr-2">
                          <Link to={'/cart'}>
                            <FaShoppingCart className={`text-2xl`} />
                          </Link>                          
                          
                           {
                             localStorageData?.length > 0 && <strong className={`absolute -top-3 font-semibold right-0 ${localStorageData.length > 0 ? 'text-red-500' : '' }`}>{localStorageData?.length  }</strong>
                           }
                        </div>
                        { user && <FaUser onClick={()=>setUserMenu(!userMenu)} className="text-2xl "/>}
                          {user && userMenu && <div className="bg-white shadow border p-2 absolute top-16">
                              <h3 className="border-b ">{user?.email}</h3>
                              <p><button onClick={handleLogout} className="cursor-pointer block w-full">Logout</button></p>
                           </div>} 
                           {!user && <div>
                              <Link to={'/login'} className="font-semibold">SignIn</Link>
                            </div>}
                    </ul>
                </div>
           </div>

            <div className={`absolute top-0 bg-gray-200 p-5 w-full md:w-[20rem] h-[100vh]  ${showMenu ? 'block' : 'hidden'}`}>
              <div className=" pb-3 border-b-red-600 border-2 flex items-center justify-between"><Link to={'/'}><h1 className="text-3xl">E-<span className="text-red-600 font-bold">BuY</span></h1></Link>
              <IoIosCloseCircleOutline onClick={()=> setShowMenu(!showMenu)}  className="text-3xl cursor-pointer" />
              </div>
            <ul className="flex flex-col  pt-3">
            <Link to={'/'}><li onClick={()=> setShowMenu(!showMenu)} className="py-1 px-2 font-semibold hover:border-l-red-500 transition bg-red-200 border-2">Home</li></Link>
            <Link to={'/shop'}><li onClick={()=> setShowMenu(!showMenu)} className="py-1 px-2 font-semibold hover:border-l-red-500 transition bg-red-200 border-2">Shop</li></Link>
            <Link to={'/cart'}><li onClick={()=> setShowMenu(!showMenu)} className="py-1 px-2 font-semibold hover:border-l-red-500 transition bg-red-200 border-2">My Cart</li></Link>
            <Link to={'/contact'}><li onClick={()=> setShowMenu(!showMenu)} className="py-1 px-2 font-semibold hover:border-l-red-500 transition bg-red-200 border-2">Contact</li></Link>
            <Link to={'/pages'}><li onClick={()=> setShowMenu(!showMenu)} className="py-1 px-2 font-semibold hover:border-l-red-500 transition bg-red-200 border-2">Pages</li></Link>
           
            </ul>
            </div>
      </nav>
    );
};

export default Navbar;