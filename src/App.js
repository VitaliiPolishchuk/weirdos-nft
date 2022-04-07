import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Faq from "./components/sections/Faq";
import Home from "./components/sections/Home";
import Roadmap from "./components/sections/Roadmap";
import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import About from "./components/sections/About";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <div>
          <Navigation />
          <Home />
          <About />
          <Roadmap />
          <Showcase />
          <Team />
          <Faq />
          <Footer />
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
