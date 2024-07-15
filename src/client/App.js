import { Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Home from "./Home";

const App = () => {
    return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
     </Routes>
    );
  };
  
  export default App;