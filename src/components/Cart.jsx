import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { MdDelete } from 'react-icons/md';
import EmotyCart from './EmotyCart';
import { CountCart, TotalCart } from '../Reducer/cart/Action';
import { AddCart } from '../Reducer/cart/Action';

function Cart() {
    const dispatch = useDispatch()

    const cardAddedItem = useSelector((state) => {
        return state.cartReducer
    })




    const countData = cardAddedItem.product.map((item) => {
        return item.qty
    }).reduce((a, b) => a + b, 0)




    return (
        <div className='table-Data'>
            <h1 style={{ textAlign: "center" }}>Your Items List</h1>


            <div className="_wrap">



                {
                    cardAddedItem.product.length > 0 ? <table className='table'>
                        <thead>
                            <tr>

                                <th>Picture</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Remove Item</th>

                            </tr>
                        </thead>
                        <tbody>



                            {
                                cardAddedItem.product.map((item) => {

                                    return (

                                        <tr key={item.id}>
                                            <td className='image'>
                                                <img src={item.image} alt="" />
                                            </td>



                                            <td style={{ width: "12rem", textAlign: "center" }}>{item.title}</td>


                                            <td style={{ textAlign: "center" }}>{item.price}</td>




                                            <td style={{ textAlign: "center", display: "flex", alignItems: "center", alignContent: "center", marginTop: "2rem" }}>

                                                <button
                                                    onClick={() => {
                                                        dispatch(
                                                            {
                                                                type: "DECREAMENT_QYT",
                                                                id: item.id
                                                            }


                                                        )
                                                        dispatch(CountCart())
                                                        dispatch(TotalCart())

                                                    }}
                                                >-</button>
                                                {/* <input type="number" value={item.qty} name="num" id="" /> */}
                                                <h3 style={{ margin: "0 8px" }}>
                                                    {item.qty}
                                                </h3>
                                                <button
                                                    onClick={() => {


                                                        dispatch(
                                                            {
                                                                type: "INCREAMENT_QYT",
                                                                id: item.id



                                                            }
                                                        )
                                                        dispatch(CountCart())
                                                        dispatch(TotalCart())

                                                    }}

                                                >+</button>

                                            </td>



                                            <td style={{ textAlign: "center" }}>{
                                                Math.round(
                                                    item.total

                                                )
                                            }</td>



                                            <td style={{ textAlign: "center", fontSize: "1.5rem" }}>
                                                <button style={{ background: "none", cursor: "pointer" }}
                                                    onClick={() => {

                                                        dispatch({ type: "REMOVE_FROM_CART", id: item.id })

                                                        dispatch(CountCart())
                                                        dispatch(TotalCart())


                                                    }}
                                                >
                                                    <MdDelete />

                                                </button>


                                            </td>

                                        </tr>



                                    )
                                })

                            }







                        </tbody>


                    </table> : <EmotyCart />


                }


                {
                    cardAddedItem.product.length > 0 && <div className="grand-total">
                        <h3 style={{ textAlign: "center", textDecoration: "underline", marginBottom: "1rem" }}>Grand Total</h3>

                        <h5>Total Items:  {countData}</h5>
                        <h5>Total Price:  $ {Math.round(cardAddedItem.total, 5)}</h5>

                        <button className='checkout' >CheckOut</button>
                        <br />
                        <button className='checkout cart' onClick={() => {
                            dispatch({ type: "EMPTY_CART" })
                        }} >Clear Cart</button>



                    </div>
                }



            </div>


        </div >
    )
}

export default Cart