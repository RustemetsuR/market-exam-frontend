import { push } from "connected-react-router";
import axiosApi from "../../axiosApi";
import { 
    ADD_PRODUCT_FAILURE, 
    ADD_PRODUCT_SUCCESS, 
    CHANGE_CATEGORY_TITLE, 
    DELETE_PRODUCT_FAILURE, 
    DELETE_PRODUCT_SUCCESS, 
    GET_CATEGORIES_FAILURE, 
    GET_CATEGORIES_SUCCESS, 
    GET_PRODUCTS_FAILURE, 
    GET_PRODUCTS_SUCCESS, 
    GET_SINGLE_PRODUCT_INFO_FAILURE, 
    GET_SINGLE_PRODUCT_INFO_SUCCESS } from "../actionTypes";

const getProductsSuccess = value => {
    return { type: GET_PRODUCTS_SUCCESS, value };
};

const getProductsFailure = error => {
    return { type: GET_PRODUCTS_FAILURE, error };
};

const getCategoriesSuccess = value => {
    return { type: GET_CATEGORIES_SUCCESS, value };
};

const getCategoriesFailure = error => {
    return { type: GET_CATEGORIES_FAILURE, error };
};

const getSingleProductInfoSuccess = value => {
    return { type: GET_SINGLE_PRODUCT_INFO_SUCCESS, value };
};

const getSingleProductInfoFailure = error => {
    return { type: GET_SINGLE_PRODUCT_INFO_FAILURE, error };
};

const addNewProductSuccess = () => {
    return { type: ADD_PRODUCT_SUCCESS };
};

const addNewProductFailure = error => {
    return { type: ADD_PRODUCT_FAILURE, error };
};

const deleteProductSuccess = () =>{
    return {type: DELETE_PRODUCT_SUCCESS};
};

const deleteProductFailure = error =>{
    return {type: DELETE_PRODUCT_FAILURE, error};
};

export const changeCategoryTitle = value =>{
    return {type: CHANGE_CATEGORY_TITLE, value};
};

export const fetchGetProducts = category => {
    return async dispatch =>{
        try{
            const response = await axiosApi.get("/products?category=" + category);
            dispatch(getProductsSuccess(response.data));
        }catch(e){
            dispatch(getProductsFailure(e));
        };
    };
};

export const fetchGetCategories = () =>{
    return async dispatch => {
        try{
            const response = await axiosApi.get("/categories");
            dispatch(getCategoriesSuccess(response.data));
        }catch(e){
            dispatch(getCategoriesFailure(e));
        };
    };
};

export const fetchGetSingleProductInfo = id =>{
    return async dispatch =>{
        try{
            const response = await axiosApi.get("/products/" + id);
            dispatch(getSingleProductInfoSuccess(response.data));
        }catch(e){
            dispatch(getSingleProductInfoFailure(e));
        };
    };
};

export const fetchAddNewProduct = (data, token) =>{
    return async dispatch => {
        const headers = {
            'Authorization': token,
        };
        console.log(data, token)
        try{
            await axiosApi.post("/products/", data, {headers});
            dispatch(addNewProductSuccess());
            dispatch(push("/products"));
        }catch(e){
            console.log(e.response.data)
            dispatch(addNewProductFailure(e));
        };
    };
};

export const fetchDeleteProduct = (token, id) =>{
    return async dispatch =>{
        const headers = {
            'Authorization': token,
        };
        try{
            await axiosApi.delete("/products/" + id, {headers});
            dispatch(deleteProductSuccess());
            dispatch(push("/"));
        }catch(e){
            dispatch(deleteProductFailure(e));
        };
    };
};