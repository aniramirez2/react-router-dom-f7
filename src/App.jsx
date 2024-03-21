import "./App.css";
import { Card } from "./components/Card";
import { Route, Routes } from "react-router-dom";
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";
import Layout from "./components/Layout";
import PaginaId from "./pages/PaginaId";

// localhost:1234/Pagina1/1

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Card />} />
        <Route element={<Layout />}>
          <Route path="Pagina2" element={<Pagina2 />} />
          <Route path="Pagina1" element={<Pagina1 />}></Route>
          <Route path="Pagina1/:paginaId" element={<PaginaId />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
