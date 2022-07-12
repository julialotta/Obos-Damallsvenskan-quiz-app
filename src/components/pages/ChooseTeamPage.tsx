import { Link } from "react-router-dom";
import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledImage } from "../StyledComponents/StyledImage";
import { FlexDiv } from "../StyledComponents/Wrappers";
import background from "../../assets/DA_startbakgrund@2x.png";
import logoDA from "../../assets/Liga-sponsor/DA_logo@3x.png";
import { StyledHeadingh3 } from "../StyledComponents/StyledTextElements";
import { Curve } from "../partials/curve";
import { colors } from "../StyledComponents/Styling/Mixins";
import { FaShieldAlt } from "react-icons/fa";
import { TeamsAndGames } from "../../data/teams";
import { imageOnErrorHandler } from "../../services/Helpers";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { IMAGES } from "../../assets/images";
import { Iimage, Iimages } from "../../models/IImages";

export const ChooseTeamPage = () => {
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
              <FlexDiv top={"110px"} left={"0"} right={"0"} position='absolute'>
                <StyledButton
                  background={colors.White}
                  height='50px'
                  width='309px'
                  hoverColor='none'
                  hoverBackground='none'
                  hover='default'
                  transform='0'
                >
                  <StyledHeadingh3 fontSize='30px' color={colors.ButtonBlue}>
                    Välj klubb 👇
                  </StyledHeadingh3>
                </StyledButton>
              </FlexDiv>
            </FlexDiv>
            <StyledImage
              width='100%'
              height='100%'
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
            <FlexDiv dir='column' width='100%' margin='0 0 10px 0'>
              <StyledImage
                width='100px'
                height='x'
                src={logoDA}
                shadow={"#00000027 1px 1px 2px"}
                onError={imageOnErrorHandler}
              ></StyledImage>
              <FlexDiv
                align='start'
                width='90%'
                gap='30px'
                wrap='wrap'
                margin='50px 0 90px 0'
              >
                {TeamsAndGames?.map((x) => {
                  return (
                    <Link to={`/starta-matchen/${x.id}`} key={x.id}>
                      <StyledImage
                        width='x'
                        height='58px'
                        transform='scale(1.1)'
                        src={IMAGES[x.id as keyof Iimages].logo}
                        shadow={"#15314029 0px 3px 6px"}
                        onError={imageOnErrorHandler}
                      ></StyledImage>
                    </Link>
                  );
                })}
              </FlexDiv>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
