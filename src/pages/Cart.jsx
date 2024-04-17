import { useContext, useEffect, useState} from "react";
import { ContextData } from "../global/ContextInfo";
import { useRef } from "react";
import { MdDelete } from "react-icons/md";
import { updateLocalStoreData } from "../global/script";
import { AuthContaxt } from "../global/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 const Cart = () => {
    const { localStorageData, setCount, count} = useContext(ContextData)
    const {user} = useContext(AuthContaxt)
    const navigate = useNavigate()

    const [totalPrice, setTotalPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const quponCode = useRef(0)

    // console.log(Math.floor(totalPrice/discount));
    useEffect(()=>{
        const price =  localStorageData?.reduce((accumulator, currentValue)=>(accumulator+(currentValue.price*currentValue.quantity)), 0)
    setTotalPrice(price)
    },[localStorageData])

    const updateProductQuantity = (value, id) =>{
        if (value<1 || value > 10 ) {
           return alert('quantity not valid')
        }
        
        const updateProducts = localStorageData.map(item=>{
            if (item.id==id) {
                item.quantity=value
            }
            return item
        })
        updateLocalStoreData(updateProducts)

         setCount(count+1)
    }

    const  handleDiscount = () =>{
         if (quponCode.current.value==='100year') {
            setDiscount(10)
            return toast.success(`🦄 Hurrah you get 10% Discount`, {
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
        return toast.error(`🦄 please enter valid cupon code`, {
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

    const  handleRemoveProduct = (id)=>{
        const updateProducts = localStorageData.filter(product=>product.id !==id)
        updateLocalStoreData(updateProducts)
        setCount(count+1)
    }

      // Function to handle copying text to clipboard
      const copyTextToClipboard = (value) => {
        navigator.clipboard.writeText(value)
          .then(() => {
            // Alert the user that the text has been copied
            return toast.success(`🦄 cupon code successfully copied`, {
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
          .catch((error) => {
            console.error('Error copying text: ', error);
            // Optionally, you can handle the error here
          });
      };

      const handleCheckout = () =>{
          if (!user) {
            return navigate('/login')        
          }
          return toast.success(`🦄 please wait for Product Order Process system`, {
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



    return (
      <div className="max-w-7xl mx-auto px-5">
        <ToastContainer />
        <h2 className="text-center text-xl py-4 font-semibold">My Shopping Cart</h2>
         {localStorageData.length > 0 && <div className="flex flex-col lg:flex-row gap-5  justify-between">
                <table className="table-auto w-full rounded lg:w-3/4 h-auto text-center border-collapse border">
                   <thead>
                    <tr className="border border-gray-300">
                        <th className="p-2 text-center">Sl.</th>
                        <th className="p-2 text-center">Img</th>
                        <th className="p-2 text-center">Name</th>
                        <th className="p-2 text-center">Quantity</th>
                        <th className="p-2 text-center">Price</th>
                        <th className="p-2 text-center">Remove</th>
                    </tr> 
                   </thead>
                   <tbody>
                    {
                        localStorageData.map((item, i)=><tr className="border border-gray-300 " key={i}>
                             <td>{i+1}.</td>
                             <td><figure><img src={item.img} className="md:h-16 h-12 mx-auto p-2" alt="" /></figure></td>
                             <td><h3 className="text-sm md:text-lg ">{item.name} <small>({item.category})</small></h3></td>
                             <td>
                                <span className="bg-red-400 px-2 text-xl text-white rounded cursor-pointer"  onClick={()=>updateProductQuantity(item.quantity-1, item.id)}>-</span>
                                <span className="text-lg px-2">{item.quantity}</span> 
                                <span className="bg-green-600 px-2 text-xl text-white rounded cursor-pointer" onClick={()=>updateProductQuantity(item.quantity+1, item.id)}>+</span></td>
                             <td>${item.price*item.quantity} <small><del>{item?.discount ? (item?.discount+item.price)*item.quantity :''}</del></small></td>
                             <td>
                             <MdDelete onClick={()=>handleRemoveProduct(item.id)} className="mx-auto text-red-700 text-xl cursor-pointer" /></td>
                          
                        </tr>)
                    }
                   
                   </tbody>
                </table>
               <div className="lg:w-1/4">
               <p className="text-red-600 px-2 py-1">10% Discount Code (<strong className="cursor-pointer" onClick={()=>copyTextToClipboard('100year')}>100year</strong>)</p>
               <div className=" rounded h-auto max-h-[25rem] bg-red-500 p-3 mb-5 ">
                    <h4  className="text-center font-semibold text-lg text-white">Summery </h4>
                    <div className="text-white mt-4">
                        <p className="flex justify-between py-1"><span>Total Product Category:</span> <span>{localStorageData.length}</span></p>
                        
                        <p className="flex justify-between py-1"><span>Total Product Quantity:</span> <span>{localStorageData?.reduce((accumulator, currentValue)=>(accumulator+currentValue.quantity), 0)}</span></p>

                        <p className="flex justify-between py-1"><span>Price:</span> <span> $ {totalPrice}</span></p>

                        <p className="flex justify-between py-1"><span>Discount:</span> <span>{discount}%</span></p>

                        <p className="flex justify-between py-1"><span>Total Price:</span> <span>$ {discount ? Math.ceil(totalPrice - (totalPrice/discount)) : totalPrice}</span></p>

                        <p className="py-1"><input className="w-full rounded p-1 text-center outline-none text-black" placeholder="Enter Cupon " ref={quponCode} type="text" name="cupon" id="" /></p>
                        
                        <p className="py-1"><button className="text-center w-full bg-red-800 py-1 rounded hover:bg-red-900 transition" onClick={handleDiscount}>Apply Now</button></p>

                        <p className="py-1"><button className=" text-center w-full bg-red-800 py-1 rounded disabled:text-gray-600 hover:bg-red-900 transition" onClick={handleCheckout} disabled={false}>Check Out</button></p>
                        
                    </div>
                </div>
               </div>
                 
        </div>}

        {
          !localStorageData.length && <div>
            <h4 className="text-xl font-semibold flex items-center justify-center h-[40vh] ">you No Product Added !!!</h4>
          </div>
        }
      </div>
    );
};

export default Cart;