import "./App.css";
import React, { useEffect, useState } from "react";
import { auth, db } from './firebase'
import uniqid from "uniqid";
import Modal from "./components/Modal/Modal";
import Book from "./components/Book";
import Library from "./components/Library";
import SignUp from './components/SignUp'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    })
  }, [])

  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function getData() {
      db.collection("books")
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map(
            (doc) => new Book(doc.data(), doc.id)
          );
          setBooks(data)
        }).catch((err) => console.error(err));
    }
    getData();
  }, []);

  const addBook = (values) => {
    const book = new Book(values, uniqid());
    db.collection("books")
      .doc(book.id)
      .set({
        title: book.title,
        author: book.author,
        isRead: book.isRead,
      })
      .then(() => {
        setBooks((prevState) => [...prevState, book]);
      }).catch(err => console.error(err));
  };

  const deleteBook = (bookId) => {
    db.collection("books")
      .doc(bookId)
      .delete()
      .then(() => {
        setBooks(books.filter((book) => book.id !== bookId));
      }).catch(err => console.error(err));
  };

  const updateBook = (book, data) => {
    book.update(data);
    db.collection("books")
      .doc(book.id)
      .update(data)
      .then(() => {
        setBooks([...books]);
      });
  };


  return (
    <div className="App" style={{ textAlign: "center", marginTop: "100px" }}>
      {!currentUser && <SignUp />}
      {currentUser && <Modal addBook={addBook} />}
      {currentUser && <Library books={books} deleteBook={deleteBook} updateBook={updateBook} />}
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
};

export default App;
