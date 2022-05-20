

import { BrowserRouter, Routes, Route } from "react-router-dom";
import
import LoginScreen from "./pages/LoginScreen";
import ProtectedRoute from "./routes/ProtectedRoute";
import Footer from "./components/Footer";
import Login from "./components/Login";
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
</BrowserRouter>

    )
}

export default App;