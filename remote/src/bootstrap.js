import React from "react";
import ReactDOM from 'react-dom/client'
import "./index.css";
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from './redux/store.js';

// Mount function to start up the app
const mount = (el) => {
    ReactDOM.createRoot(el).render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
    )
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById("remote");

    if (devRoot) {
        mount(devRoot);
    }
}

// We are running through container
// and we should export the mount function
export { mount };