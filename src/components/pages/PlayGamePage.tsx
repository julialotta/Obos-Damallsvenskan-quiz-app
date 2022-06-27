import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledImage } from "../StyledComponents/StyledImage";
import {
  StyledHeadingh3,
  StyledP,
  StyledTopHeading,
} from "../StyledComponents/StyledTextElements";
import { FlexDiv } from "../StyledComponents/Wrappers";
import placeholder from "../../assets/background-placeholder.jpeg";
import Logoplaceholder from "../../assets/logo-placeholder.png";
import { useState } from "react";
import { QuestionsAndAnswers } from "../../data/quiz";
import { colors } from "../StyledComponents/Styling/Mixins";
import { Curve } from "../partials/curve";
import { Link } from "react-router-dom";
import { imageOnErrorHandler } from "../../services/Helpers";

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
    <FlexDiv
      background={colors.DarkBlue}
      width={"100%"}
      dir={"column"}
      minHeight='100vh'
      justify='start'
      position={"relative"}
    >
      <FlexDiv
        dir={"column"}
        justify={"start"}
        background={colors.White}
        position={"relative"}
        borderRad={"5px"}
        bottom='15px'
        width={"390px"}
        minHeight='100vh'
        shadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        }
      >
        <FlexDiv
          dir='column'
          width='390px'
          position='relative'
          height='350px'
          background={colors.DarkBlue}
          z='0'
        >
          <FlexDiv position='absolute' z='100' dir='column'>
            <StyledImage
              width='70px'
              height='70px'
              margin='0'
              src={Logoplaceholder}
              onError={imageOnErrorHandler}
            ></StyledImage>
            <StyledButton
              background={colors.White}
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
            width='100%'
            height='100%'
            src={placeholder}
            alt='Blue Pattern'
          />
        </FlexDiv>
        <Curve />
        <FlexDiv
          dir='column'
          position='relative'
          background={colors.White}
          width='390px'
          bottom='55px'
        >
          <FlexDiv dir='column' width='60%' gap='22px'>
            <FlexDiv
              dir='column'
              justify='start'
              position='relative'
              height='200px'
              background={colors.White}
            >
              {QuestionsAndAnswers[currentQuestion].answers.map((x) => {
                return (
                  <StyledButton onClick={handleClick}>{x.answer}</StyledButton>
                );
              })}
              <StyledP>
                Fråga {currentQuestion + 1} av {QuestionsAndAnswers.length}
              </StyledP>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </FlexDiv>
  );
};
