import React from "react";
import styled from "styled-components";
import "../../styles/reset.css";
import "../../styles/Global.css";
import Sidebar from "./Sidebar";

const BlogOne = styled.div`
  margin: 150px 0 150px;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`;

const BlogInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlogItems = styled.div`
  max-width: 730px;
`;

const BlogOneItem = styled.div`
  margin-bottom: 80px;
  p {
    margin-bottom: 40px;
  }
`;

const BlogItemImage = styled.img`
  max-width: 730px;
  margin-bottom: 20px;
`;

const BlogItemInfo = styled.div`
  padding: 25px 0 10px;
  font-weight: 600;
  font-size: 14px;
  color: #707070;
  a {
    color: inherit;
  }
`;

const BlogItemDate = styled.span``;

const BlogItemAuthor = styled.a`
  font-weight: 600;
  font-size: 14px;
  color: #707070;
  text-decoration: none;
`;

const BlogItemTheme = styled.a`
  font-weight: 600;
  font-size: 14px;
  color: #707070;
  text-decoration: none;
`;

const BlogItemLink = styled.a`
  text-decoration: none;
`;

const BlogItemTitle = styled.h3`
  font-size: 24px;
  line-height: 38px;
  margin-bottom: 6px;
  color: #151c2c;
  font-family: "Roboto Slab", serif;
`;

const BlogOneText = styled.div`
  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #5a5a5a;
  max-width: 700px;
`;

const BlogOneTags = styled.div`
  margin-bottom: 30px;
`;

const BlogOneTagsTitle = styled.h4`
  color: #151c2c;
  font-family: "Roboto Slab", serif;
  font-size: 20px;
  line-height: 31px;
  margin-bottom: 15px;
`;

const BlogOneTagsLink = styled.a`
  color: #444;
  font-weight: 600;
  font-size: 14px;
  padding: 5px 16px;
  margin-bottom: 10px;
  margin-right: 10px;
  display: inline-block;
  border: 1px solid #167d23;
  border-radius: 14px;
  text-decoration: none;
`;

const BlogOneComments = styled.div``;

const BlogOneCommentsTitle = styled.h4`
  color: #151c2c;
  font-family: "Roboto Slab", serif;
  line-height: 31px;
  font-size: 20px;
  margin-bottom: 15px;
`;

const BlogOneCommentsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const BlogOneCommentsAvatar = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 13px;
`;

const BlogOneCommentsInfo = styled.div``;

const BlogOneCommentsName = styled.p`
  color: #151c2c;
  font-family: "Roboto Slab", serif;
  line-height: 23px;
`;

const BlogOneCommentsDate = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  color: #a1a1a1;
`;

const BlogOneCommentsText = styled.p`
  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #5a5a5a;
`;

const BlogOneReply = styled.button`
  background-color: transparent;
  margin-left: 5px;
  border: none;
  padding: 0;
  font-size: 14px;
  font-weight: 600;
  color: #707070;
`;

const BlogOneForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BlogOneFormTitle = styled.h4`
  margin-bottom: 25px;
  color: #151c2c;
  font-family: "Roboto Slab", serif;
  line-height: 23px;
`;

const BlogOneFormTextarea = styled.textarea`
  width: 100%;
  border: 1px solid #167d23;
  border-radius: 24px;
  padding: 14px 17px;
  min-height: 125px;
  margin-bottom: 12px;
  resize: none;
  &::placeholder {
    color: #a1a1a1;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    font-family: "Roboto Slab", serif;
  }
`;

const BlogOneFormInput = styled.input`
  border: 1px solid #167d23;
  border-radius: 20px;
  padding: 6px 17px;
  margin-bottom: 20px;
  width: 48%;
  &::placeholder {
    color: #a1a1a1;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    font-family: "Roboto Slab", serif;
  }
`;

const BlogOneFormLabelinput = styled.label`
  width: 100%;
  margin-bottom: 20px;
  font-size: 14px;
  color: #a1a1a1;
`;

const BlogOneFormButton = styled.button`
  border: none;
  background-color: #167d23;
  color: #fffff0;
  font-weight: 600;
  border-radius: 21px;
  padding: 6px 60px;
  cursor: pointer;
`;

