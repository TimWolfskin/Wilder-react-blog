import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import { teamItems } from "../staticData/data";

const Wrapper = styled.div``;

const Header = styled.div`
  background-image: url("https://flipcause-production-assets.s3.amazonaws.com/assets/uploads/lookandfeel/outdoor-hammock-bushcraft-survival-w1280-o.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  text-align: center;
  padding: 200px;
  margin-top: 0px;
  margin-bottom: 165px;
`;

const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
`;

const HeaderTitle = styled.h4`
  color: #fff;
  font-family: "Roboto Slab", serif;
  font-size: 60px;
  line-height: 80px;
`;

const Content = styled.div``;

const About = styled.div`
  margin-bottom: 165px;
`;

const Title = styled.h3`
  color: #161722;
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

const Benefits = styled.div`
  margin-bottom: 165px;
`;

const BenefitsItems = styled.div``;

const BenefitsTitle = styled.h3`
  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  text-align: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #161722;
  margin-bottom: 65px;
`;

const BenefitsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 95px;
  max-width: 1024px;
  gap: 20px;
`;

const ItemContent = styled.div``;

const ItemTitle = styled.h4`
  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #161722;
  margin-bottom: 16px;
`;

const ItemText = styled.p`
  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #151c2c;
  max-width: 500px;
`;

const ItemImage = styled.img`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: contain;
  width: 500px;
  height: 320px;
`;

const Team = styled.div`
  margin-bottom: 128px;
`;

const InnerContainer = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  padding: 0 10px;
`;

const TeamTitle = styled.h4`
  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  text-align: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #161722;
  margin-bottom: 65px;
`;

const TeamItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamItem = styled.div`
  width: 302px;
  height: 366px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamImage = styled.img`
  width: 152px;
  height: 152px;
  background-size: cover;
  background-position: center;
  border: 8px solid #319b59;
  border-radius: 50%;
  margin-top: 48px;
  margin-bottom: 26px;
`;

const TeamName = styled.h6`
  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #161722;
  margin-bottom: 8px;
`;

const TeamPosition = styled.p`
  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #161722;
  opacity: 0.7;
  margin-bottom: 16px;
`;

const TeamSocial = styled.a`
  display: flex;
`;

const Socialtem = styled.div`
  &:not(:first-child) {
    padding-left: 10px;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #161722;
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
          <About>
            <Title>
              “I may not have gone where I intended to go, but I think I have
              ended up where I needed to be”
            </Title>
            <Text>
              <p>
                Vexillologist vape microdosing freegan pork belly deep v direct
                trade cray single-origin coffee street art. Viral shaman
                mustache master cleanse, pour-over affogato poutine copper mug
                marfa fanny pack normcore. Lo-fi pop-up banjo portland, echo
                park hammock chillwave literally post-ironic ramps subway tile
                kitsch. Shaman tumblr fixie echo park street art. Enamel pin
                vaporware wayfarers, organic succulents hella sustainable
                cardigan.
              </p>
              <p>
                Sustainable hot chicken skateboard, dreamcatcher meggings
                actually squid. Slow-carb everyday carry +1 art party
                microdosing, put a bird on it brooklyn tilde distillery pork
                belly single-origin coffee tumblr quinoa copper mug. Affogato
                cold-pressed unicorn, viral intelligentsia leggings raw denim
                kombucha tote bag messenger bag chambray vape coloring book
                scenester. Activated charcoal wayfarers church-key tote bag
                synth brunch. Retro cornhole
              </p>
            </Text>
          </About>

          <Benefits>
            <BenefitsTitle>
              THE benefits to
              <br /> read our blog
            </BenefitsTitle>
            <BenefitsItems>
              <BenefitsItem>
                <ItemContent>
                  <ItemTitle>find fulfillment and joy</ItemTitle>
                  <ItemText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </ItemText>
                </ItemContent>
                <ItemImage
                  src="https://www.ashevillechamber.org/wp-content/uploads/2017/11/Play-Outdoors-Marquee.jpg"
                  alt=""
                />
              </BenefitsItem>
              <BenefitsItem>
                <ItemImage
                  src="https://visitidaho.org/content/uploads/2017/03/hiking-fishhook-creek-trail-near-redfish-lake-stanley-2_28103939094_o-512x341.jpg"
                  alt=""
                />
                <ItemContent>
                  <ItemTitle>our team are trully outdoors lovers</ItemTitle>
                  <ItemText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </ItemText>
                </ItemContent>
              </BenefitsItem>
              <BenefitsItem>
                <ItemContent>
                  <ItemTitle>Always new information</ItemTitle>
                  <ItemText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </ItemText>
                </ItemContent>
                <ItemImage
                  src="https://cdn.shopify.com/s/files/1/0030/2963/1035/files/homepage_dan_10.11.22_1600x800_crop_top.jpg"
                  alt=""
                />
              </BenefitsItem>
              <BenefitsItem>
                <ItemImage
                  src="https://365atlantatraveler.com/wp-content/uploads/2022/04/fun-things-to-do-outside-1275x850.jpg"
                  alt=""
                />
                <ItemContent>
                  <ItemTitle>Only prowen information</ItemTitle>
                  <ItemText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </ItemText>
                </ItemContent>
              </BenefitsItem>
            </BenefitsItems>
          </Benefits>
        </Container>
        <Team>
          <InnerContainer>
            <TeamTitle>meet our Inspirational team</TeamTitle>
            <TeamItems>
              {teamItems.map((item) => (
                <TeamItem key={item.id}>
                  <TeamImage src={item.image} alt="" />
                  <TeamName>{item.name}</TeamName>
                  <TeamPosition>{item.position}</TeamPosition>
                  <TeamSocial>
                    <Socialtem>
                      <SocialLink href="">
                        <TwitterIcon />
                      </SocialLink>
                    </Socialtem>
                    <Socialtem>
                      <SocialLink href="">
                        <TelegramIcon />
                      </SocialLink>
                    </Socialtem>
                    <Socialtem>
                      <SocialLink href="">
                        <InstagramIcon />
                      </SocialLink>
                    </Socialtem>
                  </TeamSocial>
                </TeamItem>
              ))}
            </TeamItems>
          </InnerContainer>
        </Team>
      </Content>
    </Wrapper>
  );
};

export default AboutComponent;
