import styled from "styled-components";
import { useState } from "react";
function About() {
  const [Info] = useState([
    "Sourced from Australian Farmers",
    "100% Organic Solutions",
    "Unbeatable Freshness",
    "From Farm to Kitchen",
    "Competitive Pricing",
  ]);
  return (
    <AboutWrapper>
      <div className="about-container">
        <div className="info-container">
          <h2 className="monument">
            <span className="red-span">ORGA</span>NICKS
          </h2>
          {Info.map((info, index) => {
            return (
              <div className="info" key={index}>
                <img src="./images/Green-Check-Box.png" alt="box" />
                <p>{info}</p>
              </div>
            );
          })}
        </div>
        <div className="about-image-container">
          <img src="./images/about-image.webp" alt="tri-about" />
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;

const AboutWrapper = styled.div`
  display: flex;
  padding: 4rem 0;
  .about-container {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .info-container {
    margin-top: 50px;
    h2 {
      font-size: 2.5rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    font-size: 1.75rem;
    font-weight: 300;
    margin: 1rem 0;
    align-items: center;
    img {
      width: 25px;
      height: 25px;
    }
  }
  .about-image-container {
    display: flex;
    justify-content: flex-end;
    img {
      display: block;
    }
  }
  @media only screen and (max-width: 5120px) {
    .about-container {
      width: 40%;
    }
  }
  @media only screen and (max-width: 3840px) {
    .about-container {
      width: 40%;
    }
  }
  @media only screen and (max-width: 2560px) {
    .about-container {
      width: 60%;
    }
  }
  @media only screen and (max-width: 1920px) {
    .about-container {
      width: 80%;
    }
  }
  @media only screen and (max-width: 1024px) {
    .about-container {
      width: 90%;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0 0 4rem 0;
    .about-container {
      width: 90%;
    }
    .about-image-container {
      img {
        width: 100%;
      }
    }
  }
`;
