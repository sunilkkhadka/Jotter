import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import NotePage from "../src/pages/NotePage";

function App() {
  return (
    <div className="App">
      <div className="route-container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/note/:note_id" element={<NotePage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
