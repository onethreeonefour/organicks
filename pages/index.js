import Head from "next/head";
import styled from "styled-components";
import About from "../components/Landing/About";
import Hampers from "../components/Landing/Hampers";
import Retailers from "../components/Landing/Retailers";
import Testimonies from "../components/Landing/Testimonies";
import Contact from "../components/Landing/Contact";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Organicks - Farm Fresh Organics To Your Kitchen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroWrapper>
        <div className="hero-info">
          <span>Healthy Eating Has Gotten Easier</span>
          <h1>100% Natural Australian Grown Hand Picked Fruits & Vegetables Hampers </h1>
          <a href="#hampers" className="hero-button">
            Find Out More
          </a>
        </div>
        <div>
          <img src="./images/hero.webp" alt="hero" />
        </div>
      </HeroWrapper>
      <About />
      <Hampers />
      <Retailers />
      <Testimonies />
      <Contact />
    </div>
  );
}
const HeroWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  height: 100vh;
  img {
    display: block;
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }

  .hero-info {
    width: 80%;
    margin: auto;
    .hero-button {
      display: inline-block;
      margin-top: 2rem;
      background: #3d26be;
      color: white;
      padding: 1rem;
      border-radius: 1rem;
      cursor: pointer;
    }
    span {
      color: #918d8d;
      text-transform: uppercase;
      font-weight: 600;
    }
    h1 {
      margin: 0;
      font-size: 3.5vw;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    padding: 4rem 0;
    grid-template-columns: 1fr;
    img {
      height: 40vh;
    }
    .hero-info {
      width: 90%;
      margin: auto;
      .hero-button {
        margin: 2rem 0;
      }
      h1 {
        font-size: 2.5rem;
      }
    }
  }
`;
