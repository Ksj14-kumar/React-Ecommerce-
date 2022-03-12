import { bindActionCreators } from "redux"
import store from "../Store"




export const Fetch_Products = (items) => {
    return {
        type: "GET_PRODUCT",
        payload: items
    }
}



const bindProductCart = bindActionCreators({ Fetch_Products }, store.dispatch)

export default bindProductCart;