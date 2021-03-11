import Head from "next/head";
import styled from "styled-components";
import About from "../components/About";
import Hampers from "../components/Hampers";
import Retailers from "../components/Retailers";
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
      font-size: 3.2rem;
    }
  }
`;
