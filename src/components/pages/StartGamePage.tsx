import { Link } from "react-router-dom";

export const StartGamePage = () => {
  return (
    <>
      <p>Starta matchen!</p>
      <Link to={"/spela"}>Starta</Link>
    </>
  );
};
