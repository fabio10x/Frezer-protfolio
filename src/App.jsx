
import { Routes, Route, useLocation } from "react-router-dom";
import AuraCars from "./AuraCars";
import Launchbox from "./Launchbox";
import ToDoList from "./ToDoList";
import DigitalClock from "./DigitalClock";
import ColorPicker from "./ColorPicker";
import QuoteGenerator from "./QuoteGenerator";
import ExpenseTracker from "./ExpenseTracker";
import Navbar from "./Navbar";


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
        </Routes>
      </div>
    </>
  );
}

export default App;

