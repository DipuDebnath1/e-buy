import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setLocalStoreData } from "../global/script";
import { ContextData } from "../global/ContextInfo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    const [products, setProducts] = useState([]) 
    const {setCount, count, setProductsData} = useContext(ContextData)


    useEffect(()=>{
        const allCategory = []
         axios.get('product.json')
        .then(res=>{
            setProductsData(res.data)
              const updateProducts =  res.data.filter(element => {
                const isAxist = allCategory.includes(element.category)

                if(!isAxist) {
                    allCategory.push(element.category)
                     return true
                }
                return false
            } )
            setProducts(updateProducts);
        })
    },[])



    const handleAddToCart = (item) =>{
        const product = {...item,quantity:1}
        const result = setLocalStoreData(product)
        if(result){
            toast.success(`🦄 Product added to cart`, {
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
        else{
            toast.error(`🦄 Product already added `, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                     }); 
        }        setCount(count+1)
    }

    return (
           <div className="max-w-7xl m-auto px-5 mt-[5rem]"> 
           <ToastContainer />
         <div className="flex justify-between items-center">
            <h3 className="text-3xl font-semibold text-red-500 pb-5">Popular Products</h3>
                <Link to={'/shop'}><p className="py-1 px-2 bg-red-500 hover:bg-red-600 transition text-white rounded cursor-pointer">See all Products</p></Link>
         </div>
          <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-12 justify-between">
       {
          products && products.map((item, i)=> <div key={i} className="p-2 text-center border transition cursor-pointer relative group">
            <span className="absolute left-2 top-2 text-white bg-red-500 px-2 rounded">${item?.price} <small><del>{item.discount>0 && item.discount+item?.price}</del></small> </span>
               <p className="absolute top-2 right-2 hidden group-hover:block transition"><FaShoppingCart className="text-xl text-red-500 " onClick={()=>handleAddToCart(item)} /> </p>
              <Link to={`/shop/${item?.id}`}>
              <figure className="p-2">
                <img className="h-28 w-auto mx-auto" src={item?.img} alt={item.name} />
               </figure>
               <h3 className="font-semibold">{item?.name}</h3></Link>
            </div>)
       }
         </div>
        </div>
    );
};

export default Products;