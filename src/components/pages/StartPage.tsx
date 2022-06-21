import { Link } from "react-router-dom";
import { StyledButton } from "../StyledComponents/StyledButton";
import { FlexDiv } from "../StyledComponents/Wrappers";
import placeholder from "../../assets/background-placeholder.jpeg";
import { StyledImage } from "../StyledComponents/StyledImage";
import {
  StyledP,
  StyledTopHeading,
} from "../StyledComponents/StyledTextElements";
import { colors } from "../StyledComponents/Styling/Mixins";
import { Curve } from "../partials/curve";

export const StartPage = () => {
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
          height='220px'
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
          <FlexDiv dir='column' width='60%' gap='22px'>
            <StyledTopHeading>Allt för matchen</StyledTopHeading>
            <StyledP>
              Matchen pågår även på läktaren, eller hur? Nu har ni chans att
              visa vilka supportarar som kan mest. <br />
              <br />
              Varje omgång får ni supportrar chans att via ett quiz visa vilka
              supportrar som kan mest om fotboll.
            </StyledP>
            <StyledButton margin='5px' padding='22px'>
              <Link to={"/valj-klubb"}>Kom igång!</Link>
            </StyledButton>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </FlexDiv>
  );
};
