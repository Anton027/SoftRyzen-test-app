import { Blog } from "./BlogSect/Blog";
import { Callback } from "./CallbackSect/Callback";
import { Casses } from "./CasesSect/Cases";
import { Footer } from "./Footer/Footer";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";

import { Solutions } from "./SolutionSect/Solutions";
import { Team } from "./TeamSect/Team";

export const App = () => {
  return (
    <>
   
        <Header />
        <Hero />
        <Solutions />
        <Casses />
        <Blog />
        <Team />
        <Callback />
        <Footer />

      <GlobalStyle />
    </>
  );
};
