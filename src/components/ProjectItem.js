import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  /* .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  } */
  .projectItem__img {
    height: 450px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    width: 100%;
    padding: 1.5rem;
    position: relative;
    display: flex;
    align-items: flex-end;
    transition: 0.4s ease-out;
  }
  .projectItem__img:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
  .projectItem__img:hover {
    transform: translateY(20px);
    .projectItem__info {
      opacity: 1;
      transform: translateY(0px);
      margin-bottom: 20px;
    }
  }
  .projectItem__img:hover::before {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }
  .projectItem__info {
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;
  }
  .projectItem__title {
    margin: 0px;
    font-size: 2.2rem;
    color: white;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
    color: white;
  }
  .flex {
    display: flex;
  }
  button {
    height: 40px;
    margin-top: 10px;
    padding: 0.6rem;
    outline: none;
    border: none;
    border-radius: 8px;
    background: white;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;
    font-size: 20px;
  }
  button:hover {
    background: #1e1e1e;
    color: white;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 450px;
    }
  }
`;

export default function ProjectItem({ img = ProjectImg, title, desc, url }) {
  return (
    <ProjectItemStyles>
      <a href={url}>
        <div className="projectItem__img">
          <img src={img} alt="project img" to={url} />

          <div className="projectItem__info">
            <Link to="#">
              <h3 className="projectItem__title">{title}</h3>
            </Link>
            <p className="projectItem__desc">{desc}</p>
            <a href={url}>
              <button type="button"> VIEW PROJECT</button>
            </a>
          </div>
        </div>
      </a>
    </ProjectItemStyles>
  );
}
