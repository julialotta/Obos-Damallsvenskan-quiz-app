import { colors } from "../StyledComponents/Styling/Mixins";
import { FlexDiv } from "../StyledComponents/Wrappers";

export const Curve = () => {
  return (
    <FlexDiv width='390px' position={"relative"} bottom={"45px"}>
      <object type='image/svg+xml'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 366 117'>
          <path
            d='M427.58,117v-49.39C355.62,25.88,272.64,2.05,184.25,2.05S11.72,26.2-60.58,68.47v48.53H427.58Z'
            fill={colors.White}
          />
        </svg>
      </object>
    </FlexDiv>
  );
};
