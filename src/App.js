import React from 'react';
import {AppProvider} from "./context/AppContext";
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {routeRules} from "./routes/routeRules";
import {routesData} from "./routes/routesData";
import AppRoute from "./layoutRoute/AppRoute";
import DefaultRoute from "./layoutRoute/DefaultRoute";
import NotFound from "./components/notFound";

function App() {
    return (
        <AppProvider>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to={routeRules.signIn}/>
                    </Route>
                    {
                        routesData.map((route, index) => {
                            if (route.auth){
                                return <AppRoute {...route} key={index} />
                            } else {
                                return <DefaultRoute {...route} key={index}/>
                            }
                        })
                    }
                    <Route path="*" exact={true}   component={NotFound} />
                </Switch>
            </Router>
        </AppProvider>
    );
}

export default App;
