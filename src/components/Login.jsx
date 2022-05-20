import React, { useEffect, useState } from 'react'
import Message from "./Message";
import image  from "./image/0001.png"

const Login = () => {

   
        const [loginValues, setLoginValues] = useState({
            email:"",
            password:"",
            check:false,
    
    
    
        })
    
    const {email, password, check}=loginValues
    
    const handleChange=(e)=>{
      if(e.target.name==="check"){
        setLoginValues({
    
          ...loginValues, 
          [e.target.name]:e.target.checked,
    
      });
    }else{setLoginValues({
    
      ...loginValues, 
      [e.target.name]:e.target.value,
    });
      
    }
    };
    




  return (
 <div className="container w-75 bg-primary mt-5 rounded shadow"> 
        <div className="row align-items-stretch">
          <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
              <div className="col bg-white p-5 rounded-end">
                  <div className="text-end">
                  <img src={logo} className="card-img-top " alt="logo" />
                      <img src="0001.png" width="48"  alt=""/>
             

                  </div>
                  </div>


    <form>
        <h3>Login</h3>
          <div className="mb-3">
            <label className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="check"
              checked={check}
              onChange={handleChange}
            />
            <label className="form-check-label" >
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </form>
    {check && <Message/>}
    
     
    </div>
    
    
        </div>
    
    
    </div>
    
      );
    };
    
  
  
export default Login; 
    


