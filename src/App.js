import { useContext } from "react";
import Intro from "./components/intro";
import About from "./components/about";
import ProductList from "./components/productList";
import Contact from "./components/contact";
import Toggle from "./components/toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
