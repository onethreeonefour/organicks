import styled from "styled-components";

function Contact() {
  return (
    <ContactWrapper>
      <div className="contact-container">
        <div>
          <h1>About Organicks</h1>
          <p>
            <strong>Organicks</strong> started as a company in 2015 as a dream where we wanted all Australians to
            experience the real difference between organic fresh vegetables and fruits compared to the mass production
            stuff in the market <br />
            <br />
            We pride ourselves to not only our products but to our trusted customers on delivering the products they
            truly want and need. <br />
            <br />
            Here at <strong>Organicks</strong> we can also set up a business relationship with any independent farmer
            who wish to bring their products to the wider market. <br /> <br />
            So don't delay <strong>Organicks</strong> is here to stay!
          </p>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <label htmlFor="Name">Name</label>
          <input type="text" />
          <label htmlFor="Name">Name</label>
          <input type="text" />
          <label htmlFor="Name">Enquiry</label>
          <textarea type="text" rows="8" cols="50" />
          <a href="#" className="button">
            Submit
          </a>
        </div>
      </div>
    </ContactWrapper>
  );
}
const ContactWrapper = styled.div`
  padding: 4rem 0;

  .contact-container {
    align-items: center;
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    h1 {
      padding-bottom: 2rem;
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      padding: 4rem;
      border-radius: 1rem;
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
  .button {
    display: inline-block;
    margin-top: 2rem;
    background: #e12061;
    color: white;
    text-align: center;
    width: 100px;
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
  }
  input,
  textarea {
    width: 100%;
    border-radius: 0.3rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-color: rgba(0, 0, 0, 0.25);
  }
  @media only screen and (max-width: 600px) {
    .contact-container {
      grid-template-columns: 1fr;
      width: 90%;
      .contact-form {
        padding: 2rem;
      }
    }
  }
`;
export default Contact;
