import Navbar from "./sections/navbar/navbar.component";
import Header from "./sections/header/header.component"
import About from './sections/about/about.component';
import Services from './sections/services/services.component';
import Portfolio from "./sections/portfolio/portfolio.component";
// import FAQs from './sections/faqs/faqs.component';
import Contact from './sections/contact/contact.component';
import Footer from './sections/footer/footer.component';
// import FloatingNav from './sections/floatingNav/floatingNav.component';
import Theme from './themes/theme.component';
import { useThemeContext } from './contexts/theme.context';

const App = () => {
    const {themeState} = useThemeContext();
    return (
        <main className={`${themeState.primary} ${themeState.background}`}>
            <Navbar />
            <Header />
            <About />
            <Services />
            <Portfolio />
            {/* <FAQs /> */}
            <Contact />
            <Footer />
            <Theme />
            {/* <FloatingNav /> */}
        </main>
    );
}

export default App;
