import {  useContext } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { ContextData } from "../global/ContextInfo";
const Navbar = () => {
    const { localStorageData} = useContext(ContextData)

     return (
        <nav className="bg-gray-100 py-3 ">
           <div className="max-w-7xl px-5 mx-auto flex justify-between items-center">
                <div className="logo w-3/12">
                    <h1 className="text-3xl">E-<span className="text-red-600 font-bold">BuY</span></h1>
                </div>
                <div className="w-6/12 100 text-center">
                    <input type="text" name="" className="w-full md:w-3/4 text-center py-1 rounded outline-none border-2" placeholder="Search product here" id="" />
                </div>
                <div className="w-3/12">
                    <ul className="flex gap-5 justify-end">
                        <FaUser className="text-2xl "/>
                        <div className="relative pr-2">
                           <FaShoppingCart className={`text-2xl ${localStorageData>0 ? 'text-red-500' : ""}`} />
                           {
                             localStorageData && <span className="absolute -top-3 font-semibold right-0">{localStorageData}</span>
                           }
                        </div> 
                    </ul>
                </div>
           </div>
      </nav>
    );
};

export default Navbar;