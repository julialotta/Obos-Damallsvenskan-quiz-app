import { Link, Outlet } from "react-router-dom";
import { AppWrapper } from "./StyledComponents/Wrappers";

export const Layout = () => {
  return (
    <AppWrapper>
      <Outlet></Outlet>
    </AppWrapper>
  );
};
