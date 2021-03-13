import styled from "styled-components";

function Contact() {
  return (
    <ContactWrapper id="contact">
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
            who wish to bring their products to the wider market.
          </p>
          <div className="contact-team-image-container">
            <img src="./images/team-photo.webp" alt="team" id="team-photo" />
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Organicks</h2>
          <form action="#">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="enquiry">Enquiry</label>
            <textarea type="text" rows="8" cols="50" name="enquiry" id="enquiry" />
            <a href="#" className="button">
              Submit
            </a>
          </form>
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
      h2 {
        padding: 1rem 0;
      }
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
    border-radius: 0.5rem;
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
  .contact-team-image-container {
    display: flex;
    justify-content: center;
  }
  #team-photo {
    border-radius: 0.5rem;
    box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 320px;
    margin: 2rem auto;
    object-fit: cover;
  }
  @media only screen and (max-width: 5120px) {
    .contact-container {
      width: 40%;
    }
  }
  @media only screen and (max-width: 3840px) {
    .contact-container {
      width: 40%;
    }
  }
  @media only screen and (max-width: 2560px) {
    .contact-container {
      width: 60%;
    }
  }
  @media only screen and (max-width: 1920px) {
    .contact-container {
      width: 80%;
    }
  }
  @media only screen and (max-width: 1024px) {
    .contact-container {
      width: 90%;
    }
  }
  @media only screen and (max-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr;
      .contact-form {
        padding: 2rem;
      }
    }
  }
`;
export default Contact;
