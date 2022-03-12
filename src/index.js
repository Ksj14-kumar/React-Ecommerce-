import { React } from 'react'

import ReactDOM from 'react-dom'
import App from './App';


import { Provider } from 'react-redux'
import store from './Reducer/Store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./index.css"
import Products from './components/Products';
import Cart from './components/Cart';





ReactDOM.render(
    <>
        <Provider store={store}>
            <BrowserRouter>
                <App />

                <Switch>
                    <Route exact path="/" component={Products} />
                    <Route exact path="/cart" component={Cart} />
                    <Route />


                </Switch>

            </BrowserRouter>




        </Provider>
    </>,
    document.getElementById("root")
)

