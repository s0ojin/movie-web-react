import Home from "./routes/Home";
import Detail from "./components/Detail";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
