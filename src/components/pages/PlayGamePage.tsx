import { Link } from "react-router-dom";

export const PlayGamePage = () => {
  return (
    <>
      <p>Vilket år vann vi allt?</p>
      <Link to={"/resultat"}>Svara..</Link>
    </>
  );
};
