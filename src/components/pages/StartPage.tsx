import { StyledButton } from "../StyledComponents/StyledButton";
import { FlexDiv, ImageDiv } from "../StyledComponents/Wrappers";
import {
  StyledP,
  StyledTopHeading,
  StyledLink,
} from "../StyledComponents/StyledTextElements";
import { colors } from "../StyledComponents/Styling/Mixins";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { StyledImage } from "../StyledComponents/StyledImage";
import { GeneralIMAGES } from "../../assets/images";
import { useEffect, useState } from "react";
import { Loader } from "../StyledComponents/Loader";

export const StartPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (GeneralIMAGES) {
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
          background={colors.BackgroundBlue}
          width={"100%"}
          height='100%'
        >
          <ImageDiv
            dir='column'
            image={GeneralIMAGES.general.startBackground}
            borderRad={"5px"}
            bottom='15px'
            width={"390px"}
            minHeight='100vh'
            position={"relative"}
            shadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            }
          >
            <FlexDiv dir='column' width='90%' gap='22px'>
              <StyledImage
                height='100px'
                width='x'
                src={GeneralIMAGES.general.obosLogo}
                alt='DA logo'
                shadow='#00000057 3pt 3pt 3pt'
              />
              <StyledTopHeading
                color={colors.White}
                shadow='#0000005A 2pt 2pt 2pt'
              >
                Allt för klubben
              </StyledTopHeading>
              <StyledP color='white'>
                Matchen pågår även på läktaren, eller hur? Nu har ni chans att
                visa vilka supportrar som kan mest. <br />
                <br />
                Varje omgång får ni supportrar chans att via ett quiz visa vilka
                supportrar som kan mest om fotboll.
              </StyledP>
              <StyledLink to={"/valj-klubb"}>
                <StyledButton
                  margin='5px'
                  padding='22px'
                  width='181px'
                  color={colors.ButtonBlue}
                  hoverColor={colors.ButtonBlue}
                  background={colors.White}
                  hoverBackground={colors.White}
                  border='#707070 1pt solid'
                  shadow='#00000038 0px 3px 5px'
                >
                  STARTA MATCHEN
                </StyledButton>
              </StyledLink>
              <StyledImage
                height='x'
                width='240px'
                src={GeneralIMAGES.general.sponsorLogo}
                alt='Partner logos'
                shadow='#00000057 3pt 3pt 3pt'
              />
            </FlexDiv>
          </ImageDiv>
        </FlexDiv>
      )}
    </>
  );
};
