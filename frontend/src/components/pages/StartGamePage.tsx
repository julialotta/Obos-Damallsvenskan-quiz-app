import { Link, useParams } from "react-router-dom";
import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledImage } from "../StyledComponents/StyledImage";
import { FlexDiv } from "../StyledComponents/Wrappers";
import { colors } from "../StyledComponents/Styling/Mixins";
import { Curve } from "../partials/curve";
import { TeamsAndGames } from "../../data/teams";
import { useEffect, useState } from "react";
import { ITeams } from "../../models/ITeams";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { FaShieldAlt } from "react-icons/fa";
import {
  StyledHeadingh3,
  StyledLink,
} from "../StyledComponents/StyledTextElements";
import { saveGame } from "../../services/StorageService";
import { IMAGES } from "../../assets/images";
import { Iimages } from "../../models/IImages";
import { Loader } from "../StyledComponents/Loader";

export const StartGamePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState<ITeams>({
    id: 0,
    team: "",
    link: "",
  });

  const params = useParams();

  useEffect(() => {
    // finding chosen team
    for (let i = 0; i < TeamsAndGames.length; i++) {
      if (TeamsAndGames[i].id.toString() === params.id) {
        setGame(TeamsAndGames[i]);
        setIsLoading(false);
      }
    }

    //sorting temp. list in time order
    //checking and setting game w next date in the future
  }, [game, params.id]);

  useEffect(() => {
    saveGame({
      id: game.id,
      team: game.team,
      link: game.link,
    });
  }, [game]);

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
            minHeight='787px'
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
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      )}
    </>
  );
};
