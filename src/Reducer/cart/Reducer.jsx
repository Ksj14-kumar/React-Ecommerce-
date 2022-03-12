




export const CartReducer = (state = { product: [], count: 0, total: 0 }, action = {}) => {



    switch (action.type) {
        case "ADD_TO_CART":

            const product_exit = state.product.find((item) => {
                return item.id === action.payload.id
            })

            const products = product_exit !== undefined ? state.product.map((item) => {
                return item.id === product_exit.id ? {
                    ...item,

                    qty: item.qty + product_exit.qty,

                    total: item.total + item.price * product_exit.qty

                } : item
            }) : [...state.product, action.payload]


            return { ...state, product: products }



        case "EMPTY_CART":
            return {
                ...state,
                product: [],
                count: 0,
                total: 0

            }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                product: state.product.filter((item) => {
                    return item.id !== action.id
                })
            }
        case "COUNT_CART":

            return {
                ...state,
                count: state.product.length
            }
        case "TOTAL_CART":

            return {
                ...state,
                total: state.product.map((item) => {
                    return item.total
                }).reduce((a, b) => a + b, 0)
            }

        case "INCREAMENT_QYT":
            return {
                ...state,
                product: state.product.map((item) => {
                    return item.id === action.id ? {
                        ...item, qty: item.qty + 1,
                        total: (item.qty + 1) * item.price
                    } : item
                })

            }

        case "DECREAMENT_QYT":
            return {
                ...state,
                product: state.product.map((item) => {
                    return item.id === action.id && item.qty > 1 ? {
                        ...item, qty: item.qty - 1,
                        total: (item.qty - 1) * item.price
                    } : item
                })

            }





        default:
            return state
    }
}