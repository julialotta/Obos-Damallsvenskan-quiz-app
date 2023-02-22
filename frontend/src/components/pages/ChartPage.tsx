import { FlexDiv, ImageDiv } from "../StyledComponents/Wrappers";
import {
  StyledP,
  StyledHeadingh5,
  StyledHeadingh3,
  StyledLink,
} from "../StyledComponents/StyledTextElements";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { StyledImage } from "../StyledComponents/StyledImage";
import { GeneralIMAGES, IMAGES } from "../../assets/images";
import { useEffect, useState } from "react";
import { Loader } from "../StyledComponents/Loader";
import { imageOnErrorHandler } from "../../services/Helpers";
import { Iimages } from "../../models/IImages";
import { fetchScores } from "../../services/handleGamesFetch.service";
import { IGames, IResult } from "../../models/ITeams";
import { TeamsAndGames } from "../../data/teams";
import { StyledButton } from "../StyledComponents/StyledButton";

export const ChartPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResult] = useState<IResult[]>([]);

  let score: IResult[] = [];

  useEffect(() => {
    async function getScore() {
      if (results.length !== 0) return;
      let resultFromDB = await fetchScores();
      if (score.length !== 0) return;
      for (let i = 0; i < resultFromDB.length; i++) {
        let p: IGames[] = resultFromDB.filter(
          (id) => id.id === resultFromDB[i].id
        );
        let team = TeamsAndGames.find(
          (element) => element.id === resultFromDB[i].id
        );

        let points: number = 0;

        if (p !== undefined) {
          for (let y = 0; y < p.length; y++) {
            points = points + p[y].points;
          }
        }

        const object: IResult = {
          team: team!.team,
          points,
          id: resultFromDB[i].id,
        };

        if (!score.find((element) => element.id === object.id)) {
          score.push(object);
        }
      }

      score.sort(function (a, b) {
        return b.points - a.points;
      });
      if (score.length !== 0) {
        setResult(score);
        setIsLoading(false);
      }
    }
    getScore();
  });

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
        >
          <ImageDiv
            dir='column'
            image={GeneralIMAGES.general.bluePatternBackground}
            width={"400px"}
            height='787px'
            position={"relative"}
            shadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            }
          >
            <FlexDiv dir='column' width='100%' justify='start'>
              <FlexDiv gap='5px' height='340px'>
                <StyledImage
                  height='150px'
                  width='x'
                  src={GeneralIMAGES.general.obosLogoRibbon}
                  alt='DA logo'
                  shadow='#00000057 3pt 3pt 3pt'
                />

                <FlexDiv dir='column' align='start'>
                  <StyledHeadingh3 fontSize='20px' margin='0'>
                    SUPPORTERLIGAN
                  </StyledHeadingh3>
                  <StyledP margin='0'>POÄNGSTÄLLNING</StyledP>
                </FlexDiv>
              </FlexDiv>
              <FlexDiv height='25px' position='relative' left='148px'>
                <StyledHeadingh3 fontSize='14px'>POÄNG</StyledHeadingh3>
              </FlexDiv>
              <FlexDiv dir='row' width='100%' height='100%' justify='center'>
                <FlexDiv dir='column' width='5%' gap='5px'>
                  {results?.map((r, i) => {
                    return (
                      <FlexDiv justify='left' gap='10px' key={r.id}>
                        <StyledHeadingh5 fontSize='20px'>
                          {i + 1}
                        </StyledHeadingh5>
                      </FlexDiv>
                    );
                  })}
                </FlexDiv>
                <FlexDiv dir='column' width='70%' justify='left' gap='5px'>
                  <>
                    {results?.map((r) => {
                      return (
                        <FlexDiv justify='left' gap='10px' key={r.id}>
                          <StyledImage
                            margin='0 0 0 20px'
                            height='x'
                            width='15px'
                            src={IMAGES[r.id as keyof Iimages].logo}
                            shadow={"#15314029 0px 3px 6px"}
                            onError={imageOnErrorHandler}
                          />
                          <StyledHeadingh5 fontSize='20px'>
                            {r.team}
                          </StyledHeadingh5>
                        </FlexDiv>
                      );
                    })}
                  </>
                </FlexDiv>
                <FlexDiv
                  dir='column'
                  width='10%'
                  justify='left'
                  gap='5px'
                  margin='0'
                >
                  {results?.map((r) => {
                    return (
                      <FlexDiv justify='left' gap='10px' key={r.id}>
                        <StyledHeadingh5 fontSize='20px'>
                          {r.points}
                        </StyledHeadingh5>
                      </FlexDiv>
                    );
                  })}
                </FlexDiv>
              </FlexDiv>
              <FlexDiv dir='column' gap='20px'>
                <StyledLink to='/'>
                  <StyledButton
                    margin='0px'
                    padding='22px'
                    width={"210px"}
                    height={"50px"}
                    shadow='#00000038 0px 3px 5px'
                  >
                    Tillbaka
                  </StyledButton>
                </StyledLink>

                <StyledImage
                  height='x'
                  width='240px'
                  src={GeneralIMAGES.general.sponsorLogo}
                  alt='Partner logos'
                  shadow='#00000057 3pt 3pt 3pt'
                />
              </FlexDiv>
            </FlexDiv>
          </ImageDiv>
        </FlexDiv>
      )}
    </>
  );
};
