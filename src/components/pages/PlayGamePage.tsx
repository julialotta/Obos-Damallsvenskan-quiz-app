import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledImage } from "../StyledComponents/StyledImage";
import {
  StyledHeadingh3,
  StyledP,
} from "../StyledComponents/StyledTextElements";
import { FlexDiv } from "../StyledComponents/Wrappers";
import { useEffect, useState } from "react";
import { QuizByTeam } from "../../data/quiz";
import { colors } from "../StyledComponents/Styling/Mixins";
import { Curve } from "../partials/curve";
import { imageOnErrorHandler } from "../../services/Helpers";
import { ITeams } from "../../models/ITeams";
import { Link, useParams } from "react-router-dom";
import { TeamsAndGames } from "../../data/teams";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { FaShieldAlt } from "react-icons/fa";
import { IGameQuestions } from "../../models/IQuestions";
import { IoMdFootball } from "react-icons/io";

export const PlayGamePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState<ITeams>({
    id: 0,
    team: "",
    image: "",
    AOMemblem: "",
    background: "",
    games: [],
  });

  const params = useParams();

  useEffect(() => {
    for (let i = 0; i < TeamsAndGames.length; i++) {
      if (TeamsAndGames[i].id.toString() === params.id) {
        setGame(TeamsAndGames[i]);
        setIsLoading(false);
      }
    }
    function shuffle(array: IGameQuestions[]) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }
    shuffle(QuizByTeam[game.id].questionsAndAnswers);
  }, []);

  const handleClick = () => {
    if (currentQuestion + 1 < 5) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(":)");
    }
  };

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
              height='350px'
              background={colors.BackgroundBlue}
              z='0'
            >
              <FlexDiv
                position='relative'
                z='200'
                width='390px'
                height='380px'
                background={colors.BackgroundBlue}
              >
                <FlexDiv
                  top={"45px"}
                  left={"-160px"}
                  position='absolute'
                  z='200'
                >
                  <Link to='/'>
                    <FaShieldAlt color='white' size={"30px"} />
                  </Link>
                </FlexDiv>
                <FlexDiv top={"85px"} position='absolute' z='200'>
                  <StyledImage
                    position='absolute'
                    width='120px'
                    height='120px'
                    src={game.AOMemblem}
                    onError={imageOnErrorHandler}
                  ></StyledImage>
                </FlexDiv>
              </FlexDiv>
              <FlexDiv position='absolute' z='100' dir='column'>
                <StyledButton
                  background={colors.White}
                  height='min-content'
                  width='340px'
                  hoverColor='none'
                  hoverBackground='none'
                  hover='default'
                  transform='none'
                  padding={"1px"}
                  margin='100px 0 0 0'
                  border='#707070 1px solid'
                >
                  <StyledHeadingh3 color={colors.TextBlue} margin={"0"}>
                    {
                      QuizByTeam[game.id].questionsAndAnswers[currentQuestion]
                        .question
                    }
                  </StyledHeadingh3>
                </StyledButton>
              </FlexDiv>
              <StyledImage
                width='100%'
                height='100%'
                src={game.background}
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
              <FlexDiv dir='column' width='60%' gap='22px'>
                <FlexDiv
                  dir='column'
                  justify='start'
                  position='relative'
                  height='200px'
                  background={colors.White}
                >
                  {QuizByTeam[game.id].questionsAndAnswers[
                    currentQuestion
                  ].answers.map((x) => {
                    return (
                      <StyledButton
                        background={colors.ButtonBlue}
                        onClick={handleClick}
                        width={"40vh"}
                      >
                        {x.answer}
                      </StyledButton>
                    );
                  })}

                  <StyledP color={colors.TextBlue}>
                    Fråga {currentQuestion + 1} av 5
                    <IoMdFootball color={colors.Darkgrey} size={"23px"} />
                    <IoMdFootball color={colors.Darkgrey} size={"23px"} />
                    <IoMdFootball color={colors.Darkgrey} size={"23px"} />
                    <IoMdFootball color={colors.Darkgrey} size={"23px"} />
                    <IoMdFootball color={colors.Darkgrey} size={"23px"} />
                  </StyledP>
                </FlexDiv>
              </FlexDiv>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      )}
    </>
  );
};
