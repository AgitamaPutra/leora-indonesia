import { BrowserRouter, Routes, Route } from "react-router-dom";
import { KontakKami } from "./pages/KontakKami";
import { Home } from "./pages/home";
import { Projects } from "./pages/Projects";
import Artikel from "./pages/Artikel";
import { Layout } from "./pages/layout";

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/project" element={<Projects />}></Route>
            <Route path="/project/:id"></Route>
            <Route path="/artikel" element={<Artikel />}></Route>
            <Route path="/artikel:id"></Route>
            <Route path="/kontak-kami" element={<KontakKami />}></Route>
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
