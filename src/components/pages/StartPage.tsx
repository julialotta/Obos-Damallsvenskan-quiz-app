import { Link } from "react-router-dom";
import { StyledButton } from "../StyledComponents/StyledButton";
import { BubbleDiv, FlexDiv } from "../StyledComponents/Wrappers";
import placeholder from "../../assets/background-placeholder.jpeg";
import { StyledImage } from "../StyledComponents/StyledImage";
import {
  StyledP,
  StyledTopHeading,
} from "../StyledComponents/StyledTextElements";

export const StartPage = () => {
  return (
    <>
      <FlexDiv
        dir='column'
        width='100%'
        align='center'
        position='relative'
        height='100px'
        minHeight='300px'
        background='darkblue'
        z='0'
      >
        <StyledImage
          width='100vh'
          height='100%'
          src={placeholder}
          alt='Blue Pattern'
        />
      </FlexDiv>
      <BubbleDiv height='70%' />
      <FlexDiv
        dir='column'
        align='center'
        position='relative'
        background='white'
      >
        <FlexDiv dir='column' width='50%' gap='20px' margin='0 0 140px 0'>
          <StyledTopHeading>Allt för matchen</StyledTopHeading>
          <StyledP>
            Matchen pågår även på läktaren, eller hur? Nu har ni chans att visa
            vilka supportarar som kan mest. <br />
            <br />
            Varje omgång får ni supportrar chans att via ett quiz visa vilka
            supportrar som kan mest om fotboll.
          </StyledP>
          <StyledButton margin='10px' padding='22px'>
            <Link to={"/valj-klubb"}>Kom igång!</Link>
          </StyledButton>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
