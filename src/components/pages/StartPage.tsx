import { StyledButton } from "../StyledComponents/StyledButton";
import { FlexDiv, ImageDiv } from "../StyledComponents/Wrappers";
import {
  StyledP,
  StyledLink,
  StyledHeadingh5,
  StyledHeadingh3,
} from "../StyledComponents/StyledTextElements";
import { colors } from "../StyledComponents/Styling/Mixins";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { StyledImage } from "../StyledComponents/StyledImage";
import { GeneralIMAGES, IMAGES } from "../../assets/images";
import { useEffect, useState } from "react";
import { Loader } from "../StyledComponents/Loader";
import Modal from "react-modal";
import { modalStylesCookies } from "../StyledComponents/Styling/modalStylesCookies";
import { getUser, saveUser } from "../../services/StorageService";
import { Results } from "../../data/result";
import { imageOnErrorHandler } from "../../services/Helpers";
import { Iimages } from "../../models/IImages";
import { IResults } from "../../models/ITeams";

Modal.setAppElement("#root");

export const StartPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [modalIsOpen, setIsOpen] = useState(true);
  const [results, setResult] = useState<IResults[]>([]);

  useEffect(() => {
    let r = Results;
    r.sort(function (a, b) {
      return b.score - a.score;
    });
    for (let i = 0; i < r.length; i++) {
      r[i].placement = i + 1;
    }
    setResult(r);
  }, []);
  useEffect(() => {
    let user: [] = getUser();
    if (user.length !== 0) {
      setIsOpen(false);
    }

    if (GeneralIMAGES && IMAGES) {
      setIsLoading(false);
    }
  }, []);

  function closeModal() {
    saveUser({ user: true });
    setIsOpen(false);
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
          height='100%'
        >
          <Modal
            isOpen={modalIsOpen}
            contentLabel='Kakor'
            style={modalStylesCookies}
          >
            <FlexDiv
              dir='column'
              height={"30vh"}
              justify={"center"}
              width={"100%"}
            >
              <StyledButton onClick={closeModal}>Stäng</StyledButton>
              <StyledP color={colors.TextBlue}>
                Vi använder cookies för att tillhandahålla våra tjänster samt
                för mätnings- och analyssyften. Genom att använda vår webbplats
                och våra tjänster godkänner du användningen av cookies på det
                sätt som beskrivs i vår
                <StyledLink
                  font='GothamLight'
                  decoration='underline'
                  color={colors.TextBlue}
                  to={"/cookies"}
                >
                  policy för cookies.
                </StyledLink>
              </StyledP>
            </FlexDiv>
          </Modal>
          <ImageDiv
            dir='column'
            image={GeneralIMAGES.general.bluePatternBackground}
            width={"400px"}
            minHeight='100vh'
            position={"relative"}
            shadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            }
          >
            <FlexDiv
              dir='column'
              width='100%'
              justify='start'
              height='100%'
              margin='-25px 0 0 0'
            >
              <FlexDiv gap='5px'>
                <StyledImage
                  height='150px'
                  width='x'
                  src={GeneralIMAGES.general.obosLogoRibbon}
                  alt='DA logo'
                  shadow='#00000057 3pt 3pt 3pt'
                />
                <FlexDiv
                  borderLeft='1px solid white'
                  width='1px'
                  height='70px'
                />
                <FlexDiv dir='column' align='start'>
                  <div>
                    <StyledHeadingh3 fontSize='20px'>
                      SUPPORTERLIGAN
                    </StyledHeadingh3>
                  </div>
                  <div>
                    <StyledP margin='0'>POÄNGSTÄLLNING</StyledP>
                  </div>
                </FlexDiv>
              </FlexDiv>
              <FlexDiv dir='row' width='100%' justify='center' align='start'>
                <FlexDiv dir='column' width='5%' gap='2px' margin='27px 0 0 0'>
                  {results?.map((r) => {
                    return (
                      <FlexDiv justify='left' gap='10px'>
                        <StyledHeadingh5 fontSize='20px'>
                          {r.placement}
                        </StyledHeadingh5>
                      </FlexDiv>
                    );
                  })}
                </FlexDiv>
                <FlexDiv
                  dir='column'
                  width='70%'
                  justify='left'
                  gap='2px'
                  margin='27px 0 0 0'
                >
                  {results?.map((r) => {
                    return (
                      <FlexDiv justify='left' gap='10px'>
                        <StyledImage
                          margin='0 0 0 20px'
                          height='x'
                          width='20px'
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
                </FlexDiv>
                <FlexDiv dir='column' width='10%' justify='left' gap='2px'>
                  <StyledHeadingh3 fontSize='14px'>POÄNG</StyledHeadingh3>
                  {results?.map((r) => {
                    return (
                      <StyledHeadingh5 fontSize='20px'>
                        {r.score}
                      </StyledHeadingh5>
                    );
                  })}
                </FlexDiv>
              </FlexDiv>

              <StyledImage
                height='x'
                margin='60px 0 0 0'
                width='240px'
                src={GeneralIMAGES.general.sponsorLogo}
                alt='Partner logos'
                shadow='#00000057 3pt 3pt 3pt'
              />
            </FlexDiv>
          </ImageDiv>
        </FlexDiv>
      )}
    </>
  );
};
