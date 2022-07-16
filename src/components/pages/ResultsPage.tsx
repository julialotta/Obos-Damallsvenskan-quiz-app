import { StyledImage } from "../StyledComponents/StyledImage";
import { FlexDiv } from "../StyledComponents/Wrappers";

import { StyledButton } from "../StyledComponents/StyledButton";
import {
  StyledHeadingh3,
  StyledHeadingh5,
  StyledP,
} from "../StyledComponents/StyledTextElements";
import { IoMdFootball } from "react-icons/io";
import { colors } from "../StyledComponents/Styling/Mixins";
import { Curve } from "../partials/curve";
import { imageOnErrorHandler } from "../../services/Helpers";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { getGame, getQuiz } from "../../services/StorageService";
import { useEffect, useState } from "react";
import { IGame } from "../../models/ITeams";
import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";
import { IResult } from "../../models/IQuestions";
import { IMAGES } from "../../assets/images";
import { Iimages } from "../../models/IImages";
import { Loader } from "../StyledComponents/Loader";

export const ResultsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<IResult[]>([]);

  const [game, setGame] = useState<IGame>({
    id: 0,
    team: "",
    link: "",
    opponent: "",
    opponentid: 0,
    arena: "",
    date: "",
  });

  useEffect(() => {
    setGame(getGame<IGame>());
    setResult(getQuiz);
  }, []);

  useEffect(() => {
    if (game != undefined) {
      setIsLoading(false);
    }
  }, [game]);

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
              height='370px'
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
                  top={"100px"}
                  left={"0"}
                  right={"0"}
                  position='absolute'
                >
                  <FlexDiv
                    dir='column'
                    align='center'
                    justify='start'
                    position='absolute'
                    z='100'
                    top={"-60px"}
                  >
                    <StyledHeadingh3>Ställningen</StyledHeadingh3>
                    <FlexDiv
                      dir='row'
                      position='absolute'
                      z='100'
                      align='end'
                      margin='10px 0 0 0'
                      top={"270px"}
                      gap={"30px"}
                    >
                      <StyledButton
                        transform='0'
                        background={colors.White}
                        height='200px'
                        width='80px'
                        hoverColor='none'
                        borderRad='2px'
                        hoverBackground='none'
                        hover='default'
                      >
                        <StyledHeadingh3 color={colors.TextBlue}>
                          450
                        </StyledHeadingh3>
                      </StyledButton>
                      <StyledButton
                        transform='0'
                        borderRad='2px'
                        background={colors.White}
                        height='140px'
                        width='80px'
                        hoverColor='none'
                        hoverBackground='none'
                        hover='default'
                      >
                        <StyledHeadingh3 color={colors.TextBlue}>
                          301
                        </StyledHeadingh3>
                      </StyledButton>
                    </FlexDiv>
                  </FlexDiv>
                </FlexDiv>
              </FlexDiv>
              <StyledImage
                width='100%'
                height='100%'
                borderRad={"5px"}
                src={IMAGES[game.id as keyof Iimages].background}
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
              <FlexDiv dir='column' width='60%' margin='-70px 0 0 0'>
                <FlexDiv gap='12px' margin='0 0 45px 0'>
                  {result.map((x: IResult) => {
                    return (
                      <IoMdFootball
                        key={x.answer}
                        color={
                          x.isCorrect ? colors.CorrectGreen : colors.WronglyRed
                        }
                        size={"25px"}
                      />
                    );
                  })}
                </FlexDiv>
                <FlexDiv gap='35px' margin='0 0 30px 0'>
                  <StyledImage
                    height='118px'
                    width='x'
                    src={IMAGES[game.id as keyof Iimages].logo}
                    onError={imageOnErrorHandler}
                  />

                  <StyledImage
                    width='x'
                    height='118px'
                    src={IMAGES[game.opponentid as keyof Iimages].logo}
                    onError={imageOnErrorHandler}
                  />
                </FlexDiv>
                <StyledP
                  fontSize='13px'
                  textTransform='uppercase'
                  margin='0'
                  color={colors.TextBlue}
                >
                  {game.team} - {game.opponent}
                </StyledP>
                <StyledP
                  fontSize='13px'
                  textTransform='uppercase'
                  margin='0'
                  color={colors.TextBlue}
                >
                  {game.arena}
                </StyledP>
                <StyledP fontSize='13px' margin='0' color={colors.TextBlue}>
                  {game.date}
                </StyledP>
                <StyledHeadingh5
                  textTransform='uppercase'
                  color={colors.TextBlue}
                >
                  GÖR ALLT FÖR {game.team}!
                </StyledHeadingh5>
                <a href={game.link}>
                  <StyledButton
                    margin='0px'
                    padding='22px'
                    width={"210px"}
                    height={"50px"}
                    shadow='#00000038 0px 3px 5px'
                  >
                    KÖP BILJETTER
                  </StyledButton>
                </a>
              </FlexDiv>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      )}
    </>
  );
};
