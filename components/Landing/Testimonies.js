import styled from "styled-components";
import { useState } from "react";
function Testimonies() {
  const [Testimonies] = useState([
    {
      name: "Kate Bush",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et placerat est. Phasellus porttitor massa non metus iaculis dignissim. Nullam sodales ac est ",
    },
    {
      name: "Rina Sawayama",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et placerat est. Phasellus porttitor massa non metus iaculis dignissim. Nullam sodales ac est ",
    },
    {
      name: "Sky Ferreira",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et placerat est. Phasellus porttitor massa non metus iaculis dignissim. Nullam sodales ac est ",
    },
    {
      name: "Annie Clarke",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et placerat est. Phasellus porttitor massa non metus iaculis dignissim. Nullam sodales ac est ",
    },
    {
      name: "Mariya Takeuchi",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et placerat est. Phasellus porttitor massa non metus iaculis dignissim. Nullam sodales ac est ",
    },
    {
      name: "Angel Olsen",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et placerat est. Phasellus porttitor massa non metus iaculis dignissim. Nullam sodales ac est ",
    },
    {
      name: "Dua Lipa",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et placerat est. Phasellus porttitor massa non metus iaculis dignissim. Nullam sodales ac est ",
    },
  ]);
  return (
    <TestimoniesWrapper>
      <div>
        <h1>Testimonies</h1>
        <p>Check out these satisfied customers choosing ORGANICKS</p>
      </div>
      <div className="testimonies-wrapper">
        <div className="testimonies-flex-container">
          {Testimonies.map((el, index) => {
            return (
              <div key={index} className="card">
                <img src="./images/avatar.png" alt="avatar" />
                <p>{el.body}</p>
                <p>- {el.name}</p>
              </div>
            );
          })}
          <div className="gradient-flex"></div>
        </div>
      </div>
      <h1 style={{ margin: "2rem auto" }}>Become a better you! Starting with Organicks.</h1>
    </TestimoniesWrapper>
  );
}

export default Testimonies;
const TestimoniesWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #6046e8;
  padding: 3rem 0;
  color: white;
  text-align: center;
  flex-direction: column;
  .testimonies-wrapper {
    position: relative;
    width: 80%;
    margin: auto;
  }
  .testimonies-flex-container {
    margin: 3rem auto 0 auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    overflow-x: scroll;
    .card {
      flex-shrink: 0;
      border-radius: 1rem;
      background: #3d26be;
      padding: 3rem 1rem;
      box-shadow: 5px 3px 6px rgba(0, 0, 0, 0.2);
      width: 400px;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      margin: 2rem 0;
      img {
        height: 200px;
        width: 200px;
        padding: 1rem;
      }
    }
    .card :nth-child(3) {
      margin-top: 1rem;
      font-weight: 600;
    }
  }
  .gradient-flex {
    height: 425px;
    width: 200px;
    right: 0;
    position: absolute;
    background: linear-gradient(90deg, rgba(61, 38, 190, 0.02), #3d26be);
  }
  @media only screen and (max-width: 600px) {
  }
`;
