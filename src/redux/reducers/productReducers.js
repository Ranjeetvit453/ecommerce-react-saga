
import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_ERROR, PRODUCT_LIST_REQUEST } from "../type/productType"
const initialState = {
    status: "",
    data: [],
    error: "",
    loader: false,
    message: "",
}

const productReducers = (state = initialState, action) => {

    switch (action.type) {

        case ADD_PRODUCT_REQUEST:
            return {
                ...state,
                loader: true,
                error: "",
                status: "",
                message: ""
            }
        case ADD_PRODUCT_SUCCESS:
            console.log("products -------reducer", action.productData.status)
            console.log("products -------reducer 0--- data", action.productData.data)
            return {
                ...state,
                data: [...state.data, ...action.productData?.data],
                error: "",
                loader: false,
                status: action.productData.status,
                message: action.productData?.message,
            }
        case PRODUCT_LIST_SUCCESS:
            // console.log("products -------reducer", action.productData)
            return {
                ...state,
                data: action?.productData?.data,
                loader: false

            }
        case PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loader: true,
                error: "",
                status: ""
            }

        case PRODUCT_LIST_ERROR:
            return {
                ...state,
                loader: true,
                error: action.productData
            }

        default:
            return { ...state }
    }

}

export default productReducers;