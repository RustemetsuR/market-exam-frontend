import React from 'react';
import './Layout.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/actions/userActions';
import { changeCategoryTitle, fetchGetProducts } from '../../store/actions/productActions';


const Layout = props => {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const changeCategory = (id,title) =>{
        dispatch(changeCategoryTitle(title));
        dispatch(fetchGetProducts(id))
    };

    const logout = (id,title) =>{
        changeCategory(id,title);
        dispatch(logoutUser());
    };


    return (
        <>
            <header className='main-header'>
                <div className='header-content'>
                    <NavLink to='/products' onClick={() => changeCategory('', 'All Items')}>
                        <div className='logo-box'>
                            <h2 className='logo-title'>Market</h2>
                        </div>
                    </NavLink>
                    <div className='users-menu'>
                        {user === null ?
                            <>
                                <NavLink to='/user/register'>Sign Up</NavLink>
                                <NavLink to='/user/login'>Sign In</NavLink>
                            </> :
                            <>
                                <h4>Hello , {user.name}!</h4>
                                <NavLink to='/addNewProduct/'>Add New Product</NavLink>
                                <NavLink to='/products' onClick={() => logout('', 'All Items')}>Log Out</NavLink>
                            </>}

                    </div>
                </div>



            </header>
            {props.children}
        </>
    );
};

export default withRouter(Layout);