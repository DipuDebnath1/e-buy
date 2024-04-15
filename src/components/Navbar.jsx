import {  useContext } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { ContextData } from "../global/ContextInfo";
import { Link } from "react-router-dom";
const Navbar = () => {
    const { localStorageData} = useContext(ContextData)

     return (
        <nav className="bg-gray-100 py-3 ">
           <div className="max-w-7xl px-5 mx-auto flex justify-between items-center">
                <div className="logo w-3/12">
                    <Link to={'/'}><h1 className="text-3xl">E-<span className="text-red-600 font-bold">BuY</span></h1></Link>
                </div>
                <div className="w-6/12 100 text-center">
                    <input type="text" name="" className="w-full md:w-3/4 text-center py-1 rounded outline-none border-2" placeholder="Search product here" id="" />
                </div>
                <div className="w-3/12">
                    <ul className="flex gap-5 justify-end">
                        <FaUser className="text-2xl "/>
                        <div className="relative pr-2">
                          <Link to={'/cart'}>
                            <FaShoppingCart className={`text-2xl`} />
                          </Link>
                          {/* ${localStorageData.length>0 ? 'text-red-500' : ""} */}
                          
                          
                           {
                             localStorageData && <strong className={`absolute -top-3 font-semibold right-0 ${localStorageData.length > 0 ? 'text-red-500' : '' }`}>{localStorageData.length}</strong>
                           }
                        </div> 
                    </ul>
                </div>
           </div>
      </nav>
    );
};

export default Navbar;