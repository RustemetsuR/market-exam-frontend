import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsListItems from '../../../components/ListItems/ProductsListItems/ProductsListItems';
import { fetchGetProducts } from '../../../store/actions/productActions';
import Categories from '../Categories/Categories';
import './Products.css';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const categoryTitle = useSelector(state => state.product.categoryTitle);

    useEffect(() => {
        dispatch(fetchGetProducts(''));
    }, [dispatch]);

    return (
        <div className='products-main-page'>
            <div className='categories-list-box'>
                <Categories />
            </div>
            <div>
                <h2>{categoryTitle}</h2>
                <div className='products-list-box'>
                    {products !== null ? products.map(p => {
                        return <ProductsListItems
                            key={p._id}
                            image={p.image}
                            title={p.title}
                            price={p.price}
                            path={p._id} />
                    }) : null}
                </div>
            </div>


        </div>
    );
};

export default Products;