import { StyledImage } from "../StyledComponents/StyledImage";
import { FlexDiv } from "../StyledComponents/Wrappers";

import { StyledButton } from "../StyledComponents/StyledButton";
import {
  StyledHeadingh3,
  StyledHeadingh5,
  StyledP,
} from "../StyledComponents/StyledTextElements";
import background from "../../assets/DA_startbakgrund@2x.png";
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
        <FlexDiv height='50vh' align={"start"}>
          <p>Laddar...</p>
        </FlexDiv>
      ) : (
        <FlexDiv
          background={colors.BackgroundBlue}
          width={"100%"}
          height='100%'
          dir={"column"}
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
              <FlexDiv dir='column' position='absolute' z='100'>
                <FlexDiv
                  top={"40px"}
                  left={"-160px"}
                  position='absolute'
                  z='200'
                >
                  <Link to='/'>
                    <FaShieldAlt color='white' size={"30px"} />
                  </Link>
                </FlexDiv>
                <StyledHeadingh5>Ställningen</StyledHeadingh5>
                <FlexDiv dir='row' z='100' align='start' margin='10px 0 0 0'>
                  <StyledButton
                    transform='0'
                    background={colors.White}
                    height='50px'
                    width='200px'
                    hoverColor='none'
                    hoverBackground='none'
                    hover='default'
                  >
                    <StyledHeadingh3>X</StyledHeadingh3>
                  </StyledButton>
                  <StyledButton
                    transform='0'
                    background={colors.White}
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
            >
              <FlexDiv dir='column' width='60%' gap='22px' margin='-70px 0 0 0'>
                <FlexDiv margin='0 0 20px 0'>
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
                <FlexDiv gap='15px'>
                  <StyledImage
                    width='70px'
                    src={IMAGES[game.id as keyof Iimages].logo}
                    onError={imageOnErrorHandler}
                  />

                  <StyledImage
                    width='70px'
                    src={IMAGES[game.opponentid as keyof Iimages].logo}
                    onError={imageOnErrorHandler}
                  />
                </FlexDiv>
                <StyledP margin='0' color={colors.TextBlue}>
                  {game.team} - {game.opponent}
                </StyledP>
                <StyledP margin='0' color={colors.TextBlue}>
                  {game.arena}
                </StyledP>
                <StyledP margin='0' color={colors.TextBlue}>
                  {game.date}
                </StyledP>
                <a href={game.link}>
                  <StyledButton margin='5px' padding='22px'>
                    Köp biljetter!
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
