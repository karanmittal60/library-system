import React, {useEffect, useState} from 'react';
import Modal from "../../components/modal";
import LabelWithInput from "../../components/labelWithInput";
import usePikachu from "../../hooks/usePikachu";
import {toast} from "react-toastify";
import {notNull} from "../../utils/utilities";

const AddBookPopup = ({show, hidePopup, updateMode, editBookData}) => {

    toast.configure({
        autoClose: 3000,
        draggable: false,
        hideProgressBar: true
    });

    const [name, setName] = useState("");

    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const { addNewBook, updateBook } = usePikachu();

    useEffect(() => {
        if (notNull(editBookData)){
            setName(editBookData.name);
            setAuthor(editBookData.author);
            setDate(editBookData.date);
            setDescription(editBookData.description)
        } else {
            reset();
        }
    }, [editBookData])

    useEffect(() => {
        reset();
    }, [])

    const reset = () => {
        setName("");
        setAuthor("");
        setDate("");
        setDescription("")
    }

    const handleInputChange = ({target: {name, value}}) => {
        if (name === "name") setName(value)
        else if (name === "author") setAuthor(value)
        else if (name === "description") setDescription(value)
        else if (name === "date") setDate(value)
    }

    const addBook = (e) => {
        e && e.preventDefault();
        let data = {
            id: Date.now(),
            name,
            author,
            date,
            description
        }

        let res =  updateMode ? updateBook({...data, id: editBookData.id}) : addNewBook(data);

        if (res.success){
            hidePopup()
            toast.success(res.message)
        } else {
            hidePopup()
            toast.error(res.message)
        }
    }

    return (
        <Modal show={show} hidePopup={hidePopup}>
            <div className="text-center">
                <h1>AddBookPopup</h1>
            </div>
            <div className="add-book-popup">
                <div className="container">
                    <form onSubmit={addBook}>
                        <LabelWithInput
                            label="Book Name"
                            name="name"
                            placeholder="Book Name"
                            value={name}
                            onChange={handleInputChange}
                        />
                        <LabelWithInput
                            label="Author Name"
                            name="author"
                            placeholder="Author Name"
                            value={author}
                            onChange={handleInputChange}
                        />
                        <LabelWithInput
                            type="date"
                            label="Date of publish"
                            name="date"
                            placeholder="Date of publish"
                            value={date}
                            onChange={handleInputChange}
                        />
                        <LabelWithInput
                            isTextArea={true}
                            label="Description"
                            name="description"
                            placeholder="Enter book description"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button className="btn form-control">
                            {updateMode ? "Update" : "Add"}
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default AddBookPopup;