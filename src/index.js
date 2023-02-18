import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import Layout from './Components/Layout';

const App = () => {
    
    return(
        <React.Fragment>
            <Layout />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));