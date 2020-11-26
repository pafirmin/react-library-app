import React, { useState } from "react";
import styled from "styled-components";
import IsRead from "./ToggleButton";
import BookInfo from "./BookInfo";
import Spinner from "../LoadingSpinner";
import Header from "./BookCardHeader";

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
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

const CoverImg = styled.img`
  height: 150px;
  padding: 6px;
`;

const CardBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  position: absolute;
`;

const DelBtn = styled(CardBtn)`
  font-size: 1.2rem;
  bottom: 0.4rem;
  right: 0.3rem;
`;

const GetInfoBtn = styled(CardBtn)`
  top: 0.4rem;
  right: 0rem;
  transition: 0.3s;
  font-size: 1.4rem;

  &:hover {
    scale: 1.2;
  }
`;

const BookCard = (props) => {
  const { book } = props;
  const isReadText = book.isRead ? "Read" : "Not yet read";

  const [showInfo, setShowInfo] = useState(false);
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState(null);
  const getData = async () => {
    setLoading(true);
    const data = await book.getData();
    toggleInfo();
    setBookData(data);
    setLoading(false);
  };

  const syncData = () => {
    props.updateBook(book, bookData);
    toggleInfo();
  };
  
  return (
    <Wrapper>
      <GetInfoBtn onClick={getData}>
        <i className="fas fa-info-circle"></i>
      </GetInfoBtn>
      <Header book={book} />
      {book.img && (
        <a href={book.link} target="_blank" rel="noreferrer">
          <CoverImg src={book.img} alt={`${book.title} cover`} />
        </a>
      )}
      {book.pages && <p>{book.pages} pages</p>}
      <Spinner loading={loading} size="40" />
      <IsRead text={isReadText} toggleRead={() => props.toggleRead(book)} />
      <DelBtn onClick={() => props.deleteBook(book)}>
        <i className="far fa-trash-alt"></i>
      </DelBtn>
      <BookInfo
        data={bookData}
        showInfo={showInfo}
        hideInfo={toggleInfo}
        syncData={syncData}
      />
    </Wrapper>
  );
};

export default BookCard;
