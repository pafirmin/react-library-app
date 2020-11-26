import React, { useState } from "react";
import styled from "styled-components";
import Header from "./BookInfoHeader";
import _ from "lodash";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: ${(props) => (props.show ? "8px 14px 0px 14px" : "0")};
  height: ${(props) => (props.show ? "100%" : "0")};
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  width: 100%;
  transition: height, 0.3s;
  overflow: hidden;
  text-align: left;
  z-index: 1;
`;

const Snippet = styled.p`
  margin-top: 6px;
  height: 50%;
  text-align: left;
  font-size: 0.9rem;
  overflow: auto;
  scrollbar-color: #bbb #000;
  scrollbar-width: thin;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  border-top: 1px solid #fff;
`;

const FooterBtn = styled.button`
  display: inline-block;
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
  color: #ccc;

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
  const [searchIndex, setSearchIndex] = useState(0);

  const nextResult = () => {
    const newIndex = searchIndex + 1 > data.length - 1 ? 0 : searchIndex + 1;
    setSearchIndex(newIndex);
  };

  const prevResult = () => {
    const newIndex = searchIndex - 1 < 0 ? data.length - 1 : searchIndex - 1;
    setSearchIndex(newIndex);
  };

  if (data) {
    return (
      <Wrapper show={props.showInfo}>
        <Header data={data[searchIndex]} />
        <Snippet>{_.unescape(data[searchIndex].snippet)}</Snippet>
        <Footer>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Pages: {data[searchIndex].pages}</p>
            <Link href={data[searchIndex].link} target="_blank">
              Google Books
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FooterBtn onClick={prevResult}>
              <i className="fas fa-angle-left"></i> prev
            </FooterBtn>
            <FooterBtn onClick={() => props.syncData(data[searchIndex])}>
              sync data
            </FooterBtn>
            <FooterBtn onClick={nextResult}>
              next <i className="fas fa-angle-right"></i>{" "}
            </FooterBtn>
          </div>
          <FooterBtn onClick={props.hideInfo}>
            <i className="fas fa-caret-up"></i>
          </FooterBtn>
        </Footer>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper><div>Couldn't find book</div></Wrapper>
    )
  }
};

export default BookInfo;
