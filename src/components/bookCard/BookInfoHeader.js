import React from 'react'
import styled from "styled-components";

const Title = styled.h3`
  font-size: 1.2rem;
  text-align: left;
`;

const Author = styled.p`
  font-style: italic;
  color: #bbb;
  text-align: left;
`;

const BookInfoHeader = (props) => {
  const { data } = props;
  return (
    <div style={{ display: "flex", height: "30%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Title>{data.title}</Title>
        <Author>by {data.author}</Author>
      </div>
      <a
        href={data.link}
        style={{ marginLeft: "auto", width: "20%", textAlign: "right" }}
      >
        <img src={data.img} style={{ height: "100%" }} />
      </a>
    </div>
  )
}

export default BookInfoHeader
