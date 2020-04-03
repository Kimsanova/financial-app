import React from "react";
import  MenuIcon  from '@material-ui/icons/Menu';
import Header from "../forms/header";
import Income from "../main/income";
import Balance from "../main/balance";
import Spending from "../main/spending";
import Category from "../main/category";

const HomePage = () => {
    const center = 'Financial Accounting'
    const right = "LOGIN"
    const left = <MenuIcon/>
    return (
        <div>
            <Header center={center} right={right} left={left}/>
            <Income/>
            <Spending/>
            <Balance/>
            <Category/>
        </div>
    )
}

export default HomePage