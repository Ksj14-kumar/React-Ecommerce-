import { bindActionCreators } from "redux"
import store from '../Store';


export const AddCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    }
}

export const EmptyCart = () => {
    return {
        type: "EMPTY_CART"
    }
}

export const RemoveFromCart = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        id: id
    }
}


export const CountCart = () => {
    return {
        type: "COUNT_CART"
    }
}



export const TotalCart = () => {
    return {
        type: "TOTAL_CART"
    }
}



const bindCartAction = bindActionCreators({
    AddCart, RemoveFromCart,
    EmptyCart, CountCart, TotalCart
}, store.dispatch)

export default bindCartAction;