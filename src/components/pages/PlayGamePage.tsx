import { Link, Navigate } from "react-router-dom";
import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledImage } from "../StyledComponents/StyledImage";
import {
  StyledHeadingh3,
  StyledP,
} from "../StyledComponents/StyledTextElements";
import { BubbleDiv, FlexDiv } from "../StyledComponents/Wrappers";
import placeholder from "../../assets/background-placeholder.jpeg";
import Logoplaceholder from "../../assets/logo-placeholder.png";
import { useState } from "react";
import { QuestionsAndAnswers } from "../../data/data";

export const PlayGamePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleClick = () => {
    if (currentQuestion + 1 < QuestionsAndAnswers.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("no more questions");
    }
  };

  return (
    <>
      <FlexDiv
        dir='column'
        width='100%'
        align='center'
        position='relative'
        height='300px'
        minHeight='400px'
        background='darkblue'
        z='0'
      >
        <FlexDiv
          position='absolute'
          dir='column'
          gap='10px'
          z='100'
          justify='start'
          margin='50px 0 0 0'
        >
          <StyledImage margin='0' src={Logoplaceholder}></StyledImage>
          <StyledButton
            background='white'
            height='min-content'
            width='340px'
            hoverColor='none'
            hoverBackground='none'
            hover='default'
            padding='5px'
          >
            <StyledHeadingh3>
              {QuestionsAndAnswers[currentQuestion].question}
            </StyledHeadingh3>
          </StyledButton>
        </FlexDiv>
        <StyledImage
          width='100vh'
          height='100%'
          src={placeholder}
          alt='Blue Pattern'
        />
      </FlexDiv>
      <BubbleDiv />
      <FlexDiv
        dir='column'
        align='center'
        justify='start'
        position='relative'
        height='200px'
        minHeight='400px'
        background='white'
      >
        {QuestionsAndAnswers[currentQuestion].answers.map((x) => {
          return <StyledButton onClick={handleClick}>{x.answer}</StyledButton>;
        })}
        <StyledP>
          Fråga {currentQuestion + 1} av {QuestionsAndAnswers.length}
        </StyledP>
      </FlexDiv>
    </>
  );
};
