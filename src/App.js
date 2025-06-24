import logo from "./logo.svg";
import "./App.css";
import Navbars from "./Components/Nav/Navbars";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import bannarBackground from "./Assets/bannarBackground.jpg";
function App() {
  return (
    <>
      <Navbars />
      <div style={{ backgroundImage: `url(${bannarBackground})` }}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Layout />}> */}
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
