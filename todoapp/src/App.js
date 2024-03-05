import React from 'react'
import Todo from './components/todo'

function App() {
  return (
    <div>
    <Todo/>
    
    </div>
  )
}


export default App



// import { FaPlus, FaRegEdit } from "react-icons/fa";
// import { BiTrash } from "react-icons/bi";
// import { useState, useEffect } from "react";

// function App() {
//   const [inputData, setInputData] = useState("");
//   const [items, setItems] = useState([]);
//   const [toggleSubmit, setToggleSubmit] = useState(true);
//   const [isEditItem, setIsEditItem] = useState(null);

//   const deleteItem = (id) => {
//     const updateItems = items.filter((data, ind) => {
//       return ind !== id;
//     });
//     setItems(updateItems);
//   };

//   useEffect(() => {
//     const storedItems = getLocalTimes();
//     if (storedItems) {
//       setItems(storedItems);
//     }
//   }, []);

//   const getLocalTimes = () => {
//     let list = localStorage.getItem("list");
//     if (list) {
//       return JSON.parse(localStorage.getItem("list"));
//     } else {
//       return [];
//     }
//   };

//   const addItem = () => {
//     if (!inputData) {
//       alert('Please fill data');
//     } else if (inputData && !toggleSubmit) {
//       setItems(items.map((ind, index) => {
//         if (index === isEditItem) {
//           return { ...ind, name: inputData };
//         }
//         return ind;
//       }));
//       setToggleSubmit(true);
//       setInputData("");
//       setIsEditItem(null);
//     } else {
//       setItems([...items, { id: items.length, name: inputData }]);
//       setInputData("");
//     }
//   };

//   const removeAll = () => {
//     setItems([]);
//   };
  
//   const editItem = (id) => {
//     let newEditItem = items.find((element) => {
//       return element.id === id;
//     });
//     console.log(newEditItem);
//     setToggleSubmit(false)
//     setInputData(newEditItem.name)
//     setIsEditItem(id)
//   };

//   return (
//     <>
//       <div className="h-full w-full flex justify-center items-center text-center top-0 left-0 absolute text-white">
//         <div>
//           <h1 className="font-bold text-[35px]">
//             Welcome <span className="text-red-800 font-extrabold">To</span> The{" "}
//             <span className="text-red-800 font-extrabold">Todo</span> App
//           </h1>
//           <div className="relative">
//             <input
//               className="text-black w-full p-2  capitalize outline-none rounded h-[40px] mt-[40px]"
//               type="text"
//               placeholder="Add items..."
//               value={inputData}
//               onChange={(e) => setInputData(e.target.value)}
//             />
//             {toggleSubmit ? (
//               <FaPlus
//                 onClick={addItem}
//                 className="absolute top-0 text-[20px] right-0 justify-center m-2 text-red-800 mt-[50px] mr-[10px] cursor-pointer"
//               />
//             ) : (
//               <FaRegEdit
//                 onClick={addItem}
//                 className="absolute top-0 text-[20px] right-0 justify-center m-2 text-[#49f8eaa9] mt-[50px] mr-[10px] cursor-pointer"
//               />
//             )}
//           </div>
//           <div className="relative my-5 ">
//             {items.map((data, ind) => (
//               <div className="relative my-3" key={ind}>
//                 <h2 className="text-white bg-black capitalize border border-white hover:bg-white hover:text-red-800 font-medium rounded text-start w-full p-2 outline-none h-40px mt-20px">
//                   {data.name}
//                 </h2>
//                 <BiTrash
//                   onClick={() => deleteItem(ind)}
//                   className="absolute top-0 right-0 text-[20px] justify-center m-2 text-red-800 mt-[12px] mr-[10px] cursor-pointer group-hover:text-red-800"
//                 />
//                 <FaRegEdit
//                   onClick={() => editItem(ind)}
//                   className="absolute top-0 right-0 text-[20px] justify-center m-2 text-[#49ecf8] mt-[10px] mr-[60px] cursor-pointer group-hover:text-red-800"
//                 />
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={removeAll}
//             className="uppercase  bg-white rounded text-red-800 p-3 mt-6 hover:bg-red-800 hover:text-white font-extrabold"
//           >
//             Remove All
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

