import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
