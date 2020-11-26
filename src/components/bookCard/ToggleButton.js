import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToggleBtn = styled.button`
  background-color: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
  padding-top: 5px;
`;

const IsRead = (props) => {
  const { toggleRead } = props;
  return (
    <Wrapper>
      <span style={{ textAlign: "center" }}>
        {props.text}
        <ToggleBtn onClick={toggleRead}>(toggle)</ToggleBtn>
      </span>
    </Wrapper>
  );
};

export default IsRead;
