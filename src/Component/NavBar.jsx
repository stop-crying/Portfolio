import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
  position : fixed;
  top: 0;
  z-index: 10;
  box-shadow: 0 23px 32px 0px rgba(0,0,0,.2);

  @media only screen and (max-width: 768px) {
    width: 100%;


  }
`;

const Conatiner = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  h1{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    cursor: pointer;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;


    @media only screen and (max-width: 768px) {
    display : none;
  
    }
  }
  a {
    color: white;
    font-size: 15px;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  img {
    width: 20px;
    cursor: pointer;
  }
  button {
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border-radius: 5px;
    font-size: 13px;
    border: none;
    cursor: pointer;
  }
`;

function NavBar() {
  return (
    <Section>
      <Conatiner>
        <Links>
          <h1>TIMELESS</h1>
          <nav>
            <a href="Home">Home</a>
            <a href="Studio">Studio</a>
            <a href="works">Works</a>
            <a href="contact">Contact</a>
          </nav>
        </Links>
        <Icons>
          <img
            src="https://github.com/safak/youtube23/blob/3d-portfolio/public/img/search.png?raw=true"
            alt=""
          />
          <button>Hire Now</button>
        </Icons>
      </Conatiner>
    </Section>
  );
}

export default NavBar;
