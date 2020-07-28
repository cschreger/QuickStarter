import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    debugger
    window.getState = store.getState;
    debugger
    window.dispatch = store.dispatch;
    const root = document.getElementById("root")
    ReactDOM.render(<h1>Welcome to Quickstarter!</h1>, root)
});
// const store = configureStore();