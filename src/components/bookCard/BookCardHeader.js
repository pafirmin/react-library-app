import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
        height: "50%";
        display: "flex";
        flexDirection: "column";
        justifyContent: "space-between";
`
const Title = styled.h3`
  margin: 0, 8px;
  font-size: 1.2rem;
  text-align: center;
`;

const Author = styled.p`
  font-style: italic;
  color: #bbb;
`;

const BookCardHeader = (props) => {
  const { book } = props
  return (
    <Header>
      <Title>{book.title}</Title>
      <Author>By {book.author}</Author>
    </Header>
  )
}

export default BookCardHeader
