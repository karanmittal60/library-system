import {routeRules} from "./routeRules";
import Login from "../container/login";
import Users from "../container/users";
import Books from "../container/books";

export const routesData = [
    {
        path: routeRules.signIn,
        component: Login,
        auth: false,
        exact: false
    },
    {
        path: routeRules.signUp,
        component: Login,
        auth: false,
        exact: false
    },
    {
        path: routeRules.books,
        component: Books,
        auth: false,
        exact: false
    },



    {
        key: routeRules.login,
        path: routeRules.login,
        component: Login,
        auth: false,
        exact: false
    },
    {
        key: routeRules.users,
        path: routeRules.users,
        component: Users,
        auth: true,
        exact: false
    }
];
