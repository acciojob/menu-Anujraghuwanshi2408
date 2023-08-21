import React , {useState} from "react";
import image from "../images/image1.jpg"


const Menu= ({data})=>{
    
    return (
        <div className='itemcontainer'>
            {   data.map(element=>{
                // let Image1 = require(`../images/image${element.id}.jpg`)
                    return (
                        <div className='item' data-test-id={'menu-item-'+element.category}>
                            <div className='left'>
                                {/* <img src={image} className='images'></img> */}
                                <img src={require(`../images/image${element.id}.jpg`)} className='images'></img>
                            </div>
                            <div className='right'>
                                <div className='top'>
                                    <div className='title'>{element.title}</div>
                                    <div className='price'>{element.price}</div>
                                </div>
                                <div className='bottom'>{element.desc}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
    }
     
    export default Menu
     

