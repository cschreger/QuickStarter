import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import {log_out} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    const root = document.getElementById("root")
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store.getState;
    window.dispatch = store.dispatch;
    window.logout = log_out();
    
    ReactDOM.render(<Root store={store} />, root)
});

// const store = configureStore();
// window.store = store.getState;
