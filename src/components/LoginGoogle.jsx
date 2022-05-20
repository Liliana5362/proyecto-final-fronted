import React from 'react';
import GoogleLogin from "react-google-login";
import {useNavigate} from "react-router-dom";

const LoginGoogle = () => {
  let navigate=useNavigate()

    const responseGoogle=(response)=>{
        console.log(response);
        if (response?.error){
          console.war ("error en el logueo");
          
        }else{
          console.log("usuario autenticado");
          localStorage.setItem("auth", JSON.stringify(response.accesToken));
          localStorage.setItem ("user", JSON.stringify (response.profileObj));
          navigate("/")
        }
    };
  return (
    <GoogleLogin
    clientId="          "
    buttonText="Iniciar sesion con Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  /> 
    
  );
};

export default LoginGoogle;