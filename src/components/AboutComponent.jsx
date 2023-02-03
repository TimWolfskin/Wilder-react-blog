import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";

const Wrapper = styled.div``;

const Header = styled.div`
  background-image: url("https://flipcause-production-assets.s3.amazonaws.com/assets/uploads/lookandfeel/outdoor-hammock-bushcraft-survival-w1280-o.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  text-align: center;
  padding: 200px;
  margin-top: 0px;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`;

const HeaderTitle = styled.h4`
  color: #fff;
  font-family: "Roboto Slab", serif;
  font-size: 60px;
  line-height: 80px;
`;

const Content = styled.div`
  padding: 130px 0 40px;
`;

const Title = styled.h3`
  color:  #363838;
  font-family: "Roboto Slab", serif;
  font-size: 36px;
  line-height: 60px;
  padding-bottom: 22px;
  margin-bottom: 22px;
  position: relative;
  max-width: 830px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 1px;
    background-color: #319b59;
  }
`;

const Text = styled.div`
  padding-left: 284px;
  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #151c2c;
  max-width: 1114px;
  p {
    margin-bottom: 30px;
  }
`;

const AboutComponent = () => {
  return (
    <Wrapper>
      <Header>
        <Container>
          <HeaderTitle>About Us</HeaderTitle>
        </Container>
      </Header>
      <Content>
        <Container>
          <Title>
          “I may not have gone where I intended to go, but I think I have ended up where I needed to be”
          </Title>
          <Text>
            <p>
              Vexillologist vape microdosing freegan pork belly deep v direct
              trade cray single-origin coffee street art. Viral shaman mustache
              master cleanse, pour-over affogato poutine copper mug marfa fanny
              pack normcore. Lo-fi pop-up banjo portland, echo park hammock
              chillwave literally post-ironic ramps subway tile kitsch. Shaman
              tumblr fixie echo park street art. Enamel pin vaporware wayfarers,
              organic succulents hella sustainable cardigan.
            </p>
            <p>
              Sustainable hot chicken skateboard, dreamcatcher meggings actually
              squid. Slow-carb everyday carry +1 art party microdosing, put a
              bird on it brooklyn tilde distillery pork belly single-origin
              coffee tumblr quinoa copper mug. Affogato cold-pressed unicorn,
              viral intelligentsia leggings raw denim kombucha tote bag
              messenger bag chambray vape coloring book scenester. Activated
              charcoal wayfarers church-key tote bag synth brunch. Retro
              cornhole
            </p>
          </Text>
        </Container>
      </Content>
    </Wrapper>
  );
};

export default AboutComponent;
