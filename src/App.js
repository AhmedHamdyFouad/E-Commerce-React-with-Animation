import Home from "./Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Filter/Shop";
import ContextProvider from "./Context/Context";
import CardDetails from "./Filter/CardDetails";
import About from "./Compentes/About/About";
import Contact from "./Compentes/contact/Contact";
function App() {
  return (
    <ContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop/CardDetails/:id" element={<CardDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;
