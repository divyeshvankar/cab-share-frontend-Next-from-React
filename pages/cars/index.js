import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import Image from 'next/image';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import driver from "../../styles/assets/driver.svg";
import map from "../../styles/assets/map.svg";
import building from "../../styles/assets/building.svg";
import aircraft from "../../styles/assets/aircraft.svg";
import baggage from "../../styles/assets/baggage.svg";
import form from "../../styles/assets/form-img.svg";
import car1 from "../../styles/assets/cars/car1.png";
import car2 from "../../styles/assets/cars/car2.png";
import car3 from "../../styles/assets/cars/car3.png";
import car4 from "../../styles/assets/cars/car4.png";
import logo from "../../styles/assets/logo.svg";
import car5 from "../../styles/assets/cars/sedan.jpg"
import car6 from "../../styles/assets/cars/ertiga.jpg"
import place1 from "../../styles/assets/Unity.jpg"
import place2 from "../../styles/assets/KaviKamboi.jpg"
import place3 from "../../styles/assets/Pavagadh.jpg"
import place4 from "../../styles/assets/Poicha.jpg"
import Script from 'next/script';
const Cars = () => {
  const router = useRouter();

  useEffect(() => {
    // You can add any side-effects or code that you want to run when the component mounts here.
  }, []);

  return (
    <>
      <div id="cars" className="rent-mainContainer">
          <div className="rent-container">
            <div className="rent-title">
            <p style={{color:'black',textDecoration:'underline'}} onClick={() => router.push('/')}>
Click here for

Home

</p>
              <p>See Our</p>
              <h1>Cars Rents</h1>
              <ul>
                <li><h2>Minimum per day KM : 300 KM</h2> </li>
                <li><h2>Driver  allowance  300 ₹ </h2> </li>
                <li><h2>Toll-tax/Parking-tax/state-tax is extra</h2> </li>
              </ul>
            </div>


            <div className="rent-cards">
              <div className="rent-card">
                <div className="rent-cardImg">
                  <Image className="rent-cardImg-img" src={car5} alt="car1" />
                </div>
                <div className="rent-description">
                  <h1>Sedan</h1>
                  
                  <span>
                  <a style={{color:'grey'} } href="#contact" onClick={() => setIsActive(false)}>
                      
                  
                  About Price
      
                        </a>
                    {/* 10 ₹<p>/km</p> */}
                  </span>
                  <h2>Khambhat<p>
                   2000 ₹
                  </p></h2>
                </div>
              </div>
              <div className="rent-card">
                <div className="rent-cardImg">
                  <Image className='rent-cardImg-img' src={car6} alt="car2" />
                </div>
                <div className="rent-description">
                  <h1>SUV</h1>
                  
                  <span>
                  <a style={{color:'grey'} } href="#contact" onClick={() => setIsActive(false)}>
                      
                  About Price
                    </a>
                    {/* 12 ₹<p>/km</p> */}
                  </span>
                  <h1>One way</h1>
                  <h2>Pavagadh<p>
                   2000 ₹
                  </p></h2>
                  <h2>Poicha<p>
                   2100 ₹
                  </p></h2>
                  
                </div>
              </div>
              <div className="rent-card">
                <div className="rent-cardImg">
                  <Image className='rent-cardImg-img' src={car3} alt="car3" />
                </div>
                <div className="rent-description">
                  <h1>Inova</h1>
                  
                  <span>
                  <a style={{color:'grey'} } href="#contact" onClick={() => setIsActive(false)}>
                  About Price
                      
                        </a>
                    {/* 15 ₹<p>/km</p> */}
                  </span>
                  <p>
                    For a touch of luxury, our Innova Crysta vehicles combine
                    style, comfort, and advanced amenities for an extraordinary
                    travel experience.
                  </p>
                </div>
              </div>
              <div className="rent-card">
                <div className="rent-cardImg">
                  <Image className='rent-cardImg-img' src={car4} alt="car4" />
                </div>
                <div className="rent-description">
                  <h1>Inova Crysta</h1>
                 
                  <span>
                  <a style={{color:'grey'} } href="#contact" onClick={() => setIsActive(false)}>
                      
                  About Price
                    </a>
                    
                    {/* 17 ₹<p>/km</p> */}
                  </span>
                  <p>
                    For a touch of luxury, our Innova Crysta vehicles combine
                    style, comfort, and advanced amenities for an extraordinary
                    travel experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
   <div className="container">
   <h1 style={{ color: 'grey' }} onClick={() => router.push('/')}>


Home

</h1>
   </div>
       
    </>
  );
};

export default Cars;
