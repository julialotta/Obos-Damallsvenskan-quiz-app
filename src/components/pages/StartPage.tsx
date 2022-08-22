import { StyledButton } from "../StyledComponents/StyledButton";
import { FlexDiv, ImageDiv } from "../StyledComponents/Wrappers";
import { StyledP, StyledLink } from "../StyledComponents/StyledTextElements";
import { GlobalStyle } from "../StyledComponents/Styling/fonts";
import { GeneralIMAGES } from "../../assets/images";
import { useEffect, useState } from "react";
import { IData } from "../../models/IQuestions";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../services/db";
import { Loader } from "../StyledComponents/Loader";
import { TeamsAndGames } from "../../data/teams";

export const StartPage = () => {
  const [list, setList] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHomeData = async () => {
    let list: IData[] = [];
    let total: number = 0;
    const querySnapshot = await getDocs(collection(db, "16"));
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });
    for (let i = 0; i < list.length; i++) {
      total = total + list[i].data.points;
    }
    if (list.length > 0) {
      console.log(list);
      setList(list);
    } else {
      console.log("====sry================================");
    }
  };
  fetchHomeData().catch(console.error);

  useEffect(() => {
    if (list !== undefined) {
      setIsLoading(false);
    }
  }, [list]);

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
            <FlexDiv dir='column' width='75%' gap='22px'>
              <h2>Statistik</h2>
              <h3>Runda 16</h3>
              {list.map((item) => (
                <div key={item.id}>
                  <p>{item.id}</p>
                </div>
              ))}
            </FlexDiv>
          </ImageDiv>
        </FlexDiv>
      )}
    </>
  );
};
