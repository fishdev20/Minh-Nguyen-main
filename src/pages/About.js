import React from 'react';
import styled from 'styled-components';
import { MdSchool, MdBusinessCenter, MdLaptopChromebook } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import { saveAs } from 'file-saver';
import ScrollAnimation from 'react-animate-on-scroll';
import PText from '../components/PText';
import AboutImg from '../assets/images/me.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import CV from '../assets/files/cv.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  p {
    display: flex;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .about__info__icon {
    font-size: 3.6rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  const saveFile = () => {
    saveAs(`${CV}`, 'CV.pdf');
  };
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <ScrollAnimation
                animateIn="animate__fadeInLeft"
                duration={1}
                animateOut="fadeIn"
                delay={0}
                animateOnce
              >
                <p className="about__subheading">
                  Hi, I am &nbsp;<span>Truong Minh Nguyen</span>
                </p>
                <h2 className="about__heading">
                  I'm on my way to becoming a professional Web Developer
                </h2>
                <div className="about__info">
                  <PText>
                    I am 21 years old. I am from Hanoi, Vietnam, currently stay
                    in Helsinki,Finland.
                    <br /> <br />
                    I started coding since I was in Collage. Coding is a passion
                    for me. Especially in Web developing, I love it because I
                    can see what I am creating as well as create value for
                    people to use.
                    <br /> <br />I am a curious and progressive person, I am
                    really into learning new things, new technologies, partly
                    because they help me a lot at work.
                  </PText>
                </div>

                <button type="submit" onClick={saveFile}>
                  Download CV
                </button>
              </ScrollAnimation>
            </div>
            <div className="right">
              <ScrollAnimation
                animateIn="animate__fadeInRight"
                duration={1}
                animateOut="fadeIn"
                delay={0}
                animateOnce
              >
                <img src={AboutImg} alt="me" />
              </ScrollAnimation>
            </div>
          </div>
          <div className="about__info__items">
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
              animateOut="fadeIn"
              delay={0}
              animateOnce
            >
              <div className="about__info__item">
                <p>
                  <div>
                    <MdSchool className="about__info__icon" />
                  </div>
                  &nbsp;
                  <h1 className="about__info__heading">Education</h1>
                </p>

                <AboutInfoItem
                  title="University"
                  items={[
                    'Centria University of Applied Sciences, Bachelor of Software Engineer Degree',
                  ]}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
              animateOut="fadeIn"
              delay={0}
              animateOnce
            >
              <div className="about__info__item">
                <p>
                  <div>
                    <MdLaptopChromebook className="about__info__icon" />
                  </div>
                  &nbsp;
                  <h1 className="about__info__heading">Other Online Courses</h1>
                </p>

                <AboutInfoItem
                  title="Udemy | 2020"
                  items={['The web developer bootcamp']}
                />
                <AboutInfoItem
                  title="Udemy | 2021"
                  items={['React - The complete guide']}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
              animateOut="fadeIn"
              delay={0}
              animateOnce
            >
              <div className="about__info__item">
                <p>
                  <div>
                    <GiSkills className="about__info__icon" />
                  </div>
                  &nbsp;
                  <h1 className="about__info__heading">My Skills</h1>
                </p>

                <AboutInfoItem
                  title="Computer"
                  items={[
                    'Java basic',
                    'Linux basic',
                    'Git',
                    'Slack',
                    'Github',
                    'Visual Studio Code',
                    'JetBrains',
                  ]}
                />
                <AboutInfoItem
                  title="FrontEnd"
                  items={[
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'ES6',
                    'ReactJS',
                    'ReactNative',
                    'NextJS',
                    'Redux',
                    'Sass',
                  ]}
                />
                <AboutInfoItem
                  title=" UI Framework"
                  items={[
                    'Bootstrap',
                    'Material UI',
                    'Ant Design',
                    'Gsap',
                    'Frame Motion',
                  ]}
                />

                <AboutInfoItem
                  title="BackEnd"
                  items={['NodeJs', 'ExpressJs', 'MongoDb', 'Firebase']}
                />
                <AboutInfoItem
                  title="Design"
                  items={['Photoshop', 'Illustrators', 'Figma']}
                />
                <AboutInfoItem
                  title="Other skills"
                  items={['Photography', 'Videography']}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
              animateOut="fadeIn"
              delay={0}
              animateOnce
            >
              <div className="about__info__item">
                <p>
                  <div>
                    <MdBusinessCenter className="about__info__icon" />
                  </div>
                  &nbsp;
                  <h1 className="about__info__heading">Experiences</h1>
                </p>

                <AboutInfoItem
                  title="2021"
                  items={['Front-end Intern at AHT JSC, Hanoi, Vietnam']}
                />
                <AboutInfoItem
                  title="2021-2022"
                  items={[
                    'Web Developer at  ClassFunc Softwares, Hanoi, Vietnam',
                  ]}
                />
                <AboutInfoItem
                  title="03/2022"
                  items={[
                    'Software Developer at  Kassavirtanen Oy, Helsinki, Finland',
                  ]}
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
