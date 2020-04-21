import React from "react";
import {AppContext} from "../context/AppContext";
import {notNull} from "../utils/utilities";

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

    function addNewBook(data){
        setState(prevState => {
            return {
                ...prevState,
                books: [...prevState.books, data]
            }
        })
        return {
            success: true,
            message: "Book Added successfully"
        }
    }

    function updateBook(data){
        if (notNull(state.books)){
            let bookIndex = state.books.findIndex(book => book.id === data.id)
            let books = [...state.books];
            books[bookIndex].name = data.name;
            books[bookIndex].author = data.author;
            books[bookIndex].date = data.date;
            books[bookIndex].description = data.description;
            setState(prevState => {
                return {
                    ...prevState,
                    books: books
                }
            })
            return {
                success: true,
                message: "Book updated successfully"
            }
        } else {
            return {
                success: false,
                message: "No Books Available"
            }
        }
    }

    return {
        adminDetails: state.adminDetails,

        users: state.users,

        books: state.books,

        addNewBook,

        updateBook,

        signIn: signIn,

        addUsers: addUsers,
    }
};

export default usePikachu;
