import { Link } from "react-router-dom";

export const StartPage = () => {
  return (
    <>
      <p>Hello this is the startpage</p>
      <Link to={"/valj-klubb"}>Kom igång!</Link>
    </>
  );
};
