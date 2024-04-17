 import 'react-toastify/dist/ReactToastify.css';
// get data
    export const getLocalStoreData = ()=>{   
        const items =  localStorage.getItem('items')
         return items ? JSON.parse(items) : null
    }
    
    // set data
    export const setLocalStoreData = (item) =>{
        
        const prevData = getLocalStoreData()
        
        if (prevData) {
            const isAxist = prevData.find(data=>data.id==item.id)
                if(isAxist){
                    // return alert('product already added')
                    return false
                   
                }

            const updateData = [...prevData, item]
             localStorage.setItem('items', JSON.stringify(updateData))
            return true
        }
        localStorage.setItem('items', JSON.stringify([item]))
        return true
     
    }

    export const updateLocalStoreData = (item) =>{
        localStorage.setItem('items', JSON.stringify(item))
        return true
     }