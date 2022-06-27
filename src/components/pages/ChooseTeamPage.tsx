import { Link } from "react-router-dom";
import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledImage } from "../StyledComponents/StyledImage";
import { FlexDiv } from "../StyledComponents/Wrappers";
import placeholder from "../../assets/background-placeholder.jpeg";
import logoplaceholder from "../../assets/logo-placeholder.png";
import logoph from "../../assets/logoph.png";
import { StyledHeadingh3 } from "../StyledComponents/StyledTextElements";
import { Curve } from "../partials/curve";
import { colors } from "../StyledComponents/Styling/Mixins";
import { FaShieldAlt } from "react-icons/fa";
import { TeamsAndGames } from "../../data/teams";
import { imageOnErrorHandler } from "../../services/Helpers";
export const ChooseTeamPage = () => {
  return (
    <FlexDiv
      background={colors.DarkBlue}
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
          background={colors.DarkBlue}
          z='0'
        >
          <FlexDiv position='absolute' z='100'>
            <FlexDiv z='100'>
              <FaShieldAlt />
            </FlexDiv>
            <StyledButton
              background={colors.White}
              height='50px'
              width='200px'
              hoverColor='none'
              hoverBackground='none'
              hover='default'
              transform='0'
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
        <Curve />
        <FlexDiv
          dir='column'
          position='relative'
          background={colors.White}
          width='390px'
          bottom='55px'
        >
          <FlexDiv dir='column' width='100%' margin='0 0 10px 0'>
            <StyledImage
              width='70px'
              src={logoph}
              onError={imageOnErrorHandler}
            ></StyledImage>
            <FlexDiv
              align='start'
              width='100%'
              gap='15px'
              wrap='wrap'
              margin='50px 0 100px 0'
            >
              {TeamsAndGames?.map((x) => {
                return (
                  <Link to={`/starta-matchen/${x.id}`}>
                    <StyledImage
                      width='70px'
                      transform='scale(1.1)'
                      src={x.image}
                      onError={imageOnErrorHandler}
                    ></StyledImage>
                  </Link>
                );
              })}

              <Link to={"/starta-matchen"}>
                <StyledImage
                  width='70px'
                  transform='scale(1.1)'
                  src={logoplaceholder}
                  onError={imageOnErrorHandler}
                ></StyledImage>
              </Link>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </FlexDiv>
  );
};
