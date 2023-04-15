import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from './pages/About';
import NavBar from "./components/Navbar";


function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   <NavBar />
      <Routes>
        {/* <Route path="/" element={<><Layout /></>}>
          <Route index element={<SignUp />} /> */}
           <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/companyinfo" Component={About} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
 
    </div>
  );
}

export default App;
