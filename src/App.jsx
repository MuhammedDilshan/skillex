import "./App.css";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Skill from "./components/Skill/Skill";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Banner />
        <Categories />
        <Skill />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
