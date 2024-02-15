import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ArticlesList from "./components/ArticlesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <main className="vh-100">
        <Routes>
          <Route element={<ArticlesList />} path="/" />
          <Route element={<Detail />} path="/Details/:ArticleId" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
