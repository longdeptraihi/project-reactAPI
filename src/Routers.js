import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./components/LayoutWebsite/Header";
import LayoutWebsite from "./components/LayoutWebsite/LayoutWebsite";
import HomePage from "./components/pages/HomePage";
const Routers = (props) => {
    console.log("router", props.products)
    return (
        <>
            <Header />
            <Router>
                <LayoutWebsite {...props} >
                    <Switch>
                        <Route exact path="/">
                            <HomePage {...props} />
                        </Route>
                    </Switch>

                </LayoutWebsite>

            </Router>

        </>
    )
}

export default Routers
