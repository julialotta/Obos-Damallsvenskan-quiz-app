import React, { useEffect, useState } from "react";
import { FlexDiv, ImageDiv } from "../StyledComponents/Wrappers";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { GeneralIMAGES } from "../../assets/images";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../services/db";
import { Loader } from "../StyledComponents/Loader";
import { TeamsAndGames } from "../../data/scores";

export const StartPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(18);
  const [teamCounter, setTeamCounter] = useState(0);
  const [team, setTeam] = useState("AIK");
  const [scores, setScores] = useState([0]);
  const [total, setTotal] = useState([0]);

  const _ = require("lodash");

  //increase counter
  const increase = () => {
    if (counter < 26) {
      setCounter((count) => count + 1);
      setScores([]);
    }
  };

  //decrease counter
  const decrease = () => {
    if (counter > 18) {
      setCounter((count) => count - 1);
      setScores([]);
    }
  };
  //increase counter
  const increaseTeam = () => {
    if (teamCounter < 13) {
      setTeamCounter((count) => count + 1);
      setScores([]);
    }
  };

  //decrease counter
  const decreaseTeam = () => {
    if (teamCounter > 0) {
      setTeamCounter((count) => count - 1);
      setScores([]);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchHomeData = async () => {
      const querySnapshot = await getDocs(
        collection(db, counter + "/" + teamCounter + "/scores")
      );
      setScores([]);
      querySnapshot.forEach((doc) => {
        setScores((current) => [...current, doc.data().points]);
      });
    };
    fetchHomeData()
      .then(() => {
        setIsLoading(false);
      })
      .catch(console.error);
  }, [counter, teamCounter]);

  useEffect(() => {
    for (let i = 0; i < TeamsAndGames.length; i++) {
      if (TeamsAndGames[i].id === teamCounter) {
        setTeam(TeamsAndGames[i].team);
      }
    }
  }, [teamCounter]);

  useEffect(() => {
    let all = _.sum(scores);
    setTotal(all);
  }, [scores]);

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
            <FlexDiv dir='column' width='75%' gap='22px' align='start'>
              <h2>Statistik</h2>
              <h3>Omgång {counter}</h3>

              <FlexDiv width='75%' gap='22px' align='start'>
                <button className='control__btn' onClick={decrease}>
                  -
                </button>
                <button className='control__btn' onClick={increase}>
                  +
                </button>
              </FlexDiv>

              <h3>Lag {teamCounter}</h3>
              <FlexDiv width='75%' gap='22px' align='start'>
                <button onClick={decreaseTeam}>←</button>
                <button onClick={increaseTeam}>→</button>
              </FlexDiv>
              <h2>{team}</h2>
              <FlexDiv width='75%' gap='22px' justify='start'>
                <h4>Poäng:</h4>
                <h4>{total}</h4>
              </FlexDiv>
              <FlexDiv width='75%' gap='22px' justify='start'>
                <h4>Antal som spelat:</h4>
                <h4>{scores.length}</h4>
              </FlexDiv>
            </FlexDiv>
          </ImageDiv>
        </FlexDiv>
      )}
    </>
  );
};
