import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";

const Card = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 425px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(#999, 0.25);
  padding: 0.75rem;
`;

const CardImage = styled.div`
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 65%;
  background-image: url("https://d39l2hkdp2esp1.cloudfront.net/img/photo/254973/254973_00_2x.jpg");
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const CardHeading = styled.h2`
  position: absolute;
  left: 10%;
  top: 15%;
  right: 10%;
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  font-family: "Roboto Slab", serif;
  line-height: 1.222;
  small {
    display: block;
    font-size: 0.75em;
    font-weight: 400;
    margin-top: 0.25em;
  }
`;

const CardForm = styled.form`
  padding: 2rem 1rem 0;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  padding-top: 1.5rem;
`;

const InputField = styled.input`
  border: 0;
  z-index: 1;
  background-color: transparent;
  border-bottom: 2px solid #eee;
  font: inherit;
  font-size: 1.125rem;
  padding: 0.25rem 0;
  &:focus,
  &:valid {
    outline: 0;
    border-bottom-color: #167d23;
  }
`;

const Action = styled.div`
  margin-top: 2rem;
`;

const ActionButton = styled.button`
  font: inherit;
  font-size: 1.25rem;
  padding: 1em;
  width: 100%;
  font-weight: 500;
  background-color: #167d23;
  border-radius: 6px;
  color: #fff;
  border: 0;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

const CardInfo = styled.div`
  padding: 1rem 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #8597a3;
`;

const LoginComponent = () => {
  return (
    <div class="container">
      <Card>
        <CardImage>
          <CardHeading>
            Get started
            <small>Let us create your account</small>
          </CardHeading>
        </CardImage>
        <CardForm>
          <Input>
            <InputField type="text" required placeholder="Your name" />
          </Input>
          <Input>
            <InputField type="text" required placeholder="Email" />
          </Input>
          <Input>
            <InputField type="password" required placeholder="Password" />
          </Input>
          <Action>
            <ActionButton>Get started</ActionButton>
          </Action>
        </CardForm>
        <CardInfo>
          <p>
            By signing up you are agreeing to our{" "}
            <a href="#">Terms and Conditions</a>
          </p>
        </CardInfo>
      </Card>
    </div>
  );
};

export default LoginComponent;
