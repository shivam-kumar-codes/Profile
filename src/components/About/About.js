import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Shivam Kumar</strong> a recent BTech graduate 
            in Electronics and Communications Engineering from MAIT, Delhi. 
            Over the past four years, I've honed my knowledge of data structures and 
            algorithms while developing robust web development skills encompassing both 
            frontend and backend technologies. As a self-motivated and diligent individual,
            I am eager to apply these skills within an organization, continually striving
            to learn and grow in the field.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;