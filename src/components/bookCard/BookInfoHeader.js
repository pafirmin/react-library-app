import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-size: ${(props) => (props.length > 40 ? "1rem" : "1.2rem")};
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
        <Title length={data.title.length}>{data.title}</Title>
        <Author>by {data.author}</Author>
      </div>
      <a
        href={data.link}
        style={{ marginLeft: "auto", width: "20%", textAlign: "right" }}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={data.img}
          style={{ height: "100%" }}
          alt={`${data.title} cover`}
        />
      </a>
    </div>
  );
};

export default BookInfoHeader;
