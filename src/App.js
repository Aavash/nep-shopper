import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {auth} from "./firebase/firebase.utils";

import './App.css';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unSubscribeFromAuth = null;

    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user})
        })
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
