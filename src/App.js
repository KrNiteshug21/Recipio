import Navbar from "./Navbar";
import Footer from "./Footer";
import Recipe from "./Recipes/Recipe";
import { Route, Routes } from "react-router-dom";
import Content from "./Home/Content";
import Contacts from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
