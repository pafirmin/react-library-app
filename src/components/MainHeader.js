import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  background-color: rgba(23,23,23,.8);
  width: 100%;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`

const MainTitle = styled.h1`
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.4rem;
    text-align: left;
    padding-left: 6px;
  }
`

const UserDiv = styled.div`
  position: absolute;
  right: 6px;
  display: flex;
  gap: 12px;
  align-items: center;
`

const SignOutBtn = styled.button`
  border: none;
  background-color: rgb(38,178,221);
  padding: 6px;
  font: inherit;
  color: #fff;
  cursor: pointer;
`

const UserEmail = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`

const MainHeader = (props) => {
  const { user, auth } = props
  return (
    <Header>
      <MainTitle style={{flex: '1'}}>Library Cards</MainTitle>
      { user &&
        <UserDiv>
          <ProfileImg src={user.photoURL}/>
          <UserEmail>{user.email}</UserEmail>
          <SignOutBtn onClick={() => auth.signOut()}>Log Out</SignOutBtn>
        </UserDiv>
      }
    </Header>
  )
}

export default MainHeader
