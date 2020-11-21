import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProductsListItems.css';
const ProductsListItems = props => {
    return (
        <div className='product-list-item-box'>
            <img className='product-image' src={"http://localhost:8000/uploads/" + props.image} alt={props.title}/>
            <h3 className='product-title'>{props.title}</h3>
            <p className='product-price'>Price : {props.price} KGS</p>
            <NavLink to={'/products/' + props.path}>More Info</NavLink>
        </div>
    );
};

export default ProductsListItems;