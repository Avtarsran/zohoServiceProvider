import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage></ServicePage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
