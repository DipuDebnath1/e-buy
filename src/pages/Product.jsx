import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { setLocalStoreData } from '../global/script';
import { ContextData } from '../global/ContextInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Product = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const {setCount, count, productsData} = useContext(ContextData)

    useEffect(()=>{
        if (productsData.length<1) {
            navigate('/')
        }
       setData(productsData.find(item=>item.id==id))
    },[productsData])

   const handleAddToCart = (item)=>{
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
            <div className="p-2 mt-[5rem] text-center border md:3/4 lg:w-1/2 mx-auto transition cursor-pointer relative group">
        
              <figure className="p-2 ">
                <img className="h-40 w-auto mx-auto" src={data?.img} alt={data?.name} />
               </figure>
               <h3 className="font-semibold text-2xl">{data?.name}</h3>
               <div className='text-start p-5'>
                    <h3 className='text-lg font-semibold'>{data?.category} Details :</h3>
                    <p>{data?.des}</p>

                    { !data?.discount && <p>Price : <strong>$ { data?.price}</strong></p>}
                    { data?.discount > 0 && <p>Price : <strong>$ { data?.price}</strong> <small><del>{data?.discount + data?.price}</del></small></p>}

                    { data?.color && <p>Color : <strong>{data?.color.map((item, i)=><span className='px-2' key={i} >{item}</span>)}</strong></p>}

                    { data?.storage && <p>Storage : <strong> {data?.storage}</strong></p>}
                    { data?.memory && <p>Memory : <strong> {data?.memory}</strong></p>}


                    { data?.processor && <p>Processor : <strong> {data?.processor}</strong></p>}
                        
                    { data?.display && <p>Display : <strong> {data?.display}</strong></p>}
                    
                    { data?.screen_size && <p>Screen Size : <strong> {data?.screen_size}</strong></p>}

                    { data?.size && <p>Size : <strong>{data?.size.map((item, i)=><span className='px-2' key={i} >{item}</span>)}</strong></p>}

 
                    { data?.inputs && <p>Inputs : <strong>{data?.inputs.map((item, i)=><span className='px-2' key={i} >{item}</span>)}</strong></p>}

 
                    { data?.features && <p>Features : <strong> {data?.features}</strong></p>}

                    { data?.resolution && <p>Resolution : <strong> {data?.resolution}</strong></p>}

                    { data?.connectivity && <p>Cnnectivity : <strong> {data?.connectivity}</strong></p>}
                        
                    { data?.refresh_rate && <p>Refresh Rate : <strong> {data?.refresh_rate}</strong></p>}

                    { data?.backlighting && <p>Backlighting : <strong> {data?.backlighting && 'Okay'}</strong></p>}

                    { data?.scroll_wheel && <p>Scroll Wheel : <strong> {data?.scroll_wheel}</strong></p>}

                    { data?.dpi && <p>DPI : <strong> {data?.dpi}</strong></p>}
                        
                    { data?.rgb && <p>RGB : <strong> {data?.rgb && 'OKAY'}</strong></p>}
                        
                    { data?.type && <p>Type : <strong> {data?.type}</strong></p>}
                        
                    { data?.waterproof && <p>Waterproof : <strong> {data?.waterproof && 'Okay'}</strong></p>}

                    { data?.noise_cancellation && <p>Noise Cancellation : <strong> {data?.noise_cancellation && "Okay"}</strong></p>}
                        
                    { data?.sensor_size && <p>Sensor Size : <strong> {data?.sensor_size}</strong></p>}
                        
                    { data?.resolution && <p>Resolution Size : <strong> {data?.resolution}</strong></p>}
                        
                    { data?.video_resolution && <p>Video Resolution Size : <strong> {data?.video_resolution}</strong></p>}
                        
                    { data?.camera_resolution && <p>Camera Resolution : <strong> {data?.camera_resolution}</strong></p>}
                        
                    { data?.max_flight_time && <p>Max Flight Time : <strong> {data?.max_flight_time}</strong></p>}
                        
                    { data?.max_speed && <p>Max Speed : <strong> {data?.max_speed}</strong></p>}
                        
                    { data?.print_technology && <p>Print Technology : <strong> {data?.print_technology}</strong></p>}
                        
                    { data?.print_speed && <p>Print Speed : <strong> {data?.print_speed}</strong></p>}
                                                
                    { data?.rating && <p>Rating : <strong> {data?.rating*2}/10</strong></p>}

                    <button onClick={()=>handleAddToCart(data)} className='text-lg bg-red-500 text-white text-center rounded px-5 py-2 mt-5'>Add To Cart</button>

               </div>
            </div>
        </div>
    );
};

export default Product;