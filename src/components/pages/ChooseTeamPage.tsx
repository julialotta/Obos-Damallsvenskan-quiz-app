import { Link } from "react-router-dom";
import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledImage } from "../StyledComponents/StyledImage";
import { BubbleDiv, FlexDiv } from "../StyledComponents/Wrappers";
import placeholder from "../../assets/background-placeholder.jpeg";
import logoplaceholder from "../../assets/logo-placeholder.png";
import { StyledHeadingh3 } from "../StyledComponents/StyledTextElements";

export const ChooseTeamPage = () => {
  return (
    <>
      <FlexDiv
        dir='column'
        width='100%'
        align='center'
        position='relative'
        height='100px'
        minHeight='400px'
        background='darkblue'
        z='0'
      >
        <FlexDiv position='absolute' z='100' margin={"0 0 100px 0"}>
          <StyledButton
            background='white'
            height='50px'
            width='200px'
            hoverColor='none'
            hoverBackground='none'
            hover='default'
          >
            <StyledHeadingh3>Välj klubb 👇</StyledHeadingh3>
          </StyledButton>
        </FlexDiv>
        <StyledImage
          width='100%'
          height='100%'
          src={placeholder}
          alt='Blue Pattern'
        />
      </FlexDiv>
      <BubbleDiv height='60%' />
      <FlexDiv
        dir='column'
        justify='start'
        align='center'
        position='relative'
        background='white'
      >
        <FlexDiv
          align='start'
          width='50%'
          gap='15px'
          wrap='wrap'
          margin='50px 0 100px 0'
        >
          <Link to={"/starta-matchen"}>
            <FlexDiv dir='column'>
              <StyledImage src={logoplaceholder}></StyledImage>
              Hammarby
            </FlexDiv>
          </Link>
          <Link to={"/starta-matchen"}>
            <FlexDiv dir='column'>
              <StyledImage src={logoplaceholder}></StyledImage>
              Hammarby
            </FlexDiv>
          </Link>
          <Link to={"/starta-matchen"}>
            <FlexDiv dir='column'>
              <StyledImage src={logoplaceholder}></StyledImage>
              Hammarby
            </FlexDiv>
          </Link>
          <Link to={"/starta-matchen"}>
            <FlexDiv dir='column'>
              <StyledImage src={logoplaceholder}></StyledImage>
              Hammarby
            </FlexDiv>
          </Link>
          <Link to={"/starta-matchen"}>
            <FlexDiv dir='column'>
              <StyledImage src={logoplaceholder}></StyledImage>
              Hammarby
            </FlexDiv>
          </Link>
          <Link to={"/starta-matchen"}>
            <FlexDiv dir='column'>
              <StyledImage src={logoplaceholder}></StyledImage>
              Hammarby
            </FlexDiv>
          </Link>
          <Link to={"/starta-matchen"}>
            <FlexDiv dir='column'>
              <StyledImage src={logoplaceholder}></StyledImage>
              Hammarby
            </FlexDiv>
          </Link>
          <Link to={"/starta-matchen"}>
            <FlexDiv dir='column'>
              <StyledImage src={logoplaceholder}></StyledImage>
              Hammarby
            </FlexDiv>
          </Link>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
