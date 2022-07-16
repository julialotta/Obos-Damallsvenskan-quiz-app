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
  const [game, setGame] = useState<ITeams>({
    id: 0,
    team: "",
    games: [],
  });
  const [opponent, setOpponent] = useState<IOpponent>({
    id: 0,
    opponent: "",
    arena: "",
    datestamp: new Date(),
    link: "",
    round: 0,
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
          link: game.games[i].link,
          round: game.games[i].round,
        })
      ) {
        gamesList.push({
          id: game.games[i].opponentid,
          opponent: game.games[i].opponent,
          arena: game.games[i].arena,
          datestamp: game.games[i].datestamp,
          link: game.games[i].link,
          round: game.games[i].round,
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
              link: TeamsAndGames[i].games[y].link,
              round: TeamsAndGames[i].games[y].round,
            })
          ) {
            gamesList.push({
              id: TeamsAndGames[i].id,
              opponent: TeamsAndGames[i].team,
              arena: TeamsAndGames[i].games[y].arena,
              datestamp: TeamsAndGames[i].games[y].datestamp,
              link: TeamsAndGames[i].games[y].link,
              round: TeamsAndGames[i].games[y].round,
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
      link: opponent.link,
      opponent: opponent.opponent,
      opponentid: opponent.id,
      arena: opponent.arena,
      date: date,
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
              height='400px'
              background={colors.BackgroundBlue}
              z='0'
            >
              <FlexDiv
                position='relative'
                z='100'
                width='390px'
                height='370px'
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
                  top={"180px"}
                  left={"0"}
                  right={"0"}
                  position='absolute'
                >
                  <StyledImage
                    width='320px'
                    height='x'
                    src={IMAGES[game.id as keyof Iimages].emblem}
                    alt='Allt för laget'
                  />
                </FlexDiv>
              </FlexDiv>
              <StyledImage
                width='100%'
                height='100%'
                borderRad={"5px"}
                src={IMAGES[game.id as keyof Iimages].background}
                alt='Pattern in team colors'
              />
            </FlexDiv>
            <Curve />
            <FlexDiv
              dir='column'
              position='relative'
              background={colors.White}
              width='390px'
              bottom='55px'
              margin='-20px 0 0 0'
            >
              <FlexDiv dir='column' width='100%'>
                <FlexDiv dir='column' width='50%' gap='20px'>
                  <FlexDiv dir='column' width='50%' margin={"0 0 30px 0"}>
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
                <FlexDiv width='95%'>
                  <StyledHeadingh3
                    textTransform='uppercase'
                    color={colors.TextBlue}
                    fontSize='10px'
                  >
                    {game.team} - {opponent.opponent}
                  </StyledHeadingh3>
                </FlexDiv>

                <StyledP
                  textTransform='uppercase'
                  margin='0 0 20px 0'
                  color={colors.TextBlue}
                >
                  {opponent.arena} {date}
                </StyledP>

                <StyledLink to={`/spela/${game.id}`}>
                  <StyledButton
                    width='230px'
                    height={"60px"}
                    shadow={"#00000038 0px 3px 5px "}
                  >
                    <StyledHeadingh3>Starta matchen</StyledHeadingh3>
                  </StyledButton>
                </StyledLink>
              </FlexDiv>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      )}
    </>
  );
};
