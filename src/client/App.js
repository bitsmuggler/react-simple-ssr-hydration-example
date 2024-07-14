import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import InteractivePart from "./InteractivePart";

const App = () => {
    return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interactive" element={<InteractivePart />} />
     </Routes>
    );
  };
  
  export default App;