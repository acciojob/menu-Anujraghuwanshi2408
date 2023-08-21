import React, { useState } from "react";
import SectionData from "./data/SectionData";
const App = () => {

  const [data , setData] = useState(SectionData)
console.log(data)
      function filterItems(e){
        let filter = e.target.innerText.toLowerCase();
        if(filter === "all"){
          setData(SectionData)
        }
        else{
          let filterArray = SectionData.filter(element => {
             if(element.category === filter){
              return element
             }
          })
          setData(filterArray)
        }
      }
  return (
    <div id="main">
      <h1>Our Menu</h1>
      <div className="btn">
        <button onClick={filterItems}>All</button>
        <div  id="filter-btn-1">
        <button onClick={filterItems} data-test-id="menu-item-breakfast">Breakfast</button>
        </div>
        <div  id="filter-btn-2">
        <button onClick={filterItems}  data-test-id="menu-item-lunch">Lunch</button>
        </div>
        <div  id="filter-btn-3">
        <button onClick={filterItems}  data-test-id="menu-item-shakes">Shakes</button>
        </div>
        
        
      </div>
      <div className="items">
        {data.map((element) => (
          <div className="item">
            <div className="img">
              <img src="element.img"></img>
            </div>
            <div className="item-desc">
              <div className="dishes">
                <h2>{element.title}</h2>
                <p>{element.price}</p>
              </div>
              <div className="desc">{element.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
