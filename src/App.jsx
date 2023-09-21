import "./App.css";
import Departments from "./components/Departments";
import Experts from "./components/Experts";
import Footers from "./components/Footers";
import NavHero from "./components/NavHero";
import Newsletter from "./components/Newsletter";
import Pricingsec from "./components/Pricingsec";
import Specializesec from "./components/Specializesec";
import Testimonialssec from "./components/Testimonialssec";

function App() {
  return (
    <div className="">
      <NavHero />
      <Specializesec />
      <Experts />
      <Departments />
      <Pricingsec />
      <Testimonialssec />
      <Newsletter />
      <Footers />
    </div>
  );
}

export default App;
