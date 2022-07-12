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
import { Link, useNavigate, useParams } from "react-router-dom";
import { TeamsAndGames } from "../../data/teams";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { FaShieldAlt } from "react-icons/fa";
import { IAnswers, IGameQuestions, IResult } from "../../models/IQuestions";
import { IoMdFootball } from "react-icons/io";
import { saveQuiz } from "../../services/StorageService";
import { IMAGES } from "../../assets/images";
import { Iimage, Iimages } from "../../models/IImages";

export const PlayGamePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [haveAnswered, setHaveAnswered] = useState(false);
  const [result, setResult] = useState<IResult[]>([]);
  const [game, setGame] = useState<ITeams>({
    id: 0,
    team: "",
    games: [],
  });

  const params = useParams();
  const navigate = useNavigate();

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
  }, [result]);

  useEffect(() => {
    saveQuiz(result);
  }, [result]);

  const handleClick = (x: IAnswers) => {
    setHaveAnswered(true);
    if (currentQuestion > 4) {
      navigate("/resultat");
    }
    if (x.isCorrect) {
      setResult([...result, { answer: x.answer, isCorrect: x.isCorrect }]);
    } else if (x.isCorrect === false) {
      setResult([...result, { answer: x.answer, isCorrect: x.isCorrect }]);
    }

    setTimeout(() => {
      setHaveAnswered(false);
      if (currentQuestion < 4) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigate("/resultat");
      }
    }, 2000);
  };

  const Footballs = () => {
    const [hasAnswer, setHasAnswer] = useState(false);
    let footballs: IResult[] = [];
    for (let i = 0; i < result.length; i++) {
      footballs.push(result[i]);
    }
    if (footballs.length > 5) {
      footballs.push({ answer: "xxxxxx", isCorrect: false });
    }
    return (
      <>
        {footballs.map((x: IAnswers) => {
          return (
            <IoMdFootball
              key={x.answer}
              color={
                hasAnswer
                  ? x.isCorrect
                    ? colors.CorrectGreen
                    : colors.WronglyRed
                  : colors.Darkgrey
              }
              size={"17px"}
            />
          );
        })}
      </>
    );
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
                  ].answers.map((x: IAnswers, i) => {
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
                        width={"40vh"}
                        key={x.answer}
                      >
                        {x.answer}
                      </StyledButton>
                    );
                  })}
                  <StyledP color={colors.TextBlue}>
                    <Footballs />
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
