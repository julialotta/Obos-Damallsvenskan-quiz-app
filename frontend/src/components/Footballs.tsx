import { IoMdFootball } from "react-icons/io";
import { IFootballs, IResult } from "../models/IQuestions";
import { StyledP } from "./StyledComponents/StyledTextElements";
import { colors } from "./StyledComponents/Styling/Mixins";

interface FootballsProps {
  result: IResult[];
}

export const Footballs: React.FC<FootballsProps> = ({ result }) => {
  let footballs: IFootballs[] = [];

  if (footballs.length < 5) {
    for (let i = 0; i < result.length; i++) {
      footballs.push({
        answer: result[i].answer,
        isCorrect: result[i].isCorrect,
        isAnswer: true,
      });
    }
  }
  for (let i = 0; i < 5; i++) {
    if (footballs.length < 5) {
      footballs.push({ answer: "x", isCorrect: false, isAnswer: false });
    }
  }

  return (
    <>
      {footballs.map((item: IFootballs, i: number) => {
        return (
          <StyledP key={i}>
            <IoMdFootball
              color={
                item.isAnswer
                  ? item.isCorrect
                    ? colors.CorrectGreen
                    : colors.WronglyRed
                  : colors.Darkgrey
              }
              size={"22px"}
            />
          </StyledP>
        );
      })}
    </>
  );
};
