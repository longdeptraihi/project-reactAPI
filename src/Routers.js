import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LayoutAdmin from "./components/LayoutAdmin/LayoutAdmin";
import LayoutWebsite from "./components/LayoutWebsite/LayoutWebsite";
import HomePage from "./components/pages/HomePage";
import HeaderWebsite from "./components/LayoutWebsite/Header";
import ProductsAddPage from "./components/LayoutAdmin/ProductsAddPage";
import ListProducts from "./components/LayoutAdmin/ListProducts";
const Routers = (props) => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/admin/:path?/:path?/:path?">
                        <LayoutAdmin {...props}>
                            <Route exact path="/admin/products/add">
                                <ProductsAddPage {...props} />
                            </Route>
                            <Route exact path="/admin/listproduct">
                                <ListProducts {...props} />
                            </Route>
                        </LayoutAdmin>
                    </Route>
                    <Route>
                        <LayoutWebsite>
                            <HeaderWebsite />
                            <Switch>
                                <Route exact path="/">
                                    <HomePage {...props} />
                                </Route>
                            </Switch>
                        </LayoutWebsite>
                    </Route>
                </Switch>
            </Router>


        </>
    )
}

export default Routers
