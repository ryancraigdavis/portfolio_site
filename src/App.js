import React from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes />
      {/* End demo-toggler */}
    </>
  );
};

export default App;
