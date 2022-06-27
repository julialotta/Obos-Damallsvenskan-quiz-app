import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";
import { StartPage } from "./components/pages/StartPage";
import { ChooseTeamPage } from "./components/pages/ChooseTeamPage";
import { StartGamePage } from "./components/pages/StartGamePage";
import { PlayGamePage } from "./components/pages/PlayGamePage";
import { ResultsPage } from "./components/pages/ResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<StartPage />}></Route>
          <Route path='valj-klubb' element={<ChooseTeamPage />}></Route>
          <Route path='starta-matchen/:id' element={<StartGamePage />}></Route>
          <Route path='spela/:id' element={<PlayGamePage />}></Route>
          <Route path='resultat' element={<ResultsPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
