import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: auto;
`;

const FooterContent = styled.div`
  background: #151c2c;
  padding: 60px 0 80px;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div``;

const Logo = styled.h1`
  font-family: "Kaushan Script", cursive;
  color: #167d23;
  text-transform: uppercase;
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
`;

const FooterInfo = styled.div`
  width: 540px;
`;

const FooterInfoTitle = styled.h6`
  color: #319b59;
  font-family: "Roboto Slab", serif;
  margin-bottom: 14px;
  line-height: 23px;
`;

const FooterInfoText = styled.p`
  margin-bottom: 16px;
  max-width: 475px;
  font-size: 16px;
  line-height: 27px;
  color: #707070;
`;

const InfoEmail = styled.a`
  color: #707070;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px;
  padding-left: 10px;
`;

const FooterForm = styled.form`
  display: flex;
`;

const FooterFormInput = styled.input`
  padding: 6px 10px 6px 18px;
  border-radius: 21px;
  background-color: #fff;
  border: 1px solid #167d23;
  color: #a1a1a1;
  width: 100%;
  &::placeholder {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #a1a1a1;
  }
`;

const FooterFormButton = styled.button`
  border: none;
  color: #000;
  border-radius: 21px;
  font-weight: 600;
  padding: 6px 12px;
  min-width: 160px;
  margin-left: 9px;
  cursor: pointer;
  background-color: #167d23;
`;

const FooterSocial = styled.ul`
  width: 125px;
  list-style: none;
`;

const FooterSocialItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 14px;
`;

const FooterSocialLink = styled.a`
  color: #707070;
  text-decoration: none;
  padding-left: 10px;
`;

const FooterMenu = styled.nav`
  margin-right: 60px;
  width: 125px;
`;

const FooterMenuList = styled.ul``;

const FooterMenuItem = styled.li`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 14px;
`;

const FooterMenuLink = styled.a`
  color: #707070;
  text-decoration: none;
`;

const FooterCopyright = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: #a1a1a1;
  text-align: center;
  padding: 42px 0 41px;
  background: #0e131f;
`;

const CopyrightText = styled.p``;

const Footer = () => {
  return (
    <Wrapper>
      <FooterContent>
        <Container>
          <FooterInner>
            <LogoContainer>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Logo>Wilder</Logo>
              </Link>
            </LogoContainer>
            <FooterInfo>
              <FooterInfoTitle>Contact Us</FooterInfoTitle>
              <FooterInfoText>
                Keffiyeh poutine etsy, paleo cray put a bird on it microdosing
                schlitz you probably occupy
              </FooterInfoText>
              <InfoEmail href="mailto:ouremailaddress@email.com">
                <EmailOutlinedIcon />
                ouremailaddress@email.com
              </InfoEmail>
              <FooterForm>
                <FooterFormInput
                  type="email"
                  placeholder="Subscribe by email"
                />
                <FooterFormButton type="submit">Send</FooterFormButton>
              </FooterForm>
            </FooterInfo>
            <FooterSocial>
              <FooterSocialItem>
                <FacebookOutlinedIcon style={{ color: "#a1a1a1" }} />
                <FooterSocialLink href="#">Facebook</FooterSocialLink>
              </FooterSocialItem>
              <FooterSocialItem>
                <InstagramIcon style={{ color: "#a1a1a1" }} />
                <FooterSocialLink href="#">Instagram</FooterSocialLink>
              </FooterSocialItem>
              <FooterSocialItem>
                <TwitterIcon style={{ color: "#a1a1a1" }} />
                <FooterSocialLink href="#">Twitter</FooterSocialLink>
              </FooterSocialItem>
              <FooterSocialItem>
                <TelegramIcon style={{ color: "#a1a1a1" }} />
                <FooterSocialLink href="#">Telegram</FooterSocialLink>
              </FooterSocialItem>
              <FooterSocialItem>
                <WhatsAppIcon style={{ color: "#a1a1a1" }} />
                <FooterSocialLink href="#">WhatsApp</FooterSocialLink>
              </FooterSocialItem>
            </FooterSocial>
            <FooterMenu>
              <FooterMenuList>
                <FooterMenuItem>
                  <FooterMenuLink href="#">Our Gallery</FooterMenuLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterMenuLink href="#">FAQ</FooterMenuLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterMenuLink href="#">HELP</FooterMenuLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterMenuLink href="#">More About Us</FooterMenuLink>
                </FooterMenuItem>
              </FooterMenuList>
            </FooterMenu>
          </FooterInner>
        </Container>
      </FooterContent>
      <FooterCopyright>
        <Container>
          <CopyrightText>
            674 Gonzales Drive. Washington, PA 15301
          </CopyrightText>
        </Container>
      </FooterCopyright>
    </Wrapper>
  );
};

export default Footer;
