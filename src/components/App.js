import React, { useState } from "react";
import data from "../data";
import Filter from "./Filter";
import Menu from "./Menu";
import "../styles/App.css"
const App = () =>{
  let [items,setitems]=useState(data)
    return (
        <div id='main'>
            <h1>Our Menu</h1>
            <Filter set={setitems} />
            <Menu data={items} />
        </div>
    )
}

export default App;
