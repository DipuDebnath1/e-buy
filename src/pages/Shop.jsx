import { useContext, useEffect, useRef, useState } from "react";
import { setLocalStoreData } from "../global/script";
import { ContextData } from "../global/ContextInfo";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { MdMenuOpen } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
const Shop = () => {
    const priceRange = useRef(3000)
    const [price , setPrice] = useState(3000)
    const [products, setProducts] = useState([]) 
    const [allData, setAllData] = useState([]) 
    const [showMenu, setShowMenu] = useState(false) 
    const {setCount, count} = useContext(ContextData)
    const location = useLocation();
    const state = location?.state?.category;


    const handlePriceRange = () =>{
        setPrice(priceRange.current.value)
        const updateProducts = allData.filter(item=>item.price<=price)
        setProducts(updateProducts)
    }
    const handleFilterProductCategory = (value) =>{
        if(value!=='seeAll'){
            const updateProducts = allData.filter(item=>item.category==value)
           return setProducts(updateProducts)
        }
        setProducts(allData)


    }

    const productsCategory = ['Phone','Laptop','Tablet','Watch','Monitor','Key-board','Mouse','Headphone','Spiker','Camera','Drone','Printer']

    useEffect(()=>{
         axios.get('product.json')
        .then(res=>{
            if (state) {
                const stateProducts = res?.data?.filter(item=>item.category==state)
                setProducts(stateProducts)
            }
            else{
                setProducts(res.data)
            }
            setAllData(res.data)
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
        }
        
                setCount(count+1)
    }
   

    return (
       <div>
        <ToastContainer />
        
            <MdMenuOpen onClick={()=> setShowMenu(!showMenu)} className={`text-3xl block cursor-pointer md:hidden ml-5 mt-2 ${showMenu ? 'hidden' : 'block'}`} />
         <div className="max-w-7xl mx-auto px-5 flex justify-between relative">

            <div className={`md:w-1/4 py-10 px-5 absolute ${showMenu ? 'left-0' : 'left-[-100%]'} z-10 top-0 w-full bg-white md:static max-h-[95vh] overflow-auto shopMenuBox`}>
            <div>
                 <IoIosCloseCircleOutline  onClick={()=> setShowMenu(!showMenu)} className={`text-3xl block absolute right-5 top-3 cursor-pointer  md:hidden ml-5 mt-2 ${!showMenu ? 'hidden' : 'block'}`} />
                <h3 className="text-xl font-semibold ">Price Range :  <small className="font-normal">{price}</small></h3>
                        <input className="w-10/12 " onChange={handlePriceRange} ref={priceRange} type="range" min={'99'} defaultValue={3000} max={'3000'} />
                </div>
               <div>
                        <h3 className="text-3xl font-semibold ">Category</h3>
                        <ul className="flex flex-col gap-2 py-3">
                        <li onClick={()=>handleFilterProductCategory('seeAll')} className="bg-red-100 px-5 py-1 w-10/12 rounded cursor-pointer">See All</li> 

                            {
                                productsCategory.map((category,i)=><li key={i} onClick={()=>handleFilterProductCategory(category)} className="bg-red-100 px-5 py-1 rounded cursor-pointer w-10/12 ">{category}</li>
                            )
                            }
                        </ul>
                </div>
               
            </div>
            <div className="md:w-3/4 py-10 max-h-[95vh] overflow-auto shopProductBox">     
            
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-12 justify-between px-3">
       {
          products.length>0 && products?.map((item, i)=> <div key={i} className="p-2 text-center border transition cursor-pointer relative group">
            <span className="absolute left-2 top-2 text-white bg-red-500 px-2 rounded">${item?.price} <small><del>{item.discount>0 && item.discount+item?.price}</del></small> </span>
               <p className="absolute top-2 right-2 hidden group-hover:block transition"><FaShoppingCart className="text-xl text-red-500 " onClick={()=>handleAddToCart(item)} /> </p>
              <Link to={`/shop/${item?.id}`}>
              <figure className="p-2 ">
                <img className="h-28 w-auto mx-auto" src={item?.img} alt={item.name} />
               </figure>
               <h3 className="font-semibold">{item?.name}</h3></Link>
            </div>)
       }
         </div></div>
        </div>
       </div>
    );
};

export default Shop;