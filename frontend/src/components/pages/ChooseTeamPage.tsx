import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledImage } from "../StyledComponents/StyledImage";
import { FlexDiv, ImageDiv } from "../StyledComponents/Wrappers";
import { StyledHeadingh3 } from "../StyledComponents/StyledTextElements";
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
  }, []);

  return (
    <>
      <GlobalStyle />
      {isLoading ? (
        <FlexDiv height='50vh' align={"start"} margin={"40px 0 0 0"}>
          <Loader />
        </FlexDiv>
      ) : (
        <FlexDiv
          linear={"linear-gradient(to bottom right, #172542, #2e3b55)"}
          width={"100%"}
          height='100vh'
          align='start'
        >
          <ImageDiv
            dir='column'
            image={GeneralIMAGES.general.bluePatternBackground}
            width={"400px"}
            height={"100%"}
            maxHeight='787px'
            position={"relative"}
            shadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            }
          >
            <FlexDiv
              position='absolute'
              top={"20px"}
              left={"20px"}
              align='start'
              justify='start'
            >
              <Link to='/'>
                <FaShieldAlt color={colors.ShieldBlue} size={"30px"} />
              </Link>
            </FlexDiv>
            <FlexDiv
              dir='column'
              width='90%'
              justify={"start"}
              height={"100%"}
              margin={"120px 0 0 0"}
              gap='25px'
            >
              <StyledHeadingh3 color={colors.White}>
                Välj klubb 👇
              </StyledHeadingh3>
              <FlexDiv
                justify='center'
                align='start'
                width='90%'
                gap='25px'
                wrap='wrap'
                height='max-content'
              >
                {TeamsAndGames?.map((x) => {
                  return (
                    <Link to={`/starta-matchen/${x.id}`} key={x.id}>
                      <FlexDiv width='60px' hover='pointer'>
                        <StyledImage
                          height='55px'
                          width='x'
                          transform='scale(1.1)'
                          src={IMAGES[x.id as keyof Iimages].logo}
                          shadow={"#15314029 0px 3px 6px"}
                          onError={imageOnErrorHandler}
                        ></StyledImage>
                      </FlexDiv>
                    </Link>
                  );
                })}
              </FlexDiv>
            </FlexDiv>
          </ImageDiv>
        </FlexDiv>
      )}
    </>
  );
};
