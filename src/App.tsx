import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import Implementation from "./pages/Zoho-Implementation";
import FinanceServices from "./pages/Zoho-FInance";
import CreatorSerivces from "./pages/Zoho-creator";
import SupportPage from "./pages/Zoho-support";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/zoho-implementaion" element={<Implementation></Implementation>} />
        <Route path="/finance-services" element={<FinanceServices></FinanceServices>} />
        <Route path="/creator-services" element={<CreatorSerivces></CreatorSerivces>} />
        <Route path="/support-maintainenece-services" element={<SupportPage></SupportPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
