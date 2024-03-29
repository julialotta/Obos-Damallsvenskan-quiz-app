import { Route, Routes, useLocation } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";
import { StartPage } from "./components/pages/StartPage";
import { ChooseTeamPage } from "./components/pages/ChooseTeamPage";
import { StartGamePage } from "./components/pages/StartGamePage";
import { PlayGamePage } from "./components/pages/PlayGamePage";
import { ResultsPage } from "./components/pages/ResultsPage";
import { ChartPage } from "./components/pages/ChartPage";
import { CookiesPage } from "./components/Cookies";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes key={location.pathname} location={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<StartPage />}></Route>
          <Route path='valj-klubb' element={<ChooseTeamPage />}></Route>
          <Route path='starta-matchen/:id' element={<StartGamePage />}></Route>
          <Route path='spela/:id' element={<PlayGamePage />}></Route>
          <Route path='resultat' element={<ResultsPage />}></Route>
          <Route path='stallning' element={<ChartPage />}></Route>
          <Route path='cookies' element={<CookiesPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
