

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import ProtectedRoute from "./routes/ProtectedRoute";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Message from "./components/Message";
import "./css/estilos.css";
import "font-awesome/css/font-awesome.css";

const App=()=>{

  return(

  <BrowserRouter>
  <Routes>
<Route path="/" element ={
<ProtectedRoute>
<Home/>
</ProtectedRoute>
}/>
<Route path="login" element ={<LoginScreen/>}/>
</Routes>
<Footer/>
<Login/>
<Message/>
<LoginScreen/>
</BrowserRouter>


    )
}

export default App;