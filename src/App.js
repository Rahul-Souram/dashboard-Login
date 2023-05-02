import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/Admin";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   <NavBar />
      <Routes>
           <Route path="/" Component={Home} />
          <Route path="/admin" Component={Login} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer/>
    </BrowserRouter>
 
    </div>
  );
}

export default App;
