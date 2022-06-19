import { StyledImage } from "../StyledComponents/StyledImage";
import { BubbleDiv, FlexDiv } from "../StyledComponents/Wrappers";
import Logoplaceholder from "../../assets/logo-placeholder.png";
import { StyledButton } from "../StyledComponents/StyledButton";
import {
  StyledHeadingh3,
  StyledHeadingh5,
} from "../StyledComponents/StyledTextElements";
import { Link } from "react-router-dom";
import placeholder from "../../assets/background-placeholder.jpeg";

export const ResultsPage = () => {
  return (
    <>
      <FlexDiv
        dir='column'
        width='100%'
        align='center'
        position='relative'
        height='200px'
        minHeight='400px'
        background='darkblue'
        z='0'
      >
        <FlexDiv
          position='absolute'
          dir='column'
          z='100'
          justify='start'
          margin='100px 0 0 0'
        >
          <StyledHeadingh5>Ställningen</StyledHeadingh5>
          <FlexDiv
            position='absolute'
            dir='row'
            z='100'
            justify='start'
            margin='100px 0 0 0'
          >
            <StyledButton
              background='white'
              height='50px'
              width='200px'
              hoverColor='none'
              hoverBackground='none'
              hover='default'
            >
              <StyledHeadingh3>X</StyledHeadingh3>
            </StyledButton>
            <StyledButton
              background='white'
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
          width='100vh'
          height='100%'
          src={placeholder}
          alt='Blue Pattern'
        />
      </FlexDiv>
      <BubbleDiv></BubbleDiv>
      <FlexDiv
        dir='column'
        align='center'
        position='relative'
        height='200px'
        minHeight='400px'
        background='white'
      >
        <StyledButton>
          <Link to={"/resultat"}>Svar 1</Link>
        </StyledButton>
        <StyledButton>
          <Link to={"/resultat"}>Svar 2</Link>
        </StyledButton>
        <StyledButton>
          <Link to={"/resultat"}>Svar 3</Link>
        </StyledButton>
        <FlexDiv dir='column' width='50%'>
          <StyledButton>
            <>
              <Link to={"/resultat"}>Avsluta quiz</Link>
            </>{" "}
          </StyledButton>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