const Single = () => {
  return (
    <div>
      <BlogOne>
        <Container>
          <BlogInner>
            <BlogItems>
              <BlogOneItem>
                <BlogItemInfo>
                  <BlogItemLink href="#">
                    <BlogItemTitle>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </BlogItemTitle>
                  </BlogItemLink>
                  <BlogItemDate>August 15, 2020</BlogItemDate> |
                  <BlogItemAuthor href="#">by Ann Summers</BlogItemAuthor> |
                  <BlogItemTheme href="#">Hunting and fishing</BlogItemTheme>
                </BlogItemInfo>
                <BlogItemImage
                  src="https://static01.nyt.com/images/2019/07/29/world/29india-tiger1/merlin_143414940_ea235a98-6d46-4c74-886d-6960ddfa86e9-superJumbo.jpg"
                  alt=""
                />

                <BlogOneText>
                  <p>
                    Everyday carry actually neutra authentic kogi shabby chic
                    migas small batch craft beer. Literally williamsburg tote
                    bag farm-to-table mustache ugh deep v irony. Af man bun
                    copper mug iPhone enamel pin pug selvage hammock palo santo
                    godard thundercats coloring book yuccie woke. Ugh pok pok
                    taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie
                    portland kickstarter, readymade ramps humblebrag ennui banjo
                    mumblecore vaporware pickled cray stumptown 8-bit mlkshk.
                    Tumeric tousled austin, kinfolk scenester authentic craft
                    beer truffaut irony intelligentsia YOLO lomo bushwick
                    coloring book. Semiotics man bun venmo viral cliche. Tousled
                    yr williamsburg austin edison bulb cloud bread vegan street
                    art. Locavore food truck trust fund palo santo asymmetrical,
                    franzen deep v marfa kogi whatever swag pop-up seitan.
                  </p>
                  <BlogItemImage
                    src="https://static01.nyt.com/images/2019/07/29/world/29india-tiger1/merlin_143414940_ea235a98-6d46-4c74-886d-6960ddfa86e9-superJumbo.jpg"
                    alt=""
                  />
                  <p>
                    Af man bun copper mug iPhone enamel pin pug selvage hammock
                    palo santo godard thundercats coloring book yuccie woke. Ugh
                    pok pok taxidermy pabst enamel pin edison bulb
                    farm-to-table. Yuccie portland kickstarter, readymade ramps
                    humblebrag ennui banjo mumblecore vaporware pickled cray
                    stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk
                    scenester authentic craft beer truffaut irony intelligentsia
                    YOLO lomo bushwick coloring book. Semiotics man bun venmo
                    viral cliche. Tousled yr williamsburg austin edison bulb
                    cloud bread vegan street art. Locavore food truck trust fund
                    palo santo asymmetrical, franzen deep v marfa kogi whatever
                    swag pop-up seitan.
                  </p>
                  <BlogItemImage
                    src="https://static01.nyt.com/images/2019/07/29/world/29india-tiger1/merlin_143414940_ea235a98-6d46-4c74-886d-6960ddfa86e9-superJumbo.jpg"
                    alt=""
                  />
                  <p>
                    Af man bun copper mug iPhone enamel pin pug selvage hammock
                    palo santo godard thundercats coloring book yuccie woke. Ugh
                    pok pok taxidermy pabst enamel pin edison bulb
                    farm-to-table. Yuccie portland kickstarter, readymade ramps
                    humblebrag ennui banjo mumblecore vaporware pickled cray
                    stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk
                    scenester authentic craft beer truffaut irony intelligentsia
                    YOLO lomo bushwick coloring book. Semiotics man bun venmo
                    viral cliche. Tousled yr williamsburg austin edison bulb
                    cloud bread vegan street art. Locavore food truck trust fund
                    palo santo asymmetrical, franzen deep v marfa kogi whatever
                    swag pop-up seitan.
                  </p>
                </BlogOneText>
                <BlogOneTags>
                  <BlogOneTagsTitle>Tags</BlogOneTagsTitle>
                  <BlogOneTagsLink href="#">outdoorskills</BlogOneTagsLink>
                  <BlogOneTagsLink href="#">bushcraft</BlogOneTagsLink>
                  <BlogOneTagsLink href="#">CampFire</BlogOneTagsLink>
                  <BlogOneTagsLink href="#">Bushcraft</BlogOneTagsLink>
                </BlogOneTags>
              </BlogOneItem>
              <BlogOneComments>
                <BlogOneCommentsTitle>Comments:</BlogOneCommentsTitle>
                <BlogOneCommentsItem>
                  <BlogOneCommentsAvatar
                    src="https://www.hollywoodreporter.com/wp-content/uploads/2021/05/GettyImages-1191359874-H-2021-1620057278.jpg"
                    alt=""
                  />
                  <BlogOneCommentsInfo>
                    <BlogOneCommentsName>Lea Brown</BlogOneCommentsName>
                    <BlogOneCommentsDate>August 12, 2020</BlogOneCommentsDate>
                    <BlogOneCommentsText>
                      Tumeric tousled austin, kinfolk scenester authentic craft
                      beer truffaut irony intelligentsia YOLO lomo bushwick
                      coloring book. Semiotics man bun venmo viral cliche
                    </BlogOneCommentsText>
                  </BlogOneCommentsInfo>
                  <BlogOneReply>Reply</BlogOneReply>
                </BlogOneCommentsItem>
              </BlogOneComments>
              <BlogOneForm>
                <BlogOneFormTitle>Post a Comment</BlogOneFormTitle>
                <BlogOneFormTextarea placeholder="Your comment"></BlogOneFormTextarea>
                <BlogOneFormInput type="text" placeholder="Your name" />
                <BlogOneFormInput type="email" placeholder="Your e-mail" />
                <BlogOneFormLabelinput>
                  <input style={{ marginRight: "10px" }} type="checkbox" />
                  Remember me
                </BlogOneFormLabelinput>
                <BlogOneFormButton type="submit">Submit</BlogOneFormButton>
              </BlogOneForm>
            </BlogItems>
            <Sidebar />
          </BlogInner>
        </Container>
      </BlogOne>
    </div>
  );
};

export default Single;
