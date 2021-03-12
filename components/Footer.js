import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <a href="https://lightontheland.design/">By LightOnTheLand Design</a>
    </FooterWrapper>
  );
}
const FooterWrapper = styled.footer`
  display: flex;
  background: #dfded8;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;

export default Footer;
