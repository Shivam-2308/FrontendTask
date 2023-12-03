import "./App.css";
import Banner from "./components/Banner.jsx";
import Navbar from "./components/Navbar.jsx";
import Imager from "./components/Imager.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div className="App">
      <section className="navbar">
        <Navbar />
      </section>
      <section className="banner" style={{ marginTop: "100px" }}>
        <Banner />
      </section>
      <section>
        <Imager />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
