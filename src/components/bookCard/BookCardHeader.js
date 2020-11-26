import React from "react";
import styled from "styled-components";
import _ from 'lodash'

const Header = styled.header`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h3`
  margin: 0 18px;
  font-size: ${(props) => props.length > 40 ?  '1rem' : '1.2rem'};
  text-align: center;
`;

const Author = styled.p`
  font-style: italic;
  color: #bbb;
`;


const BookCardHeader = (props) => {
  const { book } = props;
  const title = _.truncate(book.title, { 'length': 65, 'separator': ' ' })
  
  return (
    <Header>
      <Title length={book.title.length}>{title}</Title>
      <Author>By {book.author}</Author>
    </Header>
  );
};

export default BookCardHeader;
