import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Beranda from "./pages/Beranda";
import Profil from "./pages/Profil";
import ResimenKadet from "./pages/ResimenKadet";
import ResimenKorps from "./pages/ResimenKorps";
import Galeri from "./pages/Galeri";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Beranda />}></Route>
          <Route path="/resimenkadet" element={<ResimenKadet />}></Route>
          <Route path="/resimenkorps" element={<ResimenKorps />}></Route>
          <Route path="/galeri" element={<Galeri />}></Route>

          <Route path="/profil" element={<Profil />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
