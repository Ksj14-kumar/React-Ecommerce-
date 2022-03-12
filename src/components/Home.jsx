import React from 'react';
import { MdShoppingCart } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { color } from '@mui/system';
import { useSelector } from 'react-redux';

function Home() {

    const countItem = useSelector((state) => {
        return state.cartReducer
    })


    const totalItems = countItem.product.map((item) => {
        return item.qty
    }).reduce((a, b) => a + b, 0)


    return (
        <>
            <header className='header'>
                <ul className='left-menu'>
                    <li className='cart'>
                        <NavLink exact to="/cart" style={{ color: "blue", fontSize: "2rem" }} >

                            <Badge badgeContent={totalItems} showZero size="small" color="success" max={20}>
                                <MdShoppingCart />
                            </Badge>

                        </NavLink>

                    </li>
                </ul>
            </header>




        </>
    )
}

export default Home