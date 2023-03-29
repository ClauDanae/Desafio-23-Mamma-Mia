import { Routes, Route, BrowserRouter } from "react-router-dom"
import { PizzasContextProvider } from "./pizzaContext";
import Navbar from "./components/Navbar";
import Home from "./views/Home"
import DetallesPizza from "./views/pizzaDetalle"
import Checkout from "./views/Check"

function App() {
  
  return (
    <div className="App">
     <PizzasContextProvider>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/pizza/:id" element={<DetallesPizza />}/>
        <Route path="/carrito" element={<Checkout />}/>
      </Routes>
      </BrowserRouter>
      </PizzasContextProvider>
    </div>
  );
}

export default App;