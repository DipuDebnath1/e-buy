import { Link } from "react-router-dom";

const Brands = () => {
    const allBrands = [
        'https://i.ibb.co/J2y6LhS/images.jpg', 
        'https://i.ibb.co/VjNQHpK/download.png', 
        'https://i.ibb.co/WgTsH3f/images.png', 
        'https://i.ibb.co/BVCBFvw/download.png', 
        'https://i.ibb.co/p3vrYFg/download.jpg', 
        'https://i.ibb.co/8DHcxpS/download.png', 
        'https://i.ibb.co/4ZyqDZj/download.png']


    return (
        
        <div className="mt-[5rem] px-5 max-w-7xl mx-auto">
              <h3 className="text-3xl font-semibold text-red-500 pb-5">Our Brands</h3>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-10">
            {
                allBrands.map((item, i)=><div key={i}>
                 <Link to={'/'}>
                 <figure>
                        <img src={item} alt="title" />
                    </figure>
                 </Link>
                </div>)
            }
        </div>
        </div>
    );
};

export default Brands;