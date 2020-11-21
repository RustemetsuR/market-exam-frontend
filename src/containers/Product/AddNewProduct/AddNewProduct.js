import { push } from 'connected-react-router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddNewProduct, fetchGetCategories } from '../../../store/actions/productActions';
import './AddNewProduct.css';

const AddNewProduct = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const categories = useSelector(state => state.product.categories);

    const [data, setData] = useState({
        title: '',
        description: '',
        image: '',
        price: 1,
        category: '',
    });

    useEffect(() => {
        if (user === []) {
            dispatch(push('/products'));
        }
        dispatch(fetchGetCategories());
    }, [dispatch, categories, data, user]);

    const changeData = event => {
        const value = event.target.value;
        const name = event.target.name;
        const dataCopy = {
            ...data,
            [name]: value,
        };
        setData(dataCopy);
        console.log(data);
    };
    
    const changeImage = event => {
        setData({...data, image: event.target.files[0]});
    };


    const submitFormHandler = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', data.image);
        formData.append('title', data.title);
        formData.append('description', data.description);
        if(data.category === ''){
            data.category = categories[0]._id;
        };
        formData.append('category', data.category);
        formData.append('price', parseInt(data.price));
        dispatch(fetchAddNewProduct(formData, user.token));
    };

    return (
        <div className='addNewProduct-page'>
            <h3>Add New Product</h3>

            <form onSubmit={submitFormHandler} className='addNewProduct-form'>
                <input placeholder='Title' name='title' value={data.title} onChange={changeData} required />
                <input placeholder='Description' name='description' value={data.description} onChange={changeData} required />
                <input placeholder='Price' type='number' min='10' value={data.price} name='price' onChange={changeData} />
                <input type='file' placeholder='Image' name='image' onChange={changeImage} required />
                {categories !== null ? <select value={data.category} name='category' onChange={changeData}>
                    {categories.map(c => {
                        return <option key={c._id} value={c._id}>{c.title}</option>
                    })}
                </select> : null}
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddNewProduct;