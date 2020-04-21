import React, {useEffect, useState} from 'react';
import TableList from "../../components/tableList";
import AddBookPopup from "./AddBookPopup";
import usePikachu from "../../hooks/usePikachu";
import LabelWithInput from "../../components/labelWithInput";

const Books = () => {

    const tableHead = ["Book Id", "Book Name", "Author", "Publish Date", "Description", "Edit"]

    const { books } = usePikachu();

    const [bookList, setBookList] = useState([])

    const [showAddBook, setShowAddBook] = useState(false)

    const [updateMode, setUpdateMode] = useState(false)

    const [editBookData, setEditBookData] = useState(null)

    const handleEditBook = (book) => {
        setShowAddBook(true);
        setUpdateMode(true);
        setEditBookData(book)
    }

    const addNewBook = () => {
        setShowAddBook(show => !show);
        setEditBookData(null)
        setUpdateMode(false);
    }

    useEffect(() => {
        let afterAddEdit = books.map((book, index) => {
            book['edit'] = (
                <span onClick={() => handleEditBook(book)}>
                    <i className="fas fa-edit"/>
                </span>
            )
            return book
        })
        setBookList(afterAddEdit)
    }, [books])

    const [search, setSearch] = useState("");

    const [searchBooks, setSearchBooks ] = useState([])

    const handleInputChange = ({target: {name, value}}) => {
        if (name === "search") setSearch(value)
        let filterData = bookList.filter((book) => {
            if (book.name.includes(value)){
                return true
            } else {
                return false
            }
        })
        setSearchBooks(filterData);
     }

    return (
        <div className="container mt-5">

            <div className="d-flex">
                <div className="col-4">
                    <LabelWithInput
                        label=""
                        name="search"
                        placeholder="Search Book"
                        value={search}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-4"/>
                <div className="float-right">
                    <button
                        className="btn btn-success"
                        onClick={addNewBook}>
                        Add New Book
                    </button>
                </div>
            </div>

            <div className="text-center">
                <h2>Book List</h2>
            </div>

            <div className="books-table">
                <TableList
                    tableHead={tableHead}
                    tableBody={search === "" ? bookList: searchBooks }
                />
            </div>

            <AddBookPopup
                show={showAddBook}
                hidePopup={addNewBook}
                updateMode={updateMode}
                editBookData={editBookData}
            />

        </div>
    );
};

export default Books;
