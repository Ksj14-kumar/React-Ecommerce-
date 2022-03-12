import React, { useState } from 'react'

import { Inc, Dec } from '../actions/Actions'

import { useDispatch, useSelector } from 'react-redux';

function Main() {
    const [count, setCount] = useState({ num: 1 })



    const dispatch = useDispatch()
    const data = useSelector((state) => {

        return state.counter
    })




    function change(e) {
        let name = e.target.name
        let value = e.target.value
        setCount({ ...count, [name]: +value })


    }

    return (
        <>
            <div>Main</div>
            <h1>
                {data}
            </h1>

            <input type="number" name="num" id="" onChange={change} />

            <button onClick={() => {
                dispatch(
                    Inc(count)
                )
            }}>+</button>
            <button onClick={() => { dispatch(Dec(count)) }}>-</button>
        </>
    )
}

export default Main;