import { json } from "express/lib/response";
import React,{Fragment,useEffect,useState} from "react";

const ListToDos=()=>{

//    const getToDos= async()=>{
//        try{

//         const response=await fetch("http://localhost:5000/todos" );

//         const jsonData=await response.json()

//         console.log(jsonData)

//        }catch(err){
//            console.log(err.message)
//        }
//    }

    // useEffect(() =>{

    //     getToDos();
    
    // })


    return <Fragment>

<table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {/**
         * 
         <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
         */}
      
  
    </tbody>
  </table>
    </Fragment>
    
};

export default ListToDos;