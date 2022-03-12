import React, { useEffect, useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid'
import { Inc } from '../actions/Actions';

import bindActionCart from '../Reducer/cart/Action';

import bindProductCart from '../Reducer/products/Actions';

function Products() {
    const [products, setProducts] = useState([])
    const productData = useSelector((state) => {
        return state.product 
    })

    const { AddCart, EmptyCart, CountCart, TotalCart } = bindActionCart
    const { Fetch_Products } = bindProductCart






    const dispatch = useDispatch()



    useEffect(() => {
        async function loadData() {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            // setProducts(data)
            Fetch_Products(data)



        }
        loadData()
    }, [])


    return (
        <React.Fragment>

            <main className='main-container'>

                {productData.length > 0 && productData.map((item) => {
                    return (
                        <div className="card" key={item.id} style={{ width: "15rem" }}>
                            <div className="card-header">
                                <h4>
                                    {/* {item.description} */}
                                </h4>
                            </div>
                            <img src={item.image} alt="img" style={{ width: "100%" }} />
                            <section className='info-section' style={{ width: "100%" }}>

                                <h5 className='title'>
                                    {item.title}
                                </h5>

                                <footer style={{
                                    display: "flex", justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: "1rem",
                                    marginLeft: "1rem",
                                    marginRight: "1rem",

                                }}>
                                    <h5>
                                        <button id='AddShoppingCart'
                                            onClick={() => {




                                                // dispatch(AddCart({ ...item, qty: 1, total: item.price }))

                                                // dispatch(CountCart())
                                                // dispatch(TotalCart())

                                                AddCart({ ...item, qty: 1, total: item.price })
                                                CountCart()
                                                TotalCart()

                                            }}
                                        >
                                            <MdAddShoppingCart />
                                        </button>
                                    </h5>
                                    <h4>$ {item.price}</h4>

                                </footer>


                            </section>
                        </div>

                    )
                })}





            </main>
        </React.Fragment>


    )
}

export default Products