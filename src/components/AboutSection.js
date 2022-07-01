import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
// import { bounce } from 'react-animations';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/mecode.png';

const AboutSectionStyles = styled.div`
  padding: 5rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            duration={0.7}
            animateOut="fadeIn"
            delay={0}
            animateOnce
          >
            <SectionTitle
              subheading="Let me introduce myself"
              heading="About Me"
            />
            <PText>
              I studied at Centria University of Applied Sciences, Finland. My
              major is Software Engineer, I found myself really into Web
              programming at the begining of the second year. I have learned and
              did some self-projects to practice my skills after I acquired some
              basic of Web programming. I also have 1 year experience in this
              field.
            </PText>
            <div className="aboutSection__buttons">
              <Button btnText="Works" btnLink="/projects" />
              <Button btnText="Read More" btnLink="/about" outline />
            </div>
          </ScrollAnimation>
        </div>
        <div className="aboutSection__right">
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            duration={1}
            animateOut="fadeIn"
            delay={0.3}
            animateOnce
          >
            <img className="aboutImg" src={AboutImg} alt="Img" />
          </ScrollAnimation>
        </div>
      </div>
    </AboutSectionStyles>
  );
}
