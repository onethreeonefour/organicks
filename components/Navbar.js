import React from "react";
import styled from "styled-components";
import Link from "next/link";

function Navbar() {
  return (
    <NavWrapper>
      <nav>
        <Link href="/">
          <h2 className="monument">
            <span className="red-span">ORGA</span>NICKS
          </h2>
        </Link>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#home">About</a>
          <a href="#home">Contact</a>
        </div>
        <div className="burger">
          <a href="#">Burger</a>
        </div>
      </nav>
    </NavWrapper>
  );
}

export default Navbar;
const NavWrapper = styled.nav`
  width: 100%;

  nav {
    padding: 1rem 0;
    position: absolute;
    left: 5%;
    display: flex;
    width: 90%;
    margin: auto;
    .nav-links {
      display: flex;
      align-items: center;
      gap: 3rem;
      margin-left: auto;
      color: white;
      font-size: 1.25rem;
    }
    .nav-links > a:hover {
      color: black;
    }
    h2 {
      font-weight: 400;
    }
    .burger {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    nav {
      .nav-links {
        display: none;
      }
      .burger {
        display: none;
        margin-left: auto;
      }
    }
  }
`;
