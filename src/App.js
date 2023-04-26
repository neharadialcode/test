import "./App.css";
import Footer from "./component/Footer";
import Form from "./component/Form";
import Header from "./component/Header";
import Hero from "./component/Hero";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="p-3">
      <Header />
      <Hero />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
