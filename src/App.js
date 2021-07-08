import CarasoulSection from "./components/CarasoulSection";
import "./App.scss";

import Banner from "./components/Banner";
import Helpsection from "./components/Helpsection";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { HomeHeaders } from "./components/Homepage/HomeHeader";
import TopPicks from "./components/Homepage/TabSection/TopPicks";
import Ideas from "./components/Ideas";
import Transaction from "./components/Transaction";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { StockDetails } from "./components/StockDetails";

// ..
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 20, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1600, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Banner />
          <CarasoulSection />
          <Helpsection />
          <Footer />
        </Route>
      </Switch>

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      {/* <HomeHeaders /> */}
      <Switch>
        <Route path="/toplist">
          <HomeHeaders />
          <TopPicks />
          <Footer />
        </Route>
        <Route path="/transaction">
          <HomeHeaders />
          <Transaction />
        </Route>
        <Route path="/ideas">
          <HomeHeaders />
          <Ideas />
        </Route>
        <Route path="/stockDetails/:stock">
          <HomeHeaders />
          <StockDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
