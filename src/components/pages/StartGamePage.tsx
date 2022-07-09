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
  StyledP,
} from "../StyledComponents/StyledTextElements";

export const StartGamePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState("");
  const [game, setGame] = useState<ITeams>({
    id: 0,
    team: "",
    image: "",
    AOMemblem: "",
    background: "",
    games: [],
  });
  const [opponent, setOpponent] = useState<IOpponent>({
    opponent: "",
    image: "",
    arena: "",
    datestamp: new Date("August 21, 2022 13:00:00"),
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
          opponent: game.games[i].opponent,
          image: game.games[i].image,
          arena: game.games[i].arena,
          datestamp: game.games[i].datestamp,
          link: game.games[i].link,
          round: game.games[i].round,
        })
      ) {
        gamesList.push({
          opponent: game.games[i].opponent,
          image: game.games[i].image,
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
              opponent: TeamsAndGames[i].team,
              image: TeamsAndGames[i].image,
              arena: TeamsAndGames[i].games[y].arena,
              datestamp: TeamsAndGames[i].games[y].datestamp,
              link: TeamsAndGames[i].games[y].link,
              round: TeamsAndGames[i].games[y].round,
            })
          ) {
            gamesList.push({
              opponent: TeamsAndGames[i].team,
              image: TeamsAndGames[i].image,
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
  }, [game]);

  useEffect(() => {
    setIsLoading(false);
  }, [opponent]);

  useEffect(() => {
    let d = opponent.datestamp;
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let time = d.toLocaleTimeString();
    setDate(day + "/" + month + " " + time.slice(0, -3));
  }, [opponent]);

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
              height='420px'
              background={colors.BackgroundBlue}
              z='0'
            >
              <FlexDiv
                position='relative'
                z='100'
                width='390px'
                height='380px'
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
                    width='340px'
                    height='x'
                    src={game.AOMemblem}
                    alt='Allt för laget'
                  />
                </FlexDiv>
              </FlexDiv>
              <StyledImage
                width='100%'
                height='100%'
                src={game.background}
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
            >
              <FlexDiv dir='column' width='100%'>
                <FlexDiv dir='column' width='50%' gap='20px'>
                  <FlexDiv dir='column' width='50%' margin={"0 0 30px 0"}>
                    <FlexDiv gap='20px'>
                      <StyledImage
                        onError={imageOnErrorHandler}
                        src={game.image}
                        alt={"Emblem"}
                      />
                      <StyledImage
                        onError={imageOnErrorHandler}
                        alt={opponent.opponent}
                        src={opponent.image}
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
                <StyledP margin='0' color={colors.TextBlue}>
                  Omgång {opponent.round}
                </StyledP>
                <StyledP margin='0' color={colors.TextBlue}>
                  {opponent.arena}
                </StyledP>
                <StyledP margin='0' color={colors.TextBlue}>
                  {date}
                </StyledP>
                <Link to={`/spela/${game.id}`}>
                  <StyledButton>Starta matchen</StyledButton>
                </Link>
              </FlexDiv>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      )}
    </>
  );
};
