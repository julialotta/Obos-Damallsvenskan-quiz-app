import { Route, Routes, useLocation } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";
import { StartPage } from "./components/pages/StartPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes key={location.pathname} location={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<StartPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
