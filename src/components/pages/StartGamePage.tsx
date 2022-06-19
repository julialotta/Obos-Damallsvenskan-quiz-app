import { Link } from "react-router-dom";
import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledImage } from "../StyledComponents/StyledImage";
import { BubbleDiv, FlexDiv } from "../StyledComponents/Wrappers";
import placeholder from "../../assets/background-placeholder.jpeg";
import Logoplaceholder from "../../assets/logo-placeholder.png";

export const StartGamePage = () => {
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
          <StyledImage margin='0' src={Logoplaceholder}></StyledImage>
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
    </>
  );
};
