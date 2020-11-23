import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

const ToggleBtn = styled.button`
  background-color: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
  padding-top: 5px;
`;

const IsRead = (props) => {
  return (
    <Wrapper>
      <p style={{ textAlign: "center" }}>{props.text}</p>
      <ToggleBtn onClick={props.onClick}>(toggle)</ToggleBtn>
    </Wrapper>
  );
};

export default IsRead;
