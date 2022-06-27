import { StyledImage } from "../StyledComponents/StyledImage";
import { FlexDiv } from "../StyledComponents/Wrappers";

import { StyledButton } from "../StyledComponents/StyledButton";
import {
  StyledHeadingh3,
  StyledHeadingh5,
} from "../StyledComponents/StyledTextElements";
import { Link } from "react-router-dom";
import placeholder from "../../assets/background-placeholder.jpeg";
import { IoMdFootball } from "react-icons/io";
import { colors } from "../StyledComponents/Styling/Mixins";
import { Curve } from "../partials/curve";
import logoplaceholder from "../../assets/logo-placeholder.png";
import { imageOnErrorHandler } from "../../services/Helpers";

export const ResultsPage = () => {
  return (
    <FlexDiv
      background={colors.DarkBlue}
      width={"100%"}
      height='100%'
      dir={"column"}
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
          height='250px'
          background={colors.DarkBlue}
          z='0'
        >
          <FlexDiv dir='column' position='absolute' z='100'>
            <StyledHeadingh5>Ställningen</StyledHeadingh5>
            <FlexDiv dir='row' z='100' align='start' margin='10px 0 0 0'>
              <StyledButton
                transform='0'
                background={colors.White}
                height='50px'
                width='200px'
                hoverColor='none'
                hoverBackground='none'
                hover='default'
              >
                <StyledHeadingh3>X</StyledHeadingh3>
              </StyledButton>
              <StyledButton
                transform='0'
                background={colors.White}
                height='50px'
                width='200px'
                hoverColor='none'
                hoverBackground='none'
                hover='default'
              >
                <StyledHeadingh3>X</StyledHeadingh3>
              </StyledButton>
            </FlexDiv>
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
            <FlexDiv margin='0 0 20px 0'>
              <IoMdFootball size={"30px"} />
              <IoMdFootball size={"30px"} />
              <IoMdFootball size={"30px"} />
              <IoMdFootball size={"30px"} />
              <IoMdFootball size={"30px"} />
            </FlexDiv>
            <FlexDiv gap='15px'>
              <StyledImage
                width='70px'
                transform='scale(1.1)'
                src={logoplaceholder}
                onError={imageOnErrorHandler}
              />

              <StyledImage
                width='70px'
                transform='scale(1.1)'
                src={logoplaceholder}
                onError={imageOnErrorHandler}
              />
            </FlexDiv>
            <StyledButton margin='5px' padding='22px'>
              <Link to={"/"}>Köp biljetter!</Link>
            </StyledButton>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </FlexDiv>
  );
};
