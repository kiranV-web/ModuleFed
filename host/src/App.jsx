import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const Header = React.lazy(() => import("header/Header"));
const About = React.lazy(() => import("about/About"));

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
        <Routes>
          <Route
            path="/"
            element={<Home inputValue={inputValue} setInputValue={setInputValue} />}
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading About...</div>}>
                <About sharedMessage={inputValue} />
              </Suspense>
            }
          />
          <Route path="/contact" element={<Contact inputValue={inputValue} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
