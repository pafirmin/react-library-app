import React, { useState } from "react";
import styled from "styled-components";
import IsRead from "./ToggleButton";
import BookInfo from "./BookInfo";
import Spinner from "../LoadingSpinner";

const Wrapper = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #1b1b1be6;
  border: 1px solid #000;
  color: #fff;
  margin: 12px;
  padding: 11px;
`;
const Title = styled.h3`
  margin: 0, 8px;
  font-size: 1.2rem;
  text-align: center;
`;

const Author = styled.p`
  font-style: italic;
  color: #bbb;
`;

const DelBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
`;

const GetInfoBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const BookCard = (props) => {
  const { book } = props;
  const [read, setRead] = useState(book.isRead);
  const isReadText = read ? "Read" : "Not yet read";

  const toggleRead = () => {
    book.toggleIsRead();
    setRead(book.isRead);
  };

  const [showInfo, setShowInfo] = useState(false);
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState(null);
  const getData = async () => {
    setShowInfo(true);
    setLoading(true);
    const data = await book.getData();
    setLoading(false);
    setBookData(data);
  };

  return (
    <Wrapper>
      <DelBtn onClick={() => props.deleteBook(book.id)}>
        <i className="far fa-trash-alt"></i>
      </DelBtn>
      <header style={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Title>{book.title}</Title>
        <Author>By {book.author}</Author>
      </header>
      <Spinner loading={loading} />
      <IsRead text={isReadText} onClick={toggleRead} />
      <GetInfoBtn onClick={getData}>Info</GetInfoBtn>
      <BookInfo
        data={bookData}
        showInfo={showInfo}
        hideInfo={toggleInfo}
        updateBook={() => props.updateBook(book, bookData)}
      />
    </Wrapper>
  );
};

export default BookCard;
