import React from 'react';
import {Route, Redirect} from "react-router-dom";
import AppLayout from "../layout/AppLayout";

const AppRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={matchProps => {
                if (localStorage.getItem('token') !== ""){
                    return (
                        <AppLayout {...matchProps}>
                            <Component {...matchProps}/>
                        </AppLayout>
                    )
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: matchProps.location
                                }
                            }}
                        />
                    )
                }
            }}
        />
    );
};

export default AppRoute;
