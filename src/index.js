import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Manage from './Components/Manage';
import './assets/style.css';

const App = () => {
    
    return(
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact />
                        <Route path="/manage" component={Manage} exact />
                    </Switch>
                </div>
            </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));