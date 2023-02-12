import Navbar from "./sections/navbar/navbar.component";
import Header from "./sections/header/header.component";
import About from "./sections/about/about.component";
import Services from "./sections/services/services.component";
import Portfolio from "./sections/portfolio/portfolio.component";
// import FAQs from './sections/faqs/faqs.component';
import Contact from "./sections/contact/contact.component";
import Footer from "./sections/footer/footer.component";
import FloatingNav from "./sections/floatingNav/floatingNav.component";
import Theme from "./themes/theme.component";
import { useThemeContext } from "./contexts/theme.context";
import { useRef, useState, useEffect } from "react";

const App = () => {
  const { themeState } = useThemeContext();

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0)

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }


  const floatingNavToggleHandler = () => {
    if(siteYPostion < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPostion > (mainRef?.current?.getBoundingClientRect().y + 20)) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }
    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);
    return () => clearInterval(checkYPosition);
  }, [siteYPostion])


  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      {/* <FAQs /> */}
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
