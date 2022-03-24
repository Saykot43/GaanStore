import React, { useState } from 'react'
import './Card.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
function componentName(props) {
    const { name, img, bullet, action, price, id } =props.data;
    return (
        <div className='card'>
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="gun-info">
                <h1>{name}</h1>
                <p>Bullet Type : {bullet}</p>
                <p>Capacity : {props.data.capacity}</p>
                <p>Action : {action}</p>
                <div className="add-to-cart">
                    <button><AiOutlineShoppingCart className='icon'/></button>
                    <h1>$ {price}</h1>
                </div>
            </div>
        </div>
    )
}

export default componentName
