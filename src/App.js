import React from 'react';
import {AppProvider} from "./context/AppContext";
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {routeRules} from "./routes/routeRules";
import {routesData} from "./routes/routesData";
import AppRoute from "./layoutRoute/AppRoute";
import DefaultRoute from "./layoutRoute/DefaultRoute";

function App() {
    return (
        <AppProvider>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to={routeRules.signIn}/>
                    </Route>
                    {
                        routesData.map(route => {
                            if (route.auth){
                                return <AppRoute {...route} key={route.path}/>
                            } else {
                                return <DefaultRoute {...route} key={route.path}/>
                            }
                        })
                    }
                </Switch>
            </Router>
        </AppProvider>
    );
}

export default App;
