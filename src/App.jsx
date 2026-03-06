
import { Routes, Route, useLocation } from "react-router-dom";
import AuraCars from "./pages/AuraCars";
import Launchbox from "./pages/Launchbox";
import ToDoList from "./pages/ToDoList";
import DigitalClock from "./pages/DigitalClock";
import ColorPicker from "./pages/ColorPicker";
import QuoteGenerator from "./pages/QuoteGenerator";
import ExpenseTracker from "./pages/ExpenseTracker";
import TheMoodJournal from "./pages/TheMoodJournal";
import CounterPro from "./pages/CounterPro";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";


function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div key={location.pathname} className="animate-page-in">
        <Routes location={location}>
          <Route path="/" element={<Launchbox />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/digital-clock" element={<DigitalClock />} />
          <Route path="/color-flipper" element={<ColorPicker />} />
          <Route path="/quote-generator" element={<QuoteGenerator />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
          <Route path="/aura-cars" element={<AuraCars />} />
          <Route path="/mood-journal" element={<TheMoodJournal />} />
          <Route path="/counter" element={<CounterPro />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

