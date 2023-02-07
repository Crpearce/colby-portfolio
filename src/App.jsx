import Navbar from "./sections/navbar/navbar.component";
import Header from "./sections/header/header.component"
import About from './sections/about/about.component';
import Services from './sections/services/services.component';
import Portfolio from "./sections/portfolio/portfolio.component";
import FAQs from './sections/faqs/faqs.component';
import Contact from './sections/contact/contact.component';
import Footer from './sections/footer/footer.component';
import FloatingNav from './sections/floatingNav/floatingNav.component';

const App = () => {
    return (
        <main>
            <Navbar />
            <Header />
            <About />
            <Services />
            <Portfolio />
            {/* <FAQs /> */}
            <Contact />
            <Footer />
            <FloatingNav />
        </main>
    );
}

export default App;
