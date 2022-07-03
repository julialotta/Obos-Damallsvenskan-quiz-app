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

export const StartGamePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState<ITeams>({
    id: 0,
    team: "",
    image: "",
    AOMemblem: "",
    background: "",
    games: [],
  });
  const [opponent, setOpponent] = useState<IOpponent>({
    team: "",
    image: "",
  });
  const params = useParams();

  useEffect(() => {
    for (let i = 0; i < TeamsAndGames.length; i++) {
      if (TeamsAndGames[i].id.toString() === params.id) {
        setGame(TeamsAndGames[i]);
        setOpponent({ team: TeamsAndGames[i].games[0].opponent, image: "" });
        setIsLoading(false);

        /*  let d = game.games[0].datestamp;
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let time = d.toLocaleTimeString();
        console.log("====================================");
        console.log(day + "/" + month + " " + time.slice(0, -3));
        console.log("===================================="); */
      }
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      {isLoading ? (
        <FlexDiv height='50vh' align={"start"}>
          <p>Laddar...</p>
        </FlexDiv>
      ) : (
        <FlexDiv
          background={colors.DarkBlue}
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
              background={colors.DarkBlue}
              z='0'
            >
              <FlexDiv
                position='relative'
                z='100'
                width='390px'
                height='380px'
                background={colors.DarkBlue}
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
              <FlexDiv dir='column' width='50%' gap='20px' margin='0 0 140px 0'>
                <FlexDiv dir='column' width='50%'>
                  <FlexDiv gap='20px'>
                    <StyledImage
                      onError={imageOnErrorHandler}
                      src={game.image}
                      alt={game.team}
                    />
                    <StyledImage
                      onError={imageOnErrorHandler}
                      alt={opponent.team}
                      src={opponent.image}
                    />
                  </FlexDiv>
                  <StyledButton>
                    <Link to={`/spela/${game.id}`}>Starta matchen</Link>
                  </StyledButton>
                </FlexDiv>
              </FlexDiv>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      )}
    </>
  );
};
