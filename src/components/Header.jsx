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
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
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

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchWrapepr = styled.div`
  display: flex;
  border-width: 2px;
  border-radius: 4px;
`;

const SearchInput = styled.input`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 240px;
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-left-width: 1px;
  cursor: pointer;
`;

const LoginWrapper = styled.div`
  padding-left: 20px;
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
                <Link className="link headerLink" to="/">HOME</Link>
              </Li>
              <Li>
                <Link className="link headerLink" to="/about">ABOUT</Link>
              </Li>
              <Li>
                <Link className="link headerLink" to="/contacts">CONTACTS</Link>
              </Li>
              <Li>
                <Link className="link headerLink" to="/gallery">GALLERY</Link>
              </Li>
              <Li>
                <Link className="link headerLink" to="/inspiration">INSPIRATION</Link>
              </Li>
            </Ul>
          </Nav>
          <SearchContainer>
            <SearchWrapepr>
              <SearchInput type="text" placeholder="Search..." />
              <SearchButton>
                <SearchOutlinedIcon />
              </SearchButton>
            </SearchWrapepr>
            <LoginWrapper>
              <Link to="/login">
                <LoginImage
                  src="https://www.syfy.com/sites/syfy/files/styles/scale--1200/public/2021/03/rango-1200-1200-675-675-crop-000000.jpeg"
                  alt=""
                />
              </Link>
            </LoginWrapper>
          </SearchContainer>
        </Wrapper>
      </Container>
    </HeaderTop>
  );
};

export default Header;
