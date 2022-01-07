
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {sliderItems} from "../data"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(248, 217, 217);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
 
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  algin-items: center;
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;

`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
font-size:70px
`;
const Description = styled.p`
margin: 50px 0px; 
font-size: 20px;
font-weight: 500;
letter-spacing:3px;
`;
const Button = styled.button`

background-color: black;
color:white;
padding-left: 15px;
padding-right: 15px;
padding-bottom: 10px;
padding-top: 10px;
margin:30px 0;
border-radius: 30px;
cursor: pointer;
`;

const PicSlider = () => {
    const [ slideIndex, setSlideIndex]= useState(0);
    const handleClick = (direction) =>{
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }
    };
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
        >
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
          {sliderItems.map(item =>(
        <Slide bg={item.bg} key={item.id}>
          <ImageContainer>
            <Image src={item.img} />
          </ImageContainer>
          <InfoContainer>
             <Title> {item.title}</Title>
             <Description>{item.desc}</Description>
             <Button>SHOP NOW
             </Button>
             
          </InfoContainer>
        </Slide>
        ))}
     
      </Wrapper>

      <Arrow direction="right" onClick={()=>handleClick("left")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </Arrow>
    </Container>
  );
};

export default PicSlider;
