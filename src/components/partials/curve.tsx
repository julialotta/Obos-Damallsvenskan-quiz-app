import { GeneralIMAGES } from "../../assets/images";
import { FlexDiv } from "../StyledComponents/Wrappers";

export const Curve = () => {
  return (
    <FlexDiv width='390px' position={"relative"} bottom={"45px"}>
      <img width={"100%"} src={GeneralIMAGES.general.curve} alt='curve' />
    </FlexDiv>
  );
};
