import { FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Curve } from "./partials/curve";
import { StyledButton } from "./StyledComponents/StyledButton";
import { StyledImage } from "./StyledComponents/StyledImage";
import { StyledHeadingh3 } from "./StyledComponents/StyledTextElements";
import { GlobalStyle } from "./StyledComponents/Styling/fonts";
import { colors } from "./StyledComponents/Styling/Mixins";
import { FlexDiv } from "./StyledComponents/Wrappers";
import background from "../assets/DA_startbakgrund@2x.png";

export const NotFound = () => {
  return (
    <>
      <GlobalStyle />

      <FlexDiv
        background={colors.BackgroundBlue}
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
            background={colors.BackgroundBlue}
            z='0'
          >
            <FlexDiv
              position='relative'
              z='100'
              width='390px'
              height='250px'
              background={colors.BackgroundBlue}
            >
              <FlexDiv top={"40px"} left={"-160px"} position='absolute'>
                <Link to='/'>
                  <FaShieldAlt color='white' size={"30px"} />
                </Link>
              </FlexDiv>
            </FlexDiv>
            <StyledImage
              width='100%'
              height='100%'
              borderRad={"5px"}
              src={background}
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
            margin='-60px 0 0 0'
          >
            <StyledHeadingh3 color={colors.TextBlue}>
              Hoppsan! Nu blev det fel
            </StyledHeadingh3>
            <StyledButton>
              <Link to='/'>Till startsidan</Link>
            </StyledButton>
            <FlexDiv dir='column' width='100%' margin='0 0 10px 0'>
              <FlexDiv
                align='start'
                width='90%'
                gap='30px'
                wrap='wrap'
                margin='50px 0 90px 0'
              ></FlexDiv>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
