import "./App.css";
import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import uniqid from "uniqid";
import MainHeader from './components/MainHeader'
import Modal from "./components/Modal/Modal";
import Book from "./components/Book";
import Library from "./components/Library";
import SignUp from "./components/SignUp";
import Spinner from './components/LoadingSpinner'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    async function getData() {
      if (currentUser) {
        setLoading(true);
        db
          .collection(`users/${auth.currentUser.uid}/books/`)
          .get()
          .then((querySnapshot) => {
            const data = querySnapshot.docs.map(
              (doc) => new Book(doc.data(), doc.id)
            );
            setBooks(data);
            setLoading(false);
          })
          .catch((err) => console.error(err));
        }
    }
    getData();
  }, [currentUser]);

  const addBook = (values) => {
    const book = new Book(values, uniqid());
    db.collection(`users/${auth.currentUser.uid}/books/`)
      .doc(book.id)
      .set({
        title: book.title,
        author: book.author,
        isRead: book.isRead,
      })
      .then(() => {
        setBooks((prevState) => [...prevState, book]);
      })
      .catch((err) => console.error(err));
  };

  const deleteBook = (book) => {
    db.collection(`users/${auth.currentUser.uid}/books/`)
      .doc(book.id)
      .delete()
      .then(() => {
        setBooks(books.filter((obj) => obj.id !== book.id));
      })
      .catch((err) => console.error(err));
  };

  const toggleRead = (book) => {
    book.toggleIsRead();
    db.collection(`users/${auth.currentUser.uid}/books/`)
      .doc(book.id)
      .update({isRead: book.isRead})
      .then(() => {
        setBooks([...books]);
      })
      .catch((err) => console.log(err));
  }

  const updateBook = (book, data) => {
    book.update(data);
    db.collection(`users/${auth.currentUser.uid}/books/`)
      .doc(book.id)
      .update({
        title: data.title, 
        author: data.author, 
        pages: data.pages})
      .then(() => {
        setBooks([...books]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "100px" }}>
      <MainHeader user={currentUser} auth={auth} />
      <Spinner loading={loading} size='100'/>
      {!currentUser && <SignUp />}
      {currentUser && <Modal addBook={addBook} />}
      {currentUser && (
        <Library
          books={books}
          deleteBook={deleteBook}
          updateBook={updateBook}
          toggleRead={toggleRead}
        />
      )}
    </div>
  );
};

export default App;
