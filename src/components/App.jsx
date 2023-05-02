import { Blog } from "./BlogSect/Blog";
import { Callback } from "./CallbackSect/Callback";
import { Casses } from "./CasesSect/Cases";
import { Footer } from "./Footer/Footer";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";
import SmoothScroll from "./SmoothScroll/SmoothScroll";
import { Solutions } from "./SolutionSect/Solutions";
import { Team } from "./TeamSect/Team";

export const App = () => {
  return (
    <>
      {/* <SmoothScroll> */}
        <Header />
        <Hero />
        <Solutions />
        <Casses />
        <Blog />
        <Team />
        <Callback />
        <Footer />
      {/* </SmoothScroll> */}

      <GlobalStyle />
    </>
  );
};
