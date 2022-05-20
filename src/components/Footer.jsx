import React from 'react'
import css from "../css/estilos.css"

const Footer = () => {



  return(
    <div className="container my-5">

    <footer  
            className="text-center text-lg-start text-white"
            style="background-color: #929fba"
            >
 
      <div className="container p-4 pb-0">

       


            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-upperCase mb-4 font-weight-bold">
       {/* Poner Texto */}
              </h6>
              <p>
                {/* AQUI VA MI FOOTER */}
              </p>
            </div>

  
            <hr className="w-100 clearfix d-md-none" />
  

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-upperCase mb-4 font-weight-bold">Products</h6>
              <p>
                <a className="text-white">Noticias</a>
              </p>
              <p>
                <a className="text-white">Crónicas</a>
              </p>
              <p>
                <a className="text-white">Social</a>
              </p>
 
              <p>
                <a className="text-white">Deportes</a>
              </p>
            </div>  
            <hr className="w-100 clearfix d-md-none" />
  

            <hr className="w-100 clearfix d-md-none" />
  

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-upperCase mb-4 font-weight-bold">Contact</h6>
              <p><i className="fas fa-home mr-3"></i> Las Acacias 2344</p>
              <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>

  

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-upperCase mb-4 font-weight-bold">Follow us</h6>
  

              <a
                 className="btn btn-primary btn-floating m-1"
                 style="background-color: #3b5998"
                 href="#"
                 role="button"
                 ><i className="fab fa-facebook-f"></i
                ></a>
  

              <a
                 className="btn btn-primary btn-floating m-1"
                 style="background-color: #55acee"
                 href="#"
                 role="button"
                 ><i className="fab fa-twitter"></i
                ></a>
  

              <a
                 className="btn btn-primary btn-floating m-1"
                 style="background-color: #dd4b39"
                 href="#"
                 role="button"
                 ><i className="fab fa-google"></i
                ></a>
  

              <a
                 className="btn btn-primary btn-floating m-1"
                 style="background-color: #ac2bac"
                 href="#"
                 role="button"
                 ><i className="fab fa-instagram"></i
                >
                </a>
  
                {/* /div>
          </div>
             
            </div> */}
          </div>
       {/* </section> */}

      </div>

  

      <div
           className="text-center p-3"
           style="background-color: rgba(0, 0, 0, 0.2)"
           >
        © 2022 Copyright:
          
      </div>

    </footer>

  </div>
  

  );
  };
  


export default Footer;