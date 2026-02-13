import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { GlobalProvider } from "./context/GlobalContext";

const Header = React.lazy(() => import("header/Header"));
const About = React.lazy(() => import("about/About"));

const App = () => {
  return (
    <BrowserRouter>
    <GlobalProvider>
      <div>
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading About...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
