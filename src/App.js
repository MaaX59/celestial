import "./App.css";
import Navbar from "../src/Sections/Navbar/Navbar.jsx";
import Header from "../src/Sections/Header/Header.jsx";
import Subheading from "../src/Sections/Subheading/Subheading.jsx";
import Shop from "./Sections/Shop/Shop.jsx";
import Rooms from "./Sections/Rooms/Rooms.jsx";
import Contact from "./Sections/Contact/Contact.jsx";
function App() {
  return (
    <div className="App">
      <Navbar /> <Header /> <Subheading /> <Rooms />
      <Shop /> <Contact />
    </div>
  );
}

export default App;
