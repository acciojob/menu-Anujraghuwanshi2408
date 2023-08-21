import React , {useState} from "react";
import data from "../data"

const Filter = ({set}) => {


    function changefilter(filter){
        if(filter=='all'){
            set(data)
            return
        }
        let x= data.filter(element=>{
            if(element.category==filter){
                return true
            }
            else return false 
        })
        set(x)
        }
    return(
       <div>
            <button onClick={()=>changefilter('all')} id='filter-btn-0'>All</button>
            <button onClick={()=>changefilter('breakfast')} id='filter-btn-1'>Breakfast</button>
            <button onClick={()=>changefilter('lunch')} id='filter-btn-2'>Lunch</button>
            <button onClick={()=>changefilter('shakes')} id='filter-btn-3'>Shakes</button>
       </div>
    ) 
}

export default Filter