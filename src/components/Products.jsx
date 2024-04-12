import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setPorducts] = useState([]) 

    useEffect(()=>{
         axios.get('./public/product.json')
        .then(res=>setPorducts(res.data))

    },[])

    return (
           <div className="max-w-7xl m-auto px-5 pt-16"> 
          <h1 className="text-3xl font-semibold text-red-500 pb-5">Popular Category</h1>
          <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-between">
       {
          products.map((item, i)=> <div key={i} className="p-2 text-center border transition cursor-pointer">
               <figure>
                <img src={item?.img} alt={item.name} />
               </figure>
               <h3 className="font-semibold">{item?.name}</h3>
           </div>)
       }
         </div> 
        </div>
    );
};

export default Products;