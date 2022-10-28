import "./css/layout.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThisWeek from "./components/ThisWeek";
import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
        <Routes>
          <Route path="/" element={<ThisWeek />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
