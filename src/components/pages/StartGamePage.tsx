import { Link } from "react-router-dom";
import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledImage } from "../StyledComponents/StyledImage";
import { FlexDiv } from "../StyledComponents/Wrappers";
import placeholder from "../../assets/background-placeholder.jpeg";
import Logoplaceholder from "../../assets/logo-placeholder.png";
import { colors } from "../StyledComponents/Styling/Mixins";
import { Curve } from "../partials/curve";

export const StartGamePage = () => {
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
          <FlexDiv dir='column' width='50%' gap='20px' margin='0 0 140px 0'>
            <FlexDiv dir='column' width='50%'>
              <FlexDiv gap='20px'>
                <StyledImage src={Logoplaceholder}></StyledImage>
                <StyledImage src={Logoplaceholder}></StyledImage>
              </FlexDiv>
              <StyledButton>
                <Link to={"/spela"}>Starta matchen</Link>
              </StyledButton>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </FlexDiv>
  );
};
