import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./screens/Home";
import Donations from "./screens/Donations";
import Contact from "./screens/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="donations" element={<Donations />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
