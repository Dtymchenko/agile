import "./App.css";
import Carousel from "./Carousel";

function App() {
  return (
    <div className="app">
      <Carousel delay={1000} children={["list", 42, 25]} />
    </div>
  );
}

export default App;
