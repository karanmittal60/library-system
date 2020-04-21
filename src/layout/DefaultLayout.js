import React from 'react';
import {toast} from "react-toastify";

const DefaultLayout = (props) => {
    toast.configure({
        autoClose: 3000,
        draggable: false,
        hideProgressBar: true
    });
    return (
        <>
            {/*<Header/>*/}
            {props.children}
        </>
    );
};

export default DefaultLayout;
