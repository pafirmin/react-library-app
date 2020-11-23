import React, { useState } from "react";
import styled from "styled-components";
import IsRead from "./ToggleButton";

const Wrapper = styled.div`
  width: 200px;
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
  height: 200px;
`;
const Title = styled.h3`
  margin: 0, 25px;
  font-size: 1.3rem;
  text-align: center;
`;

const Author = styled.p`
  font-style: italic;
`;

const DelBtn = styled.button`
  background-color: rgba(27, 27, 27, 0.9);
  border: 1px solid rgb(158, 158, 158);
  color: rgb(255, 255, 255);
  cursor: pointer;
  position: absolute;
  top: 3px;
  right: 3px;
`;

const BookCard = (props) => {
  const { book } = props;
  const [read, setRead] = useState(book.isRead);
  const isReadText = read ? "Read" : "Not yet read";
  const toggleRead = () => {
    book.toggleIsRead();
    setRead(book.isRead);
  };

  return (
    <Wrapper>
      <DelBtn onClick={() => props.deleteBook(book)}>X</DelBtn>
      <Title>{book.title}</Title>
      <Author>By {book.author}</Author>
      <p style={{ fontSize: ".8rem" }}>({book.pages} pages)</p>
      <IsRead text={isReadText} onClick={toggleRead} />
    </Wrapper>
  );
};

export default BookCard;
