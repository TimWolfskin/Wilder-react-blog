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

const Wrapper = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 600px;
  margin-top: 0;
  margin-bottom: 50px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
`;

const ContactInner = styled.div`
  padding-bottom: 100px;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`;

const ContactTitle = styled.h3`
  color: #319b59;
  font-family: "Roboto Slab", serif;
  font-size: 36px;
  line-height: 60px;
  padding-bottom: 35px;
  margin-bottom: 40px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 200px;
    background-color: #6d7278;
  }
`;

const ContactSocial = styled.ul`
  list-style: none;
  padding-left: 284px;
  display: flex;
  margin-bottom: 20px;
`;

const ContactSocialItem = styled.li`
  &:not(:first-child) {
    padding-left: 40px;
  }
`;

const ContactSocialLink = styled.a`
  color: #151c2c;
  text-decoration: none;
  &:hover {
    color: #319b59;
  }
`;

const ContactBox = styled.div`
  padding-left: 284px;
`;

const ContactText = styled.p`
  margin-bottom: 10px;
  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #151c2c;
  max-width: 700px;
`;

const ContactPhone = styled.a`
  color: #151c2c;
  text-decoration: none;
  margin-bottom: 20px;
`;

const ContactCity = styled.div`
  margin-bottom: 16px;
  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #151c2c;
`;

const ContactEmail = styled.a`
  color: #151c2c;
  font-size: 14px;
  line-height: 28px;
  text-decoration: none;
  display: block;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  padding-left: 284px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 825px;
`;

const ContactFormInput = styled.input`
  border: 1px solid #319b59;
  border-radius: 20px;
  padding: 6px 17px;
  margin-bottom: 13px;
  width: 48%;
  &::placeholder {
    color: #a1a1a1;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    font-family: "Roboto Slab", serif;
  }
`;

const ContactFormArea = styled.textarea`
  width: 100%;
  border: 1px solid #319b59;
  border-radius: 24px;
  padding: 14px 17px;
  min-height: 125px;
  margin-bottom: 20px;
  resize: none;
  &::placeholder {
    color: #a1a1a1;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    font-family: "Roboto Slab", serif;
  }
`;

const ContactFormButton = styled.button`
  border: none;
  background-color: #319b59;
  color: #fffff0;
  font-weight: 600;
  border-radius: 21px;
  padding: 6px 60px;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image
          src="https://www.69dropsstudio.co.uk/wp-content/uploads/2018/05/nature-photography-at-its-best-1200x569.jpeg"
          alt=""
        />
      </ImageContainer>
      <ContactInner>
        <Container>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactSocial>
            <ContactSocialItem>
              <ContactSocialLink href="#">
                <FacebookOutlinedIcon />
              </ContactSocialLink>
            </ContactSocialItem>
            <ContactSocialItem>
              <ContactSocialLink href="#">
                <InstagramIcon />
              </ContactSocialLink>
            </ContactSocialItem>
            <ContactSocialItem>
              <ContactSocialLink href="#">
                <TwitterIcon />
              </ContactSocialLink>
            </ContactSocialItem>
            <ContactSocialItem>
              <ContactSocialLink href="#">
                <TelegramIcon />
              </ContactSocialLink>
            </ContactSocialItem>
            <ContactSocialItem>
              <ContactSocialLink href="#">
                <WhatsAppIcon />
              </ContactSocialLink>
            </ContactSocialItem>
          </ContactSocial>
          <ContactBox>
            <ContactText>
              Vexillologist vape microdosing freegan pork belly deep v direct
              trade cray single-origin coffee street art. Viral shaman mustache
              master cleanse, pour-over affogato poutine copper mug marfa fanny
              pack normcore. Lo-fi pop-up banjo portland, echo park hammock
            </ContactText>
            <ContactPhone href="tel:+14158297934">(415) 829-7934</ContactPhone>
            <ContactCity>San Francisco, California(CA), 94133</ContactCity>
            <ContactEmail href="mailto:ouremailaddress@email.com">
              ouremailaddress@email.com
            </ContactEmail>
          </ContactBox>
          <ContactForm>
            <ContactFormInput placeholder="Your name" type="text" />
            <ContactFormInput placeholder="Your email" type="email" />
            <ContactFormArea placeholder="Your message"></ContactFormArea>
            <ContactFormButton type="submit">Send</ContactFormButton>
          </ContactForm>
        </Container>
      </ContactInner>
    </Wrapper>
  );
};

export default Contact;
