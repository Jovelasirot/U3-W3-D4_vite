import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ArticlesList from "./components/ArticlesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ArticlesList />} path="/" />
        <Route element={<Detail />} path="/Details/:ArticleId" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
