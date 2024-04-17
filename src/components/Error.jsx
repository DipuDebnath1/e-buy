import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex gap-3 items-center justify-center flex-col h-[100vh]">
            <h3 className="text-6xl md:text-8xl font-bold text-red-800">404 </h3>
            <p className="text-2xl md:text-3xl font-bold text-red-500">Page Not Found</p>
            <p className="text-xl bg-red-500 text-white py-1 px-5 rounded"><Link to={'/'}>Go Home</Link></p>
        </div>
    );
};

export default Error;