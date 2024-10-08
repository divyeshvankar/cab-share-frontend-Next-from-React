import React, { useState, useEffect } from "react";
import Link from 'next/link';
import axios from "axios";
import { useRouter } from 'next/router';
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
import CustomerReviews from "../CutomerReviews";
import {
  MdOutlineLocationOn,
  MdPhone,
  MdEmail,
  MdKeyboardArrowRight,
  MdOutlineWhatsapp,
} from "react-icons/md";
import {
  FaInstagram,
  FaDiscord,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaPhoneSquareAlt,
  FaWhatsappSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
// import backendURL from "./backendURL";
// import "./Homepage.css";

const Homepage = () => {
  const router = useRouter();

  const routes = [
    {
      id: 1,
      route: "Ahmedabad ⇋ Vadodara",
      img: car2,
      sedan: "₹ 1500",
      suv: "₹ 1000",
      inova: "₹ 900",
      inova_Crysta: "₹ 800",
    },
    {
      id: 2,
      route: "Surat ⇋ Vadodara",
      img: car4,
      sedan: "₹ 1500",
      suv: "₹ 1000",
      inova: "₹ 900",
      inova_Crysta: "₹ 800",
    },
    {
      id: 3,
      route: "Ahmedabad ⇋ Ankleswar",
      img: car3,
      sedan: "₹ 1500",
      suv: "₹ 1000",
      inova: "₹ 900",
      inova_Crysta: "₹ 800",
    },
    {
      id: 4,
      route: "Ahmedabad ⇋ Surat",
      img: car1,
      sedan: "₹ 1500",
      suv: "₹ 1000",
      inova: "₹ 900",
      inova_Crysta: "₹ 800",
    },
  ];

  // for submit form
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a payload object with the form data
    const payload = {
      name: name,
      phone: phone,
      pickup: pickup,
      drop: drop,
      cab_type: selectedCar,
      trip_type: selectedType,
    };

    // Send the payload to the backend using axios
    axios
      .post("https://api.cabs4u.in/book/", payload)
      .then((response) => {
        // Handle the successful response if needed
        console.log("Form submitted successfully!");
        toast.success("Your cab booked successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // Reset the form fields
        setName("");
        setPhone("");
        setPickup("");
        setDrop("");
        setSelectedCar("");
        setSelectedType("");
        window.scrollTo(0, 0);
        // console.log(response.data);
      })
      .catch((error) => {
        // Handle the error response if needed
        console.error("Form submission failed.");
        console.error(error);
      });
  };

  // Scrolling effect in Navbar
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementsByClassName("navbar-mainContainer")[0];
      if (navbar) {
        if (window.scrollY > 500) {
          navbar.classList.add("scrolled");
          setIsScrolled(true);
        } else {
          navbar.classList.remove("scrolled");
          setIsScrolled(false);
        }
      } else {
        console.log("Navbar not found");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hamburger Menu
  const [isActive, setIsActive] = useState(false);
  const [showEmergencyNotice, setShowEmergencyNotice] = useState(true);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  // Auto set destinations
  const destination = (e) => {
    setPickup(e.slice(0, e.indexOf("⇋")));
    setDrop(e.slice(e.indexOf("⇋") + 1));
  };
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'AW-11298889021');
  }, []);

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11395830130"></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11395830130');
        `}
      </Script>

      <div className="homepage-mainContainer">
        <div className="homepage-container">
          <div id="navbar" className="navbar">
            <div className="navbar-mainContainer">
              <div className="navbar-container">
                <div className="navbar-logo">
                  <a href="#hero">
                    <Image className="navbar-logo-img" src={logo} alt="" />
                  </a>
                </div>
                <div className={`navbar-links ${isActive ? "show" : ""}`}>
                  <ul>
                    <li>
                      <a href="#hero" onClick={() => setIsActive(false)}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#form" onClick={() => setIsActive(false)}>
                        Book Car
                      </a>
                    </li>
                    <li>
                      <a href="#services" onClick={() => setIsActive(false)}>
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#cars" onClick={() => setIsActive(false)}>
                        Cars
                      </a>
                    </li>
                    <li>
                      <a href="#contact" onClick={() => setIsActive(false)}>
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#about" onClick={() => setIsActive(false)}>
                        About Us
                      </a>
                    </li>
                    <li className="book-now">
                      <a href="#contact" onClick={() => setIsActive(false)}>
                        Book Now
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className={`navbar-menu-button ${isActive ? "active" : ""}`}
                  onClick={handleClick}
                >
                  {/* <div className="call">
                <button className="whatsapp">
          
          <a href="tel:9023090592" >
            Call Now
          </a>
        </button>
                </div> */}
                  <GiHamburgerMenu
                    size={25}
                    style={isScrolled ? { color: "black" } : { color: "white" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {showEmergencyNotice && (


            <div className="emergency-notice">
              {/* જો તમને તાત્કાલિક ટેક્સી/કેબની જરૂર હોય તો હમણાં જ કૉલ કરવાનું પસંદ કરો. <br/> */}
              {/* IF YOU NEED TAXI/CAB IMMEDIATELY THAN PREFER TO CALL NOW. */}
              यदि आपको तुरंत टैक्सी/कैब की आवश्यकता है तो नीचे दिए गए कॉल बटन का उपयोग करके अभी कॉल करें।
              {/* Emergency notice content */}
            </div>

          )}
          <div id="hero" className="hero-section"  >
            <div className="hero-left-mainContainer">
              <div className="hero-left-container">
                <h1>Book your cheapest car for the perfect trip experience.</h1>
                <p>
                  We can arrange a one-way journey or a thrilling round trip. Our
                  broad fleet and excellent service let you explore your favourite
                  destinations. Book with Cabs4u today for stress-free travel and
                  lasting memories.
                </p>
                <div className="hero-btn">
                  <a href="#contact">
                    <button>Book Now</button>
                  </a>
                  <a href="#cars">
                    <button>Check Cars</button>
                  </a>
                </div>
                <p id="hide" >
                  We can arrange a one-way journey or a thrilling round trip. Our
                  broad fleet and excellent service let you explore your favourite
                  destinations. Book with Cabs4u today for stress-free travel and
                  lasting memories.
                </p>
              </div>
            </div>
          </div>


          <div id="contact" className="fav-routes-mainContainer">
            <div className="contact-mainContainer">
              <div className="contact-container">
                <div className="contact-title">
                  <h1>Contacts</h1>
                  <h2>Click on call now to call and whatsapp now to message</h2>
                </div>
                <div className="contact-contacts">
                  <div className="contact-phone">
                    <div className="contact-contact">
                      {/* <h1>Ashvin</h1> */}
                      <a href="tel:9023090592">
                        <p>
                          <FaPhoneSquareAlt />
                          Call Now
                        </p>
                      </a>
                      <a href="http://wa.me/+919023090592">
                        <p>
                          <FaWhatsappSquare
                            style={{ padding: "0", margin: "0" }}
                          />
                          Whatsapp Now
                        </p>
                      </a>
                    </div>
                    <div className="contact-contact">
                      {/* <h1>Prakash</h1> */}
                      <a href="tel:9023426537">
                        <p>
                          <FaPhoneSquareAlt />
                          Call Now
                        </p>
                      </a>
                      <a href="http://wa.me/+919023426537">
                        <p>
                          <FaWhatsappSquare
                            style={{ padding: "0", margin: "0" }}
                          />
                          Whatsapp Now
                        </p>
                      </a>
                    </div>
                    <div className="contact-contact">
                      {/* <h1>Raju</h1> */}
                      <a href="tel:9023090592">
                        <p>
                          <FaPhoneSquareAlt />
                          Call Now
                        </p>
                      </a>
                      <a href="http://wa.me/+919023090592">
                        <p>
                          <FaWhatsappSquare
                            style={{ padding: "0", margin: "0" }}
                          />
                          Whatsapp Now
                        </p>
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Favouratie route here */}





          <div id="services" className="services-container">
            <div className="services-title">
              <p>See Our</p>
              <h1>Favourite Places!</h1>
              <p>Near Vadodara</p>
            </div>
            <div className="services-card">
              <div className="service">
                <Image className="service-img" src={place1} alt="place1" />


                <h1>
                  Statue Of Unity
                </h1>



                <span>
                  Visit the Statue of Unity, the world's tallest monument, to marvel at its grandeur, immerse yourself in India's rich history, and experience the warm hospitality and diverse traditions of Gujarat.
                </span>
              </div>
              <div className="service">
                <Image className="service-img" src={place2} alt="place2" />

                <h1>
                  Kavi Kamboi
                </h1>


                <span>
                  Discover the enigmatic Stambheshwar Mahadev Temple, known as 'the Disappearing Temple,' dedicated to Lord Shiva, nestled in the quaint village of Kavi Kamboi, Gujarat. Located just 55 km from Vadodara.              </span>
              </div>
              <div className="service">
                <Image className="service-img" src={place3} alt="place3" />
                <h1>
                  Pavagadh
                </h1>


                <span>
                  Pavagadh Hill is seated in Gujarat’s Panchmahal district and overlooks the ancient-city of Champaner. Covered with leafy greens, the summit is home to the temple of Goddess Kali.
                </span>
              </div>
              <div className="service">
                <Image className="service-img" src={place4} alt="place4" />
                <h1>
                  Poicha
                </h1>

                <span>
                  Nilkanth Dham Swaminarayan Temple is located at Poicha village on the bank of river Narmada which is about 80 kms from Bharuch and 60KM from Vadodara. It is beautiful swaminarayan temple constructed in large area and one of the most amazing pilgrimage attracts people around Gujarat.
                </span>
              </div>
            </div>
          </div>


















          <div id="form" className="form-mainContainer">
            <div className="form-container">
              <div className="form-title">
                <p>Fast and Quick</p>
                <h1>Book Your Car</h1>
              </div>
              <div className="form-content">
                <div className="form-form">
                  <form onSubmit={handleSubmit}>
                    <div className="form-input">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Your Phone"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        pattern="[0-9]{10}"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Your Pickup Location"
                        value={pickup}
                        onChange={(event) => setPickup(event.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Your Drop Location"
                        value={drop}
                        required
                        onChange={(event) => setDrop(event.target.value)}
                      />
                      <select
                        value={selectedCar}
                        onChange={handleCarChange}
                        required
                      >
                        <option value="">Your Cab Type</option>
                        <option value="SUV">SUV</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Innova">Innova</option>
                        <option value="Innova Crysta">Innova Crysta</option>
                        <option value="other">other</option>
                      </select>
                      <select
                        value={selectedType}
                        onChange={handleTypeChange}
                        required
                      >
                        <option value="">Your Trip Type</option>
                        <option value="Oneway">Oneway Trip</option>
                        <option value="Round">Round Trip</option>
                        <option value="Rental">Rental Trip</option>
                      </select>
                    </div>
                    <div className="form-submit">
                      <button>Book Now</button>
                    </div>
                  </form>
                </div>
                <div className="form-img">
                  <Image className="form-img-img" src={form} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div id="services" className="services-container">
            <div className="services-title">
              <p>Welcome</p>
              <h1>Our Services</h1>
            </div>
            <div className="services-card">
              <div className="service">
                <Image className="service-img" src={driver} alt="map" />
                <p>Experienced Drivers</p>
                <span>
                  All drivers are verified, allowing for a safe and enjoyable
                  ride.
                </span>
              </div>
              <div className="service">
                <Image className="service-img" src={map} alt="map" />
                <p>Outstation Services</p>
                <span>
                  Our top in Class Outstation Services provides you to go one
                  place to another.
                </span>
              </div>
              <div className="service">
                <Image className="service-img" src={building} alt="building" />
                <p>Corporate Rental</p>
                <span>
                  Corporate Service is helps Industry People for their Day to Day
                  need.
                </span>
              </div>
              <div className="service">
                <Image className="service-img" src={aircraft} alt="aircraft" />
                <p>Airport Services</p>
                <span>
                  Pickup & Drop Service from Airport can helps you to make your
                  trip easier.
                </span>
              </div>
              <div className="service">
                <Image className="service-img" src={baggage} alt="baggage" />
                <p>24x7 Available</p>
                <span>
                  Our 24x7 Available Taxi Services helps you to book & travel.
                </span>
              </div>
            </div>
          </div>
          <div id="cars" className="rent-mainContainer">
            <div className="rent-container">
              <div className="rent-title">
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
                    <p>
                      Experience comfortable and cozy rides with our
                      well-maintained sedans, perfect for small groups and solo
                      travelers.
                    </p>
                    <span>
                      <a style={{ color: 'grey' }} onClick={() => router.push('/cars')}>


                        Click for Price

                      </a>
                      {/* 10 ₹<p>/km</p> */}
                    </span>
                  </div>
                </div>
                <div className="rent-card">
                  <div className="rent-cardImg">
                    <Image className='rent-cardImg-img' src={car6} alt="car2" />
                  </div>
                  <div className="rent-description">
                    <h1>SUV</h1>
                    <p>
                      Our spacious SUVs are designed for larger groups, ensuring a
                      relaxing journey across all terrains and weather conditions.
                    </p>
                    <span>
                      <a style={{ color: 'grey' }} onClick={() => router.push('/cars')}>


                        Click for Price

                      </a>
                      {/* 12 ₹<p>/km</p> */}
                    </span>
                  </div>
                </div>
                <div className="rent-card">
                  <div className="rent-cardImg">
                    <Image className='rent-cardImg-img' src={car3} alt="car3" />
                  </div>
                  <div className="rent-description">
                    <h1>Inova</h1>
                    <p>
                      Choose our durable and comfortable Innovas for long
                      journeys, designed to provide ample space and a smooth
                      travel experience.
                    </p>
                    <span>
                      <a style={{ color: 'grey' }} onClick={() => router.push('/cars')}>


                        Click for Price

                      </a>
                      {/* 15 ₹<p>/km</p> */}
                    </span>
                  </div>
                </div>
                <div className="rent-card">
                  <div className="rent-cardImg">
                    <Image className='rent-cardImg-img' src={car4} alt="car4" />
                  </div>
                  <div className="rent-description">
                    <h1>Inova Crysta</h1>
                    <p>
                      For a touch of luxury, our Innova Crysta vehicles combine
                      style, comfort, and advanced amenities for an extraordinary
                      travel experience.
                    </p>
                    <span>
                      <a style={{ color: 'grey' }} onClick={() => {router.push('/cars') }}>


                        Click for Price

                      </a>
                      {/* 17 ₹<p>/km</p> */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>


































          {/* <div id="contact" className="fav-routes-mainContainer">
          <div className="contact-mainContainer">
            <div className="contact-container">
              <div className="contact-title">
                <h1>Contacts</h1>
              </div>
              <div className="contact-contacts">
                <div className="contact-phone">
                  <div className="contact-contact">
                    <h1>Ashvin</h1>
                    <a href="tel:9023090592">
                      <p>
                        <FaPhoneSquareAlt />
                        Call Now
                      </p>
                    </a>
                    <a href="http://wa.me/+919023090592">
                      <p>
                        <FaWhatsappSquare
                          style={{ padding: "0", margin: "0" }}
                        />
                        Whatsapp Now
                      </p>
                    </a>
                  </div>
                  <div className="contact-contact">
                    <h1>Prakash</h1>
                    <a href="tel:9023426537">
                      <p>
                        <FaPhoneSquareAlt />
                        Call Now
                      </p>
                    </a>
                    <a href="http://wa.me/+919023426537">
                      <p>
                        <FaWhatsappSquare
                          style={{ padding: "0", margin: "0" }}
                        />
                        Whatsapp Now
                      </p>
                    </a>
                  </div>
                  <div className="contact-contact">
                    <h1>Raju</h1>
                    <a href="tel:9023090592">
                      <p>
                        <FaPhoneSquareAlt />
                        Call Now
                      </p>
                    </a>
                    <a href="http://wa.me/+919023090592">
                      <p>
                        <FaWhatsappSquare
                          style={{ padding: "0", margin: "0" }}
                        />
                        Whatsapp Now
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
<div className="container">

   <CustomerReviews/>
</div>

          <div id="about" className="footer-mainContainer">
            <div className="footer-container">
              <div className="footer-about">
                <h1>About Cab Services</h1>
                <p>
                  Cabs4U is your reliable partner for premium car rentals,
                  offering a wide range of vehicles driven by experienced drivers
                  for personalized, comfortable, and cost-effective travel
                  experiences.
                </p>
                <h2>Cabs4u</h2>
                <span>Copyright © 2024 Comapany, All rights reserved.</span>
                <Link href="/terms">
                <p>Terms and Conditions</p>
      </Link>
                

              </div>
              <div className="footer-links">
                <h1>Quick Links</h1>
                <ul>
                  <li>
                    <MdKeyboardArrowRight />
                    <a href="#hero">Home</a>
                  </li>
                  <li>
                    <MdKeyboardArrowRight />
                    <a href="#form">Book Car</a>
                  </li>
                  <li>
                    <MdKeyboardArrowRight />
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <MdKeyboardArrowRight />
                    <a href="#cars">Car Rents</a>
                  </li>
                  {/* <li>
                    <MdKeyboardArrowRight />
                    <a href="#fav-routes">Favourite Routes</a>
                  </li> */}
                  <li>
                  <MdKeyboardArrowRight />
                  <Link href="/privacy">
                  Privacy Policy
                  </Link>
                </li>
                  <li>
                    <MdKeyboardArrowRight />
                    <a href="#form">Book Now</a>
                  </li>
                </ul>
              </div>
              <div className="footer-contactUs">
                <div className="social-media">
                  <a className="icon icon1" href="https://www.instagram.com/">
                    <FaInstagram size={20} />
                  </a>
                  <a className="icon icon2" href="https://www.discord.com/">
                    <FaDiscord size={50} />
                  </a>
                  <a className="icon icon3" href="https://www.linkedin.com/">
                    <FaLinkedin size={20} />
                  </a>
                  <a></a>
                  <a className="icon icon4" href="https://www.facebook.com/">
                    <FaFacebookF size={20} />
                  </a>
                  <a className="icon icon5" href="https://www.twitter.com/">
                    <FaTwitter size={20} />
                  </a>
                </div>
                <h1>Contact Us</h1>
                <div className="footer-contacts">
                  <p>
                    <MdOutlineLocationOn size={40} />
                    B- 8 Ambika dhan society nearby Bharat petrol pump Soma talav
                  </p>
                  <p>
                    <MdPhone size={20} />
                    +91 9023090592
                  </p>
                  <p>
                    <MdEmail size={20} />
                    service@cabs4u.in
                  </p>
                </div>
              </div>
            </div>

          </div>
          <button className="whatsapp">

            <a href="tel:09023090592" >
              <img src="./call.svg" alt="" srcSet="" />
            </a>
          </button>
          <ToastContainer />

        </div>
      </div>
    </>
  );
};

export default Homepage;
