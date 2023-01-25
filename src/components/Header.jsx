import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import "../styles/Global.css";

const HeaderTop = styled.header`
  background-color: #151c2c;
  position: sticky;
  top: 0;
  z-index: 30;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-family: "Kaushan Script", cursive;
  color: #167d23;
  text-transform: uppercase;
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
`;

const Nav = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  gap: 0 40px;
`;

const Li = styled.li`
  text-decoration: none;
  list-style: none;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`;

const SearchInput = styled.input`
  height: 40px;
  width: 40px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
  background-color: #22a6b3;
  padding-right: 40px;
  color: #fff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
  }
  &:focus {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;

const SearchButton = styled.button`
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color: #ffffff;
  background-color: transparent;
  pointer-events: painted;
  &:focus ~ .input-search {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;

const LoginWrapper = styled.div`
  margin-left: 30px;
`;

const LoginImage = styled.img`
  cursor: pointer;
  border-radius: 9999px;
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

const Header = () => {
  return (
    <HeaderTop>
      <Container>
        <Wrapper>
          <Link className="link" to="/">
            <Logo>Wilder</Logo>
          </Link>
          <Nav>
            <Ul>
              <Li>
                <Link className="link headerLink" to="/">
                  HOME
                </Link>
              </Li>
              <Li>
                <Link className="link headerLink" to="/about">
                  ABOUT
                </Link>
              </Li>
              <Li>
                <Link className="link headerLink" to="/contacts">
                  CONTACTS
                </Link>
              </Li>
              <Li>
                <Link className="link headerLink" to="/gallery">
                  GALLERY
                </Link>
              </Li>
              <Li>
                <Link className="link headerLink" to="/inspiration">
                  INSPIRATION
                </Link>
              </Li>
            </Ul>
          </Nav>
          <InfoContainer>
            <SearchContainer>
              <SearchButton>
                <SearchOutlinedIcon />
              </SearchButton>
              <SearchInput
                type="text"
                className="input-search"
                placeholder="Type to Search..."
              />
            </SearchContainer>
            <LoginWrapper>
              <Link to="/login">
                <LoginImage
                  src="https://www.syfy.com/sites/syfy/files/styles/scale--1200/public/2021/03/rango-1200-1200-675-675-crop-000000.jpeg"
                  alt=""
                />
              </Link>
            </LoginWrapper>
          </InfoContainer>
        </Wrapper>
      </Container>
    </HeaderTop>
  );
};

export default Header;
