import Home from './Pages/Home';
import Pedido from './Pages/Pedido';
import './App.css';

import {
BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Pages/Pedido/" element={<Pedido/>}/>
      </Routes>
    </Router>
  );
}

export default App;
