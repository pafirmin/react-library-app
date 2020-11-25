import React, { useState } from "react";
import styled from "styled-components";
import IsRead from "./ToggleButton";
import BookInfo from "./BookInfo";
import Spinner from "../LoadingSpinner";
import Header from './BookCardHeader'

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
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

const CardBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  position: absolute;
`;

const DelBtn = styled(CardBtn)`
  bottom: .4rem;
  right: .3rem;
`;

const GetInfoBtn = styled(CardBtn)`
  top: .4rem;
  right: .3rem;
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
      <DelBtn onClick={() => props.deleteBook(book)}>
        <i className="far fa-trash-alt"></i>
      </DelBtn>
      <Header book={book} />
      <Spinner loading={loading} size='40' />
      <IsRead text={isReadText} onClick={toggleRead} />
      <GetInfoBtn onClick={getData}>
        <i className="fas fa-info-circle"></i>
      </GetInfoBtn>
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
