import React from 'react';
import Header from "../Navigations/header";
import LeftMenu from "../Navigations/leftMenu";

const AppLayout = (props) => {
    return (
        <>
            <Header/>
            {/*<LeftMenu/>*/}
            {props.children}
        </>
    );
};

export default AppLayout;
