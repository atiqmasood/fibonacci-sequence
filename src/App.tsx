import React from "react";
import Header from "./components/Header";
import Logo from "./assets/logo.svg";
import Main from "./views/Main";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header logoSrc={Logo} title="Fibonacci Sequence" />
      <Main />
    </div>
  );
};

export default App;
