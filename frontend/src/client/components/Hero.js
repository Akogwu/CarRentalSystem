import React from 'react';
import styled from "styled-components";
import hero from "../assets/new-york.jpg";
import car from "../assets/benz.png";
import Form from "./Form";

const Hero = () => {
    return (
        <HeroSection bg={hero}>

            <Form/>
            <img src={car} alt="Car"/>
        </HeroSection>
    );
};


const  HeroSection = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  padding: 6rem;
  margin: 3rem;
  border-radius: 1rem;
  height: 75vh;
  position: relative;
  
  &::before{
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    top: 0;
    left: 0;
    border-radius: 1rem;
  }
  
  img{
    width: 60%;
    position: absolute;
    right: -5rem;
    bottom: -3rem;
  }
  
`;

export default Hero;