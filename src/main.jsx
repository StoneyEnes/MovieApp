import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Router from "./Routing/Router.jsx";
import {Provider} from "react-redux";
import store from "./Redux/Store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router/>
    </Provider>
)
