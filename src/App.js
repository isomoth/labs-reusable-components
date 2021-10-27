import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <div>
      <Header title="Get ready for adventure!" backgroundColor="#282627" />
      <Footer
        links={["About", "Careers", "Pricing", "Feedback", "Roadmap"]}
        color="#282627"
      />
    </div>
  );
};
