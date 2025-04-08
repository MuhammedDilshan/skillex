import "./App.css";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Skill from "./components/Skill/Skill";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <div className="wrapper">
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
