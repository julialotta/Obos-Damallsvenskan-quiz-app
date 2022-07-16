import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledImage } from "../StyledComponents/StyledImage";
import { FlexDiv } from "../StyledComponents/Wrappers";
import {
  StyledHeadingh3,
  StyledP,
} from "../StyledComponents/StyledTextElements";
import { Curve } from "../partials/curve";
import { colors } from "../StyledComponents/Styling/Mixins";
import { FaShieldAlt } from "react-icons/fa";
import { TeamsAndGames } from "../../data/teams";
import { imageOnErrorHandler } from "../../services/Helpers";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { GeneralIMAGES, IMAGES } from "../../assets/images";
import { Iimages } from "../../models/IImages";
import { Loader } from "../StyledComponents/Loader";

export const ChooseTeamPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (IMAGES) {
      setIsLoading(false);
    }
  });

  return (
    <>
      <GlobalStyle />
      {isLoading ? (
        <FlexDiv height='50vh' align={"start"} margin={"40px 0 0 0"}>
          <Loader />
        </FlexDiv>
      ) : (
        <FlexDiv
          //background={"linear-gradient"}
          linear={"linear-gradient(to bottom right, #172542, #2e3b55)"}
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
                <FlexDiv
                  top={"110px"}
                  left={"0"}
                  right={"0"}
                  position='absolute'
                >
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
                borderRad={"5px"}
                src={GeneralIMAGES.general.bluePatternBackground}
                loading={"eager"}
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
              margin='-70px 0 0 0'
            >
              <FlexDiv
                dir='column'
                width='100%'
                margin='0 0 5px 0'
                justify='center'
                align='center'
              >
                <StyledImage
                  width='100px'
                  height='x'
                  src={GeneralIMAGES.general.obosLogo}
                  shadow={"#00000027 1px 1px 2px"}
                  onError={imageOnErrorHandler}
                ></StyledImage>
                <FlexDiv
                  align='start'
                  justify='center'
                  width='80%'
                  gap='30px'
                  wrap='wrap'
                  margin='40px 0 30px 0'
                >
                  {TeamsAndGames?.map((x) => {
                    return (
                      <Link to={`/starta-matchen/${x.id}`} key={x.id}>
                        <StyledImage
                          width='55px'
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
      )}
    </>
  );
};
