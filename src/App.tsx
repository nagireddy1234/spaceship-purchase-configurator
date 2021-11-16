import React from "react"
import Home from './home';
import { Helmet } from 'react-helmet';

function App() {
    return (
        <>
            <Helmet>
                <title>spaceship-purchase-configurator</title>
            </Helmet>
            <Home />
        </>
    );
}

export default App;
