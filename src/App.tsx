import React from "react";
import {Switch, Route} from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import CustomerList from "./pages/customer/customerlist/customerlist.component";
import StockList from "./pages/stock/stocklist/stocklist.component";

import Header from "./components/header/header.component";
import addCustomerComponent from "./pages/customer/customer/add-customer.component";

function App(): JSX.Element {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/customer/customerlist" component={CustomerList} />
                <Route path="/customer/addcustomer" component={addCustomerComponent} />
                <Route path="/stock/stocklist" component={StockList} />
            </Switch>
        </div>
    );
}

export default App;
