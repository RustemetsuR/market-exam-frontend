import { GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_FAILURE, 
    GET_SINGLE_PRODUCT_INFO_SUCCESS, 
    GET_SINGLE_PRODUCT_INFO_FAILURE, 
    GET_CATEGORIES_SUCCESS, 
    GET_CATEGORIES_FAILURE, 
    ADD_PRODUCT_SUCCESS, 
    ADD_PRODUCT_FAILURE, 
    DELETE_PRODUCT_SUCCESS, 
    DELETE_PRODUCT_FAILURE, 
    CHANGE_CATEGORY_TITLE} from "../actionTypes";

const initialState = {
    products: null,
    singleProductInfo: null,
    error: null,
    categories: null,
    categoryTitle: 'All Items',
};


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.value, error: null };
        case GET_PRODUCTS_FAILURE:
            return { ...state, error: action.error };
        case GET_SINGLE_PRODUCT_INFO_SUCCESS:
            return { ...state, singleProductInfo: action.value, error: null };
        case GET_SINGLE_PRODUCT_INFO_FAILURE:
            return { ...state, error: action.error };
        case GET_CATEGORIES_SUCCESS:
            return { ...state, categories: action.value, error: null };
        case GET_CATEGORIES_FAILURE:
            return { ...state, error: action.error };
        case ADD_PRODUCT_SUCCESS:
            return {...state, error: null};
        case ADD_PRODUCT_FAILURE:
            return {...state, error: action.error};
        case DELETE_PRODUCT_SUCCESS:
            return {...state, error: null};
        case DELETE_PRODUCT_FAILURE:
            return {...state, error: action.error};
        case CHANGE_CATEGORY_TITLE:
            return {...state, categoryTitle: action.value};
        default:
            return state;
    };
};

export default productReducer;