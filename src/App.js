import "./App.css";
import Home from "./components/";
import CssBaseline from "@material-ui/core/CssBaseline";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <Route path="/about" exact component={About} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/" exact component={Home} />
    </>
  );
}

export default App;
