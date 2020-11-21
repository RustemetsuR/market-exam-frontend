import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetSingleProductInfo, fetchDeleteProduct } from '../../../store/actions/productActions';
import './SingleProduct.css';

const SingleProduct = props => {
    const dispatch = useDispatch();
    const singleProduct = useSelector(state => state.product.singleProductInfo);
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        dispatch(fetchGetSingleProductInfo(props.match.params.id));
    }, [dispatch]);

    const deleteProduct = () => {
        dispatch(fetchDeleteProduct(user.token, props.match.params.id));
    };

    return (
        <>
            {singleProduct !== null ?
                <div className='full-info'>
                    <div className='product-info info-boxes'>
                        <h2>Product : </h2>
                        <div>
                            <img src={"http://localhost:8000/uploads/" + singleProduct.image} alt={singleProduct.title} />
                            <h3>{singleProduct.title}</h3>
                            <p>{singleProduct.description}</p>
                            <p>Price : {singleProduct.price} KGS</p>
                        </div>
                        {user._id === singleProduct.userID._id ? <button className='delete-product-btn' onClick={() => deleteProduct()}>Delete</button> : null}
                    </div>
                    <div className='author-info info-boxes'>
                        <h2>Author : </h2>
                        <div>
                            <h3>Name: {singleProduct.userID.name}</h3>
                            <p><i>Phone Number : {singleProduct.userID.phoneNumber}</i></p>
                        </div>
                    </div>
                </div> : null}
        </>
    );
};

export default SingleProduct;