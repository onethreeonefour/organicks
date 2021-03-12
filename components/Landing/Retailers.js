import styled from "styled-components";

function Retailers() {
  return (
    <RetailersWrapper>
      <div className="retail-info-container">
        <h1>
          Join the <span className="red-span">ORGA</span>NICKS movement and taste the difference.
        </h1>
        <p>Participating Retailers</p>
        <div className="retailers-images">
          <img src="./images/aldi.png" alt="retailer" />
          <img src="./images/coles.png" alt="retailer" />
          <img src="./images/woolworths.png" alt="retailer" />
        </div>
        <p>
          <strong>ORGANICKS</strong> we here pride ourselves to always deliver the best products to its customers. We
          guarantee a 100% return policy if you are not satisfied.
        </p>
        <a href="#contact" className="button">
          Contact Us
        </a>
      </div>
      <div className="retail-image-container">
        <img src="./images/about-3.webp" alt="retailers" />
      </div>
    </RetailersWrapper>
  );
}

export default Retailers;

const RetailersWrapper = styled.div`
  display: grid;
  height: 100vh;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 4rem 0;
  .retail-info-container {
    width: 85%;
    margin: auto;
    h2 {
      margin: 1rem 0;
    }
    p:nth-child(2) {
      padding: 2rem 0;
    }
    p:nth-child(4) {
      padding: 2rem 0;
      font-size: 1.2rem;
    }
    .retailers-images {
      display: flex;
      gap: 1rem;
      img {
        border-radius: 50%;
        box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .retail-image-container {
    img {
      max-height: 85vh;
      width: 100%;
      object-fit: cover;
      display: block;
    }
  }
  .button {
    display: inline-block;
    background: #3d26be;
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    width: 90%;
    display: block;
    margin: auto;
    .retail-info-container {
      width: 100%;
      margin: auto;
      .retailers-images {
        gap: 1rem;
        overflow-x: scroll;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
    .retail-image-container {
      img {
        margin-top: 2rem;
        max-height: 50vh;
      }
    }
  }
`;
