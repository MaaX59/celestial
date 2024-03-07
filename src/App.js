import "./App.css";
import Navbar from "../src/Sections/Navbar/Navbar.jsx";
import Header from "../src/Sections/Header/Header.jsx";
import Subheading from "../src/Sections/Subheading/Subheading.jsx";
import Shop from "./Sections/Shop/Shop.jsx";
function App() {
  return (
    <div className="App">
      <Navbar /> <Header /> <Subheading /> <Shop />
    </div>
  );
}

export default App;
