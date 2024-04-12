    // get data
    export const getLocalStoreData = ()=>{   
        const items =  localStorage.getItem('items')
         return items ? JSON.parse(items) : null
    }
    
    // set data
    export const setLocalStoreData = (item) =>{
        const prevData = getLocalStoreData()
        if (prevData) {
            const updateData = [...prevData, item]
            console.log(updateData);
            localStorage.setItem('items', JSON.stringify(updateData))
            return
        }
        localStorage.setItem('items', JSON.stringify([item]))
     
    }