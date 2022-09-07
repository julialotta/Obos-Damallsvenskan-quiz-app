import React, { useEffect, useState } from "react";
import { FlexDiv, ImageDiv } from "../StyledComponents/Wrappers";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { GeneralIMAGES } from "../../assets/images";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../services/db";
import { Link } from "react-router-dom";
import { Loader } from "../StyledComponents/Loader";
import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledLink } from "../StyledComponents/StyledTextElements";

export const Allplayers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [totalScores, setTotalScores] = useState([0]);
  const [total, setTotal] = useState([0]);
  const [go, setGo] = useState(false);

  const _ = require("lodash");

  useEffect(() => {
    let all = _.sum(totalScores);
    setTotal(all);
  }, [totalScores]);

  useEffect(() => {
    setIsLoading(true);
    console.log(totalScores.length);
    setTotalScores([]);
    setGo(true);
    console.log(totalScores.length);
    if (totalScores.length === 0) {
      for (let round = 18; round < 27; round++) {
        console.log(round);
        for (let team = 0; team < 14; team++) {
          const fetchHomeData = async () => {
            const querySnapshot = await getDocs(
              collection(db, round + "/" + team + "/scores")
            );
            querySnapshot.forEach((doc) => {
              setTotalScores((current) => [...current, doc.data().points]);
            });
          };
          fetchHomeData()
            .then(() => {
              setIsLoading(false);
            })
            .catch(console.error);
        }
      }
    }
  }, [go]);

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
            minHeight='100vh'
            position={"relative"}
            shadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            }
          >
            <StyledLink to='/'>
              <StyledButton>Tillbaka</StyledButton>
            </StyledLink>
            <FlexDiv dir='column' width='75%' gap='22px' align='start'>
              <h2>Statistik för samtliga spelare i samtliga omgångar</h2>

              <FlexDiv width='75%' gap='22px' align='start'>
                <h4>Totalt antal spelare</h4>
                <h4>{totalScores.length}</h4>
              </FlexDiv>

              <FlexDiv width='75%' gap='22px' justify='start'>
                <h4>Totalt antal poäng:</h4>
                <h4>{total}</h4>
              </FlexDiv>
            </FlexDiv>
          </ImageDiv>
        </FlexDiv>
      )}
    </>
  );
};
