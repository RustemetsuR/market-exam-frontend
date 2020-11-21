import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryListItems from '../../../components/ListItems/CategoryListItems/CategoryListItems';
import { changeCategoryTitle, fetchGetCategories, fetchGetProducts } from '../../../store/actions/productActions';

const Categories = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.product.categories);

    useEffect(() =>{
        dispatch(fetchGetCategories());
    }, [dispatch]);

    const changeCategory = (id,title) =>{
        dispatch(changeCategoryTitle(title));
        dispatch(fetchGetProducts(id))
    };

    return (
        <div>
            {categories !== null ? 
            <>
            <CategoryListItems title='All Items' clicked={() => changeCategory('', 'All Items')}/>
                {categories.map(c =>{
                    return <CategoryListItems 
                    key={c._id} 
                    title={c.title}
                    clicked={() => changeCategory(c._id, c.title)}/>
                })}
            </>: null}
        </div>
    );
};

export default Categories;