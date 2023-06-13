import { StyledImage } from "../StyledComponents/StyledImage";
import { FlexDiv } from "../StyledComponents/Wrappers";
import { StyledButton } from "../StyledComponents/StyledButton";
import {
  StyledHeadingh3,
  StyledHeadingh5,
  StyledAnchor,
  StyledLink,
} from "../StyledComponents/StyledTextElements";
import { IoMdFootball } from "react-icons/io";
import { colors } from "../StyledComponents/Styling/Mixins";
import { Curve } from "../partials/curve";
import { imageOnErrorHandler } from "../../services/Helpers";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { getGame, getQuiz } from "../../services/StorageService";
import { useEffect, useState } from "react";
import { ITeams } from "../../models/ITeams";
import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";
import { IResult } from "../../models/IQuestions";
import { GeneralIMAGES, IMAGES } from "../../assets/images";
import { Iimages } from "../../models/IImages";
import { Loader } from "../StyledComponents/Loader";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const ResultsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<IResult[]>([]);
  const [points, setPoints] = useState("");
  const [homeTeamScore, setHomeTeamScore] = useState<number>(-1);
  const [game, setGame] = useState<ITeams>({
    id: 0,
    team: "",
    link: "",
  });

  useEffect(() => {
    setHomeTeamScore(20);
  }, []);

  useEffect(() => {
    setGame(getGame<ITeams>());
    setResult(getQuiz);
  }, []);

  useEffect(() => {
    let points: number = 0;
    for (let i = 0; i < result.length; i++) {
      points = points + result[i].time;
    }
    setPoints(points.toString());
  }, [result]);

  useEffect(() => {
    if (game !== undefined && homeTeamScore >= 0) {
      setIsLoading(false);
    }
  }, [game, homeTeamScore]);

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
            width={"400px"}
            minHeight='787px'
            shadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            }
          >
            <FlexDiv
              dir='column'
              position='relative'
              height='210px'
              background={colors.BackgroundBlue}
              z='0'
            >
              <FlexDiv
                position='relative'
                z='100'
                background={colors.BackgroundBlue}
              >
                <FlexDiv
                  height='100%'
                  dir='column'
                  position='absolute'
                  justify='start'
                  width='100%'
                  margin='100px 0 0 0 '
                >
                  <StyledHeadingh3 fontSize='25px' lineheight='30px'>
                    Du fixade <u>{points} poäng</u> <br />
                    till {game.team}
                  </StyledHeadingh3>
                </FlexDiv>
                <FlexDiv top={"40px"} left={"-160px"} position='absolute'>
                  <Link to='/'>
                    <FaShieldAlt color='white' size={"30px"} />
                  </Link>
                </FlexDiv>
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
              bottom='55px'
            >
              <FlexDiv dir='column' width='70%' margin='-70px 0 0 0'>
                <FlexDiv gap='12px' margin='0 0 20px 0'>
                  {result.map((x: IResult, i) => {
                    return (
                      <IoMdFootball
                        key={i}
                        color={
                          x.isCorrect ? colors.CorrectGreen : colors.WronglyRed
                        }
                        size={"25px"}
                      />
                    );
                  })}
                </FlexDiv>
                <FlexDiv>
                  <StyledImage
                    width='x'
                    margin='0 0 30px 0'
                    height='100px'
                    src={IMAGES[game.id as keyof Iimages].logo}
                    onError={imageOnErrorHandler}
                  />
                </FlexDiv>

                <StyledHeadingh5
                  color={colors.TextBlue}
                  margin={"25px 0 10px 0"}
                >
                  Gör allt för {game.team}!
                </StyledHeadingh5>
                <StyledAnchor
                  href={game.link}
                  id={game.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <StyledButton
                    margin='0px'
                    padding='22px'
                    width={"210px"}
                    height={"50px"}
                    shadow='#00000038 0px 3px 5px'
                  >
                    Köp biljetter
                  </StyledButton>
                </StyledAnchor>
                <StyledLink to='/stallning'>
                  <StyledButton
                    margin='0px'
                    padding='22px'
                    width={"210px"}
                    height={"50px"}
                    shadow='#00000038 0px 3px 5px'
                  >
                    Se ställningen
                  </StyledButton>
                </StyledLink>
                <StyledImage
                  height='x'
                  margin='60px 0 0 0'
                  width='240px'
                  src={GeneralIMAGES.general.sponsorLogoBlack}
                  alt='Partner logos'
                  shadow='#00000057 3pt 3pt 3pt'
                />
              </FlexDiv>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      )}
    </>
  );
};
