import { StyledImage } from "../StyledComponents/StyledImage";
import { FlexDiv } from "../StyledComponents/Wrappers";
import { StyledButton } from "../StyledComponents/StyledButton";
import {
  StyledHeadingh3,
  StyledHeadingh5,
  StyledP,
  StyledAnchor,
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
import { IData, IResult } from "../../models/IQuestions";
import { GeneralIMAGES, IMAGES } from "../../assets/images";
import { Iimages } from "../../models/IImages";
import { Loader } from "../StyledComponents/Loader";
import { collection, getDocs } from "firebase/firestore";
import { db, writeCompetitionData } from "../../services/db";
import Modal from "react-modal";
import { modalStylesCompetition } from "../StyledComponents/Styling/modalStylesCompetition";
import { useForm } from "react-hook-form";
import { Form, Input, Label } from "../StyledComponents/Form";

Modal.setAppElement("#root");

export const ResultsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<IResult[]>([]);
  const [points, setPoints] = useState("");
  const [homeTeamScore, setHomeTeamScore] = useState<number>(-1);
  const [awayTeamScore, setAwayTeamScore] = useState<number>(-1);
  const [modalIsOpen, setIsOpen] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);
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

  const {
    register,
    handleSubmit,

    watch,
    formState: { errors },
  } = useForm();

  const [name, email] = watch(["name", "email"]);

  useEffect(() => {
    setGame(getGame<IGame>());
    setResult(getQuiz);
  }, []);
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
    const querySnapshot = await getDocs(
      collection(db, game.round + "/" + game.id, "/scores/")
    );
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

  function closeModal() {
    setHasPlayed(false);
    setIsOpen(false);
  }
  function enterCompetition() {
    setHasPlayed(true);
    writeCompetitionData(name, email, game.team);
  }
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
          <Modal
            isOpen={modalIsOpen}
            contentLabel='Kakor'
            style={modalStylesCompetition}
          >
            <FlexDiv dir='column' justify={"center"} width={"100%"}>
              <FlexDiv width='100%' justify='end' margin='-10px -10px 0 0'>
                <StyledButton
                  align='left'
                  width='max-content'
                  onClick={closeModal}
                  padding='8px'
                  height='30px'
                >
                  ⨉
                </StyledButton>
              </FlexDiv>
              {hasPlayed ? (
                <FlexDiv margin='20px 0' dir='column'>
                  <StyledHeadingh3 color={colors.TextBlue}>
                    Tack!
                  </StyledHeadingh3>
                  <StyledP fontSize='18px' color={colors.TextBlue}>
                    Din e-post {email} är registrerad.
                    <br />
                    Vinnaren kontaktas via mail.
                  </StyledP>
                </FlexDiv>
              ) : (
                <>
                  <StyledHeadingh3 color={colors.TextBlue}>
                    Var med i utlottningen och vinn ditt lags matchtröja!
                  </StyledHeadingh3>
                  <Form onSubmit={handleSubmit(enterCompetition)}>
                    <Label>
                      Namn:
                      <Input
                        {...register("name", {
                          required: true,
                          minLength: 1,
                          maxLength: 40,
                        })}
                        type='text'
                      />
                      {errors.name && (
                        <StyledP fontSize='16px' color={colors.WronglyRed}>
                          Ange ditt namn
                        </StyledP>
                      )}
                    </Label>
                    <Label>
                      E-post:
                      <Input
                        {...register("email", {
                          required: true,
                        })}
                        type='email'
                      />
                      {errors.email && (
                        <StyledP fontSize='16px' color={colors.WronglyRed}>
                          Ange en e-postadress
                        </StyledP>
                      )}
                    </Label>
                    <Label>
                      <FlexDiv>
                        <StyledP color={colors.TextBlue}>
                          Jag godkänner
                          <StyledAnchor
                            decoration='underline'
                            href='https://xn--alltfrklubben-mmb.se/AllmannaTavlingsvillkorPassionLab.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            color={colors.TextBlue}
                          >
                            de allmänna tävlingsvillkoren och behandling av
                            personuppgifter
                          </StyledAnchor>
                        </StyledP>
                        <input
                          className='checkbox'
                          type='checkbox'
                          {...register("checkbox", {
                            required: true,
                            minLength: 9,
                            maxLength: 12,
                          })}
                        />
                      </FlexDiv>
                      {errors.checkbox && (
                        <StyledP fontSize='16px' color={colors.WronglyRed}>
                          Du måste godkänna de allmänna tävlingsvillkoren och
                          behandling av personuppgifter
                        </StyledP>
                      )}
                    </Label>
                    <FlexDiv>
                      <StyledButton type='submit'>Tävla</StyledButton>
                    </FlexDiv>
                  </Form>
                </>
              )}
            </FlexDiv>
          </Modal>
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

                <StyledHeadingh3 fontSize='20px' color={colors.TextBlue}>
                  Ställningen
                </StyledHeadingh3>

                <FlexDiv dir='column' align='center' justify='start'>
                  <FlexDiv dir='row' align='end' margin='0' gap={"0"}>
                    <FlexDiv dir='column' margin='20px 0 0 0'>
                      <StyledButton
                        transform='0'
                        background={colors.ResultBlue}
                        height={homeTeamScore / 10 + 37 + "px"}
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
                            margin='3px 0 0 0'
                          >
                            {~~homeTeamScore}
                          </StyledHeadingh3>
                          <StyledP margin='-7px 0 0 0' fontSize='10px'>
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
                    <FlexDiv dir='column' margin='20px 0 0 0'>
                      <StyledButton
                        transform='0'
                        borderRad='2px'
                        background={colors.ResultBlue}
                        height={awayTeamScore / 10 + 37 + "px"}
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
                            margin='3px 0 0 0'
                          >
                            {~~awayTeamScore}
                          </StyledHeadingh3>
                          <StyledP margin='-7px 0 0 0' fontSize='10px'>
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
