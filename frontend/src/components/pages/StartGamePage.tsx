import { Link, useParams } from "react-router-dom";
import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledImage } from "../StyledComponents/StyledImage";
import { FlexDiv } from "../StyledComponents/Wrappers";
import { colors } from "../StyledComponents/Styling/Mixins";
import { Curve } from "../partials/curve";
import { TeamsAndGames } from "../../data/teams";
import { useEffect, useState } from "react";
import { ITeams, IOpponent } from "../../models/ITeams";
import { imageOnErrorHandler } from "../../services/Helpers";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { FaShieldAlt } from "react-icons/fa";
import {
  StyledHeadingh3,
  StyledLink,
  StyledP,
} from "../StyledComponents/StyledTextElements";
import { saveGame } from "../../services/StorageService";
import { IMAGES } from "../../assets/images";
import { Iimages } from "../../models/IImages";
import { Loader } from "../StyledComponents/Loader";

export const StartGamePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState("");
  const [noOpponent, setNoOpponent] = useState(false);
  const [game, setGame] = useState<ITeams>({
    id: 0,
    team: "",
    link: "",
    games: [],
  });
  const [opponent, setOpponent] = useState<IOpponent>({
    id: 0,
    opponent: "",
    arena: "",
    datestamp: new Date(),
    round: 0,
    home: false,
  });
  const params = useParams();

  useEffect(() => {
    let gamesList: IOpponent[] = [];

    // finding chosen team
    for (let i = 0; i < TeamsAndGames.length; i++) {
      if (TeamsAndGames[i].id.toString() === params.id) {
        setGame(TeamsAndGames[i]);
      }
    }

    //all home games to new temporary list
    for (let i = 0; i < game.games.length; i++) {
      if (
        !gamesList.includes({
          id: game.games[i].opponentid,
          opponent: game.games[i].opponent,
          arena: game.games[i].arena,
          datestamp: game.games[i].datestamp,
          round: game.games[i].round,
          home: true,
        })
      ) {
        gamesList.push({
          id: game.games[i].opponentid,
          opponent: game.games[i].opponent,
          arena: game.games[i].arena,
          datestamp: game.games[i].datestamp,
          round: game.games[i].round,
          home: true,
        });
      }
    }

    //checking away games and adding to temporary list
    for (let i = 0; i < TeamsAndGames.length; i++) {
      for (let y = 0; y < TeamsAndGames[i].games.length; y++) {
        if (TeamsAndGames[i].games[y].opponent === game.team) {
          if (
            !gamesList.includes({
              id: TeamsAndGames[i].id,
              opponent: TeamsAndGames[i].team,
              arena: TeamsAndGames[i].games[y].arena,
              datestamp: TeamsAndGames[i].games[y].datestamp,
              round: TeamsAndGames[i].games[y].round,
              home: false,
            })
          ) {
            gamesList.push({
              id: TeamsAndGames[i].id,
              opponent: TeamsAndGames[i].team,
              arena: TeamsAndGames[i].games[y].arena,
              datestamp: TeamsAndGames[i].games[y].datestamp,
              round: TeamsAndGames[i].games[y].round,
              home: false,
            });
          }
        }
      }
    }

    //sorting temp. list in time order
    //checking and setting game w next date in the future

    function getNextGame() {
      gamesList.sort(function (a, b) {
        return a.datestamp.valueOf() - b.datestamp.valueOf();
      });
      let now = Date.now();
      let d = new Date(now);
      for (let i = 0; i < gamesList.length; i++) {
        if (gamesList[i].datestamp >= d) {
          setOpponent(gamesList[i]);
          return;
        } else {
          setNoOpponent(true);
        }
      }
    }
    getNextGame();
  }, [game, params.id]);

  useEffect(() => {
    saveGame({
      id: game.id,
      team: game.team,
      round: opponent.round,
      link: game.link,
      opponent: opponent.opponent,
      opponentid: opponent.id,
      arena: opponent.arena,
      date: date,
      home: opponent.home,
    });
  }, [opponent, game, date]);

  useEffect(() => {
    let d = opponent.datestamp;
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let time = d.toLocaleTimeString();
    setDate(day + "/" + month + " " + time.slice(0, -3));
    setIsLoading(false);
  }, [opponent]);

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
          height='100%'
          dir={"column"}
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
              height='350px'
              background={colors.BackgroundBlue}
              z='0'
            >
              <FlexDiv
                position='relative'
                z='100'
                width='400px'
                background={colors.BackgroundBlue}
              >
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
                <FlexDiv
                  top={"155px"}
                  left={"0"}
                  right={"0"}
                  position='absolute'
                >
                  <StyledImage
                    width='275px'
                    height='x'
                    src={IMAGES[game.id as keyof Iimages].emblem}
                    alt='Allt för laget'
                  />
                </FlexDiv>
              </FlexDiv>
              <StyledImage
                width='100%'
                height='100%'
                src={IMAGES[game.id as keyof Iimages].background}
                alt='Pattern in team colors'
              />
            </FlexDiv>
            <Curve />
            <FlexDiv
              dir='column'
              position='relative'
              background={colors.White}
              bottom='55px'
              margin='-75px 0 0 0'
            >
              <StyledLink to={`/spela/${game.id}`}>
                <StyledButton
                  width='230px'
                  height={"55px"}
                  shadow={"#00000038 0px 3px 5px "}
                >
                  <StyledHeadingh3 fontSize={"18px"}>
                    Starta matchen
                  </StyledHeadingh3>
                </StyledButton>
              </StyledLink>
              {noOpponent ? (
                <>
                  <FlexDiv width='80%'>
                    <StyledHeadingh3
                      margin='0'
                      textTransform='uppercase'
                      color={colors.TextBlue}
                      fontSize='20px'
                    >
                      Omgången är slut, men du kan fortfarande quizza och samla
                      poäng till {game.team}
                    </StyledHeadingh3>
                  </FlexDiv>
                </>
              ) : (
                <>
                  <FlexDiv dir='column' width='100%'>
                    {opponent.home ? (
                      <>
                        <FlexDiv dir='column' width='50%' gap='20px'>
                          <FlexDiv
                            dir='column'
                            width='50%'
                            margin={"15px 0 15px 0"}
                          >
                            <FlexDiv gap='20px'>
                              <StyledImage
                                height='110px'
                                width='x'
                                onError={imageOnErrorHandler}
                                src={IMAGES[game.id as keyof Iimages].logo}
                                alt={"Emblem"}
                              />
                              <StyledImage
                                height='110px'
                                width='x'
                                onError={imageOnErrorHandler}
                                alt={opponent.opponent}
                                src={IMAGES[opponent.id as keyof Iimages].logo}
                              />
                            </FlexDiv>
                          </FlexDiv>
                        </FlexDiv>
                        <FlexDiv width='95%' margin='10px 0 0 0'>
                          <StyledHeadingh3
                            margin='0'
                            textTransform='uppercase'
                            color={colors.TextBlue}
                            fontSize='20px'
                          >
                            {game.team} - {opponent.opponent}
                          </StyledHeadingh3>
                        </FlexDiv>
                        <StyledP
                          fontSize='13px'
                          margin='0'
                          color={colors.TextBlue}
                        >
                          Omgång {opponent.round}
                          {"    "}
                          {opponent.arena} {date}
                        </StyledP>
                      </>
                    ) : (
                      <>
                        <FlexDiv dir='column' width='50%' gap='20px'>
                          <FlexDiv
                            dir='column'
                            width='50%'
                            margin={"15px 0 15px 0"}
                          >
                            <FlexDiv gap='20px'>
                              <StyledImage
                                height='110px'
                                width='x'
                                onError={imageOnErrorHandler}
                                alt={opponent.opponent}
                                src={IMAGES[opponent.id as keyof Iimages].logo}
                              />
                              <StyledImage
                                height='110px'
                                width='x'
                                onError={imageOnErrorHandler}
                                src={IMAGES[game.id as keyof Iimages].logo}
                                alt={"Emblem"}
                              />
                            </FlexDiv>
                          </FlexDiv>
                        </FlexDiv>
                        <FlexDiv width='95%' margin='10px 0 0 0'>
                          <StyledHeadingh3
                            margin='0'
                            textTransform='uppercase'
                            color={colors.TextBlue}
                            fontSize='20px'
                          >
                            {opponent.opponent} - {game.team}
                          </StyledHeadingh3>
                        </FlexDiv>
                        <StyledP
                          fontSize='13px'
                          margin='0'
                          color={colors.TextBlue}
                        >
                          Omgång {opponent.round}
                          {"    "}
                          {opponent.arena} {date}
                        </StyledP>
                      </>
                    )}
                  </FlexDiv>
                </>
              )}
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      )}
    </>
  );
};
