import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  padding-bottom: 5rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Minh Nguyen</h1>
          <PText>
            I am always willing to learn, develop and improve myself to be a
            better Web developer.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                icon: <MdLocalPhone />,
                title: '+358 449 824 682',
                path: 'tel:+358 449 824 682',
              },
              {
                icon: <MdEmail />,
                title: 'minhfish20hp@gmail.com',
                path: 'mailto:minhfish20hp@gmail.com',
              },
              {
                icon: <MdLocationOn />,
                title: 'Helsinki, Finland',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Social Links"
            links={[
              {
                icon: <FaFacebook />,
                title: 'Facebook',
                path: 'https://www.facebook.com/profile.php?id=100007809137819',
              },
              {
                icon: <FaGithub />,
                title: 'Github',
                path: 'https://github.com/fishdev20/',
              },
              {
                icon: <FaInstagram />,
                title: 'Instagram',
                path: 'https://www.instagram.com/minhngn.20/',
              },
              {
                icon: <FaLinkedin />,
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/minh-nguyen-4a2b22194/',
              },
            ]}
          />
        </div>
      </div>
    </FooterStyle>
  );
}
