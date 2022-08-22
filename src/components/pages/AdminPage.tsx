import { StyledImage } from "../StyledComponents/StyledImage";
import { FlexDiv } from "../StyledComponents/Wrappers";
import { StyledButton } from "../StyledComponents/StyledButton";
import {
  StyledHeadingh3,
  StyledHeadingh5,
  StyledP,
} from "../StyledComponents/StyledTextElements";
import { IoMdFootball } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { colors } from "../StyledComponents/Styling/Mixins";
import { Curve } from "../partials/curve";
import { imageOnErrorHandler } from "../../services/Helpers";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { IGame } from "../../models/ITeams";
import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";
import { IData, IResult } from "../../models/IQuestions";
import { IMAGES } from "../../assets/images";
import { Iimages } from "../../models/IImages";
import { Loader } from "../StyledComponents/Loader";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/db";
import { modalStylesResults } from "../StyledComponents/Styling/modalStylesResults";

export const AdminPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<IResult[]>([]);
  const [points, setPoints] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [homeTeamScore, setHomeTeamScore] = useState<number>(-1);
  const [awayTeamScore, setAwayTeamScore] = useState<number>(-1);
  const [game, setGame] = useState<IGame>({
    id: 0,
    team: "",
    round: 0,
    link: "",
    opponent: "",
    opponentid: 0,
    arena: "",
    date: "",
  });

  useEffect(() => {}, []);
  useEffect(() => {
    let points: number = 0;
    for (let i = 0; i < result.length; i++) {
      points = points + result[i].time;
    }
    setPoints(points.toString());
  }, [result]);

  const fetchHomeData = async () => {
    let list: IData[] = [];
    let total: number = 0;
    const querySnapshot = await getDocs(collection(db, "16"));
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });
    for (let i = 0; i < list.length; i++) {
      total = total + list[i].data.points;
    }
    if (list.length > 0) {
      setHomeTeamScore(total);
    } else {
      setHomeTeamScore(0);
    }
  };
  fetchHomeData().catch(console.error);

  const fetchAwayData = async () => {
    let total: number = 0;
    let list: IData[] = [];

    const querySnapshot = await getDocs(
      collection(db, game.round + "/" + game.opponentid, "/scores/")
    );
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });
    for (let i = 0; i < list.length; i++) {
      total = total + list[i].data.points;
    }
    if (list.length > 0) {
      setAwayTeamScore(total);
    } else {
      setAwayTeamScore(0);
    }
  };
  fetchAwayData().catch(console.error);

  useEffect(() => {
    if (game !== undefined && homeTeamScore >= 0 && awayTeamScore >= 0) {
      setIsLoading(false);
    }
  }, [game, homeTeamScore, awayTeamScore]);

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
            minHeight='100vh'
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
                  justify='start'
                  width='70%'
                  margin='100px 0 0 0 '
                >
                  <StyledHeadingh3 fontSize='25px' lineheight='30px'>
                    Du fixade <u>{points} poäng</u> till {game.team}
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
              <FlexDiv dir='column' width='60%' margin='-70px 0 0 0'>
                <FlexDiv gap='12px' margin='0 0 30px 0'>
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
                <Modal
                  isOpen={modalIsOpen}
                  contentLabel='Kakor'
                  style={modalStylesResults}
                >
                  <FlexDiv
                    dir='column'
                    height={"30vh"}
                    justify={"center"}
                    width={"100%"}
                  >
                    <StyledButton onClick={() => setIsOpen(false)}>
                      Stäng
                    </StyledButton>
                    <StyledP color={colors.TextBlue}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      In eveniet, vero, possimus repellat animi esse delectus
                      tempore optio itaque explicabo placeat nobis dolores
                      voluptatibus sint repellendus, error ducimus corporis
                      odit?
                    </StyledP>
                  </FlexDiv>
                </Modal>
                <FlexDiv align='center' justify='center'>
                  <StyledHeadingh3 fontSize='20px' color={colors.TextBlue}>
                    Ställningen
                  </StyledHeadingh3>
                  <FlexDiv width='15px' hover='pointer'>
                    <AiOutlineInfoCircle
                      color={colors.TextBlue}
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    />
                  </FlexDiv>
                </FlexDiv>

                <FlexDiv dir='column' align='center' justify='start'>
                  <FlexDiv dir='row' align='end' margin='0' gap={"30px"}>
                    <FlexDiv dir='column' margin='20px 0 0 0'>
                      <StyledButton
                        transform='0'
                        background={colors.ResultBlue}
                        height={homeTeamScore / 4 + 35 + "px"}
                        width='80px'
                        hoverColor='none'
                        borderRad='2px'
                        hoverBackground='none'
                        hover='default'
                        margin='0 0 30px 0'
                      >
                        <FlexDiv dir='column'>
                          <StyledHeadingh3
                            color={colors.White}
                            fontSize='20px'
                            margin='0'
                          >
                            {~~homeTeamScore}
                          </StyledHeadingh3>
                          <StyledP margin='-8px 0 0 0' fontSize='10px'>
                            poäng
                          </StyledP>
                        </FlexDiv>
                      </StyledButton>
                      <StyledImage
                        margin='0 0 30px 0'
                        height='100px'
                        width='x'
                        src={IMAGES[game.id as keyof Iimages].logo}
                        onError={imageOnErrorHandler}
                      />
                    </FlexDiv>
                    <FlexDiv dir='column'>
                      <StyledButton
                        transform='0'
                        borderRad='2px'
                        background={colors.ResultBlue}
                        height={awayTeamScore / 4 + 40 + "px"}
                        width='80px'
                        hoverColor='none'
                        hoverBackground='none'
                        hover='default'
                        margin='0 0 30px 0'
                      >
                        <FlexDiv dir='column'>
                          <StyledHeadingh3
                            color={colors.White}
                            fontSize='20px'
                            margin='0'
                          >
                            {~~awayTeamScore}
                          </StyledHeadingh3>
                          <StyledP margin='-8px 0 0 0' fontSize='10px'>
                            poäng
                          </StyledP>
                        </FlexDiv>
                      </StyledButton>
                      <StyledImage
                        width='x'
                        margin='0 0 30px 0'
                        height='100px'
                        src={IMAGES[game.opponentid as keyof Iimages].logo}
                        onError={imageOnErrorHandler}
                      />
                    </FlexDiv>
                  </FlexDiv>
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
                  margin='-5px 0'
                  color={colors.TextBlue}
                >
                  {game.arena}
                </StyledP>
                <StyledP fontSize='13px' margin='0' color={colors.TextBlue}>
                  {game.date}
                </StyledP>
                <StyledHeadingh5
                  color={colors.TextBlue}
                  margin={"45px 0 10px 0"}
                >
                  Gör allt för {game.team}!
                </StyledHeadingh5>
                <a
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
                </a>
              </FlexDiv>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      )}
    </>
  );
};
