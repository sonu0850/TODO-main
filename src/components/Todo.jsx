import React, { useEffect, useState } from 'react'
import todo from "../assets/requirement.png"
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


// get data from local storage
const getData = ()=>{
    let Data = localStorage.getItem("item")
//    console.log("ddd", Data);
if (Data) {
   return  JSON.parse(localStorage.getItem("item"))
} else {
    
}
}


const Todo = () => {
    const [InputData, setInputData] = useState(""); 
    const [myData, setmyData] = useState(getData());
    console.log("my data", myData);
   
    // add data to local storage
   
    useEffect(() => {
       localStorage.setItem("item", JSON.stringify(myData))
    }, [myData]);

    
    
    const addTitle=()=>{
        if (!InputData) {
            
        } else {
            setmyData([...myData, InputData])
        setInputData("")
            
        }

    }
    const itemDelete = (id) => {
        console.log(id);
        const updateData = myData.filter((item, ind) => ind !== id);
        setmyData(updateData);
    }
    const RemoveAll =()=>{
        setmyData([])
    }
    
//     const itemDelete =(id)=>{
        
//  const updateData = myData.filter((item, ind)=>{
//     return (ind !== id)
//     setmyData(updateData)
//  })
//     }
    
  return (
    <>
    <div className="maindiv  grid place-content-center m-[100px] text-center">
        <div className="childdiv">
            <figure>
                <img src={todo} alt="" width={100} className='ms-10'/>
            </figure>
          
            <h5 className=' mt-3 font-serif text-lg'>Add Your Task</h5>
        </div>
        <form >
            <input value={InputData} onChange={(e)=>setInputData(e.target.value)} className='border-2 relative border-black rounded-md px-6' type="text" placeholder='✍ Add Item' />
         <br />   <FaPlus  className='absolute'  style={{marginTop: "-20px", marginLeft:"210px"}} onClick={addTitle}/>
         
        </form>
        <div className="shwoitem">
            <div className="eachitem">
               {
                myData.map((item,id)=>{
                    return  <h3 key={id}>{item} <MdDeleteOutline onClick={()=>itemDelete(id)} style={{marginTop:"-21px", marginLeft:"180px", position:"absolute"}}/></h3>
                })
               }
                
            </div>
            <button className='bg-red-800 p-1 px-4 mt-4 rounded-lg' onClick={RemoveAll}>Remove All</button>
        </div>
        
    </div>
      
    </>
  )
}

export default Todo
