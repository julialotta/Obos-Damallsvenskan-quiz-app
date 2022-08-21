import { Link } from "react-router-dom";

export const StartPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(true);

  useEffect(() => {
    let user: [] = getUser();
    if (user.length !== 0) {
      setIsOpen(false);
    }

    if (GeneralIMAGES && IMAGES) {
      setIsLoading(false);
    }
  }, []);

  function closeModal() {
    saveUser({ user: true });
    setIsOpen(false);
  }

  return (
    <>
      <p>Hello this is the startpage</p>
      <Link to={"/valj-klubb"}>Kom igång!</Link>
    </>
  );
};
