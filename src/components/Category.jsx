
const Category = () => {
    const electronicsProducts = [
        { category: "Phone", id:  1 },
        { category: "Laptop", id: 2  },
        { category: "Tablet", id: 3},
        { category: "Watch", id: 4},
        { category: "Monitor", id: 5},
        { category: "Key-board", id: 6},
        { category: "Mouse", id: 7},
        { category: "Headphone", id: 8},
        { category: "Spiker", id: 9},
        { category: "Camera", id: 10},
        { category: "Drone", id: 11},
        { category: "Printer", id: 12},
      ];
      

    return (
       <div className="max-w-7xl m-auto px-5 pt-16"> 
          <h1 className="text-3xl font-semibold text-red-500 pb-5">Category</h1>
          <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-between">
       {
           electronicsProducts.map((item, i)=> <div key={i} className="p-2 text-center border-red-300 border-2 rounded-3xl hover:bg-red-500 hover:text-white transition cursor-pointer">
               <h3 className="font-semibold">{item.category}</h3>
           </div>)
       }
         </div> 
        </div>
    );
};

export default Category;