import React from 'react';
import Header from "../Navigations/header";
import {toast} from "react-toastify";

const AppLayout = (props) => {
    toast.configure({
        autoClose: 3000,
        draggable: false,
        hideProgressBar: true
    });
    return (
        <>
            <Header/>
            {props.children}
        </>
    );
};

export default AppLayout;
