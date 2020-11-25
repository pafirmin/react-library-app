import React from "react";
import styled from "styled-components";
import Header from "./BookInfoHeader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: ${(props) => (props.show ? "8px 14px 0px 14px" : "0")};
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  width: 100%;
  height: ${(props) => (props.show ? "300px" : "0")};
  transition: height, 0.3s;
  overflow: hidden;
  text-align: left;
  z-index: 2;
`;

const Snippet = styled.p`
  margin-top: 6px;
  text-align: left;
  font-size: 0.9rem;
  overflow: auto;
  scrollbar-color: #bbb #000;
  scrollbar-width: thin;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  border-top: 1px solid #fff;
`;

const FooterBtn = styled.button`
  display: inline-block;
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Link = styled.a`
  color: inherit;
  text-decoration: underline;
`;

const BookInfo = (props) => {
  const { data } = props;

  if (data) {
    return (
      <Wrapper show={props.showInfo}>
        <Header data={data} />
        <Snippet>{data.snippet}</Snippet>
        <Footer>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Pages: {data.pages}</p>
            <Link href={data.link}>Google Books</Link>
          </div>
          <FooterBtn onClick={props.updateBook}>sync data</FooterBtn>
          <FooterBtn onClick={props.hideInfo}>
            <i className="fas fa-caret-up"></i>
          </FooterBtn>
        </Footer>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div>Couldn't find that book</div>
      </Wrapper>
    );
  }
};

export default BookInfo;