import React, { Suspense } from "react";
import { useAppContext } from "../context/AppContext";

const About = React.lazy(() => import("about/About"));

const AboutWrapper = () => {
  const { inputValue } = useAppContext();

  return (
    <Suspense fallback={<div>Loading About...</div>}>
      <About sharedMessage={inputValue} />
    </Suspense>
  );
};

export default AboutWrapper;
