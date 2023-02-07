import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import LoginComponent from "../components/LoginComponent";


const Wrapper = styled.div`

`;

const Login = () => {
  return (
    <Wrapper>
      <LoginComponent />
    </Wrapper>
  )
}

export default Login