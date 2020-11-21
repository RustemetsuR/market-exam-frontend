import React from 'react';
import './CategoryListItems.css';

const CategoryListItems = props => {
    return (
        <div className='category-item-list-box' onClick={props.clicked}>
            <h3 className='category-title'>{props.title}</h3>
        </div>
    );
};

export default CategoryListItems;