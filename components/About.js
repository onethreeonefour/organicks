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
                {info}
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
    font-size: 2rem;
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
`;
