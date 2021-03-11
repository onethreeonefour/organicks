import styled from "styled-components";
import { useState } from "react";
function Hampers() {
  const [Hamper] = useState([
    {
      src: "./images/fruits.webp",
      title: "Fruit Hamper",
      body: "Bold freshness for the family. Make any gathering special with our selected fruits.",
    },
    {
      src: "./images/fruits-vegetables.webp",
      title: "Balanced Hamper",
      body: "Bold freshness for the family. Make any gathering special with our selected fruits.",
    },
    {
      src: "./images/vegetables.webp",
      title: "Vegetable Hamper",
      body: "Bold freshness for the family. Make any gathering special with our selected fruits.",
    },
  ]);
  return (
    <HamperWrapper id="hampers">
      <h1>Our Hampers</h1>
      <p>Handpicked hampers only available at selected retailers</p>
      <div className="hamper-container">
        {Hamper.map((el, index) => {
          return (
            <div className="hamper" key={index}>
              <img src={el.src} alt="hamper" />
              <h2>{el.title}</h2>
              <p>{el.body}</p>
            </div>
          );
        })}
      </div>
      <a href="#about" className="button">
        Meet Organicks
      </a>
    </HamperWrapper>
  );
}

export default Hampers;
const HamperWrapper = styled.div`
  padding: 4rem 0;
  background: #f11760;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .hamper-container {
    margin-top: 200px;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    width: 80%;

    .hamper {
      background: #bc134d;
      box-shadow: 5px 3px 6px rgba(0, 0, 0, 0.3);
      padding: 3rem 2rem 4rem 2rem;
      border-radius: 1rem;
      h2 {
        padding: 1rem 0;
      }
      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-top: -175px;
        border: 10px solid;
        border-color: #bc134d;
      }
    }
  }
  .button {
    display: inline-block;
    margin-top: 2rem;
    background: #3d26be;
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
  }
`;
