import React from "react";
import {AppContext} from "../context/AppContext";

const usePikachu = () => {

    const [state, setState] = React.useContext(AppContext);

    function addUsers(data) {
        setState(prevState => {
            return {
                ...prevState,
                users: [
                    ...prevState.users,
                    data
                ]
            }
        })
    }

    function signIn(data) {
        let res = {
            success: false,
            message: ''
        };

        if (data.id === ""){
            res.message = "Id can not be null"
        } else if (data.password === ""){
            res.message = "Password can not be null"
        } else if (data.phone === ""){
            res.message = "Phone can not be null"
            console.log("length==>", data.phone.toString().length);
        } else if (data.phone.toString().length !== 10 ){
            res.message = "Phone must be of 10 digit"
        } else if (data.id !== state.adminDetails.id){
            res.message = "Id is not registered"
        } else if (data.phone !== state.adminDetails.phone){
            res.message = "Incorrect Phone"
        } else if (data.password !== state.adminDetails.password){
            res.message = "Incorrect Password"
        } else {
            res.message = "Login succesfull";
            res.success = true
        }
        return res;
    }

    function setUsersData(data) {
        setState(prevState => {
            return {
                ...prevState,
                usersData: data
            }
        })
    }

    return {
        adminDetails: state.adminDetails,

        users: state.users,

        books: state.books,

        signIn: signIn,

        addUsers: addUsers,
    }
};

export default usePikachu;
