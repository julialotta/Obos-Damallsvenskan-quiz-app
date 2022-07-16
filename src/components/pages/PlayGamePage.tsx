import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledImage } from "../StyledComponents/StyledImage";
import { StyledP } from "../StyledComponents/StyledTextElements";
import { FlexDiv } from "../StyledComponents/Wrappers";
import { useEffect, useState } from "react";
import { QuizByTeam } from "../../data/quiz";
import { colors } from "../StyledComponents/Styling/Mixins";
import { Curve } from "../partials/curve";
import { imageOnErrorHandler } from "../../services/Helpers";
import { IGame } from "../../models/ITeams";
import { Link, useNavigate } from "react-router-dom";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { FaShieldAlt } from "react-icons/fa";
import {
  IAnswers,
  IFootballs,
  IGameQuestions,
  IResult,
} from "../../models/IQuestions";
import { IoMdFootball } from "react-icons/io";
import { getGame, saveQuiz } from "../../services/StorageService";
import { IMAGES } from "../../assets/images";
import { Iimages } from "../../models/IImages";
import { Loader } from "../StyledComponents/Loader";
import { Timerwrapper } from "../StyledComponents/Timer";
import { writeData } from "../../services/db";

export const PlayGamePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [points, setPoints] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [haveAnswered, setHaveAnswered] = useState(false);
  const [result, setResult] = useState<IResult[]>([]);
  const [game, setGame] = useState<IGame>({
    id: 0,
    team: "",
    link: "",
    opponent: "",
    opponentid: 0,
    round: 0,
    arena: "",
    date: "",
  });
  const [classIsActive, setClassIsActive] = useState(true);
  const navigate = useNavigate();

  function twoSecondDelay() {
    setStartTime(Date.now());
    setClassIsActive(true);
    setHaveAnswered(false);
    if (startTime !== 0) {
      if (currentQuestion >= 5 || result.length > 4) {
        writeData(game.round.toString(), game.id.toString(), points);
        navigate("/resultat");
      } else {
        setCurrentQuestion(currentQuestion + 1);
        return;
      }
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassIsActive(false);
      setHaveAnswered(true);
      let newAnswer = {
        answer: "timeIsUp" + currentQuestion,
        isCorrect: false,
        time: 0,
      };
      setResult([...result, newAnswer]);
      saveQuiz([...result, newAnswer]);
      setTimeout(twoSecondDelay, 2500);
    }, 25000);
    return () => clearTimeout(timer);
  }, [currentQuestion, result]);

  useEffect(() => {
    saveQuiz(result);
    setGame(getGame<IGame>());
  }, [result]);

  useEffect(() => {
    if (game.team !== "") {
      setIsLoading(false);
    }
    setStartTime(Date.now());
  }, [game]);

  useEffect(() => {
    function shuffle(array: IGameQuestions[]) {
      let currentIndex = array.length,
        randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
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
  }, [game]);

  const handleClick = (x: IAnswers) => {
    setHaveAnswered(true);
    setClassIsActive(false);
    let endTime = Date.now();
    let secondsPassed =
      Math.floor(endTime / 1000) - Math.floor(startTime / 1000);
    if (x.isCorrect) {
      result.push({
        answer: x.answer,
        isCorrect: x.isCorrect,
        time: 25 - secondsPassed,
      });
      setPoints(points + 25 - secondsPassed);
      saveQuiz(result);
    } else if (x.isCorrect === false) {
      result.push({
        answer: x.answer,
        isCorrect: x.isCorrect,
        time: 25 - secondsPassed,
      });
      saveQuiz(result);
    }
    setTimeout(twoSecondDelay, 2000);
  };

  const Footballs = () => {
    let footballs: IFootballs[] = [];
    if (footballs.length < 5) {
      for (let i = 0; i < result.length; i++) {
        footballs.push({
          answer: result[i].answer,
          isCorrect: result[i].isCorrect,
          isAnswer: true,
        });
      }
    }
    for (let i = 0; i < 5; i++) {
      if (footballs.length < 5) {
        footballs.push({ answer: "x", isCorrect: false, isAnswer: false });
      }
    }

    return (
      <>
        {footballs.map((x: IFootballs, i: number) => {
          return (
            <StyledP key={i}>
              <IoMdFootball
                color={
                  x.isAnswer
                    ? x.isCorrect
                      ? colors.CorrectGreen
                      : colors.WronglyRed
                    : colors.Darkgrey
                }
                size={"22px"}
              />
            </StyledP>
          );
        })}
      </>
    );
  };

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
              height='385px'
              background={colors.BackgroundBlue}
              z='0'
            >
              <FlexDiv
                position='relative'
                z='200'
                width='390px'
                height='390px'
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
                <FlexDiv top={"80px"} position='absolute' z='200'>
                  <StyledImage
                    position='absolute'
                    width='x'
                    height='110px'
                    src={IMAGES[game.id as keyof Iimages].emblem}
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
                  padding={"0"}
                  margin='100px 0 0 0'
                  border='#707070 1px solid'
                >
                  <StyledP
                    color={colors.TextBlue}
                    fontSize={"15px"}
                    margin={"20px 10px 10px 10px"}
                    font={"GothamBook"}
                  >
                    {
                      QuizByTeam[game.id].questionsAndAnswers[currentQuestion]
                        .question
                    }
                  </StyledP>
                </StyledButton>
              </FlexDiv>
              <StyledImage
                width='100%'
                height='100%'
                min-minHeight='500px'
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
              margin='-50px 0 10px 0'
            >
              {haveAnswered ? (
                <FlexDiv height={"21px"} />
              ) : (
                <Timerwrapper>
                  <div
                    className={
                      classIsActive ? "bar baranimation" : "bar resetbar"
                    }
                  />
                  <IoMdFootball
                    size={"19px"}
                    color='white'
                    className={classIsActive ? "ballanimation" : "resetball"}
                  />
                </Timerwrapper>
              )}
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
                  ].answers.map((x: IAnswers, i: number) => {
                    return (
                      <StyledButton
                        transform={"none"}
                        hoverBackground={"none"}
                        background={
                          haveAnswered
                            ? x.isCorrect
                              ? "green"
                              : colors.ButtonBlue
                            : colors.ButtonBlue
                        }
                        onClick={
                          haveAnswered ? undefined : () => handleClick(x)
                        }
                        width={"240px"}
                        height={"min-content"}
                        key={i}
                      >
                        {x.answer}
                      </StyledButton>
                    );
                  })}
                  <FlexDiv margin='45px' gap={"12px"}>
                    <Footballs />
                  </FlexDiv>
                  <StyledP
                    fontSize='12px'
                    color={colors.TextBlue}
                    margin='0'
                    textTransform='uppercase'
                  >
                    {game.team} - {game.opponent} {game.date}
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
