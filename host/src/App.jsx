import React, { Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { GlobalProvider, GlobalContext } from "./context/GlobalContext";

const Header = React.lazy(() => import("header/Header"));
const About = React.lazy(() => import("about/About"));

const AboutWrapper = () => {
  const { value } = useContext(GlobalContext);
  return <About sharedMessage={value} />;
};

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
                <AboutWrapper />
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
