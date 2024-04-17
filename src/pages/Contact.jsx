import { BiWorld } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <div >
                <h3 className="bg-red-500 text-3xl font-semibold text-white text-center py-6">CONTACT US</h3>
            </div>
            <div className="max-w-7xl mx-auto px-5 mt-[5rem] ">
             <div className=" flex flex-col md:flex-row border-2 p-5 gap-8">
             <div className="md:w-1/2">
                    <form action="#"> 
                        <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input className="border outline-none focus:shadow p-2 m-1 text-black " type="text" name="name" placeholder="enter name here..." id="name"  />
                        <label htmlFor="email">Email</label>
                        <input className="border outline-none focus:shadow p-2 m-1 text-black " type="text" name="email" placeholder="enter email here..." id="email"  />
                        <label htmlFor="message">Message</label>
                        <textarea className="border outline-none focus:shadow p-2 m-1 text-black " type="text" name="message" placeholder="enter message here..." id="message"  />
                        <p className="text-end"><button className="text-lg font-semibold py-1 px-5 bg-red-500 hover:bg-red-600 rounded text-white">Submit</button></p>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2 bg-red-200 p-5 flex flex-col gap-3">
                    <p className="flex items-center gap-2 font-semibold text-lg"><FaLocationDot className="text-2xl" /> <span> House-2, Road-3, Block-E, Sector-11, Mirpur Dhaka </span></p>

                    <p className="flex items-center gap-2 font-semibold text-lg"><MdEmail className="text-2xl" /> <span> abc@hotmail.com </span></p>
                    <p className="flex items-center gap-2 font-semibold text-lg"><MdPhone className="text-2xl" /> <span> +88015305040 </span></p>
                    <p className="flex items-center gap-2 font-semibold text-lg"><BiWorld className="text-2xl" /> <span className="underline"> https//:www.abc.com</span></p>
                </div>
             </div>
            </div>
            
        </div>
    );
};

export default Contact;