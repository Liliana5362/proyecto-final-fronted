

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import ProtectedRoute from "./routes/ProtectedRoute";

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
</BrowserRouter>
    )
}

export default App;