import { Link } from "react-router-dom";

export const ChooseTeamPage = () => {
  return (
    <>
      <p>Välj klubb</p>
      <Link to={"/starta-matchen"}>Starta matchen</Link>
    </>
  );
};
