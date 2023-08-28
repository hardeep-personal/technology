import "./App.scss";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HowWeWork />
      <KeyFeatures />
      <Form />
      <Team />
      <Footer/>
    </div>
  );
}

export default App;
