import logo from "./logo.svg";
import "./App.css";
import DashBoard from "./DashBoard/DashBoard";
import Login from "./main/Signinpage";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Newvoter from "./NewVoter/NewVoter";
import AboutUs from "./AboutUs/About_Us";
import Home from "./main_body/home";
import Fingerprint from "./NewVoter/fingerprint";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/DashBoard" element={<DashBoard />}>
          <Route path="" element={<Home />} />
          <Route path="NewVoters" element={<Newvoter />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Page2" element={<Fingerprint />} />
        </Route>
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
