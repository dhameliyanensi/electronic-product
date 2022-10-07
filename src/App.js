import './App.css';
// import { Carousel } from 'antd';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import './css/all.min.css';
import React, { useEffect } from 'react';
import { AiFillQqCircle } from "react-icons/ai";
import Aos from 'aos';
import "aos/dist/aos.css";

// http://www.templatemonsterpreview.com/demo/183584.html?_gl=1*b765c7*_ga*NTkwMTY5NjMxLjE2NDk0MTIzMTE.*_ga_FTPYEGT5LY*MTY2MDE1NDg2OS40MS4xLjE2NjAxNTQ4ODkuNDA.&_ga=2.205073744.1907226469.1660144517-590169631.1649412311

// http://www.templatemonsterpreview.com/demo/148680.html?_gl=1*1jfjfkn*_ga*NTkwMTY5NjMxLjE2NDk0MTIzMTE.*_ga_FTPYEGT5LY*MTY2MDE1NDg2OS40MS4xLjE2NjAxNTQ5NTkuNTM.&_ga=2.235038913.1907226469.1660144517-590169631.1649412311




// const App = () => {

function App() {
  useEffect(() => {
    Aos.init({ duration: 3000, offset: 250 });
  }, []);

  return (
    <div className='App'>
      {/* ----------------------start header sec----------------------- */}
      < AiFillQqCircle />
      <section>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      {/* ----------------------end header sec----------------------- */}
      {/* ---------------------start slider sec--------------------- */}
      <section>
        <div className="container">
          <div className="row mt-3">
            <div className="col-lg-8 col-xs-12">

              <Carousel variant="dark" >
                <Carousel.Item className='slid'>
                  <img
                    className="d-block w-100"
                    src={require("./image/s1.jpg")}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h1>We Beautify Your Home</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slid'>
                  <img
                    className="d-block w-100"
                    src={require("./image/s2.jpg")}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h1>Magnificent Interior<br></br>
                      Decoration Solutions</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slid'>
                  <img
                    className="d-block w-100"
                    src={require("./image/s3.jpg")}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h1>Decoration Solutions</h1>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-4 d-none d-lg-block">
              <div>
                <div className="banner">
                  <img src={require('./image/b1.jpg')} style={{ width: "277px", height: "176px" }} alt="" />
                  <div className="banner_cont">
                    <h3>up to <span class="color">50%</span> off</h3>
                    <p>LIFE GOODS.</p>
                    <a class="color" href="product">Shop now <i class="fa fa-angle-double-right"></i></a>
                  </div>
                </div>
              </div>
              <div className='mt-3 banner'>
                <img src={require('./image/b2.jpg')} style={{ width: "277px", height: "176px" }} alt="" />
                <div className="banner_cont">
                  <h3>up to <span class="color">30%</span> off</h3>
                  <p>MAKE BELIEVE.</p>
                  <a class="color" href="product">Shop now <i class="fa fa-angle-double-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* ---------------------end slider sec--------------------- */}
      {/* ------------------start freedom sec----------------------- */}
      <section>
        <div className="row mt-5 pt-3 pb-2">
          <div className="container">
            <div data-aos="fade-right" className="col">
              <h1 className='text-center mt-3'>Freedom to do SmartThings</h1>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-xl-6 col-md-12 ">
              <div style={{ textAlign: "center", borderRadius: "10px" }} className="sam1">
                <img src={require('./image/sam1.webp')} style={{ width: "100%" }} alt="" />

                <button className='btn1'>Pre Reserve Now</button>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className='flex'>
                <div className='box mt-5 sam2'>
                  <img src={require('./image/sam2.webp')} alt="" />
                  <button className='btn2'>BUY NOW</button>
                  <h6>Galaxy ZFlip4</h6>
                </div>
                <div className='box mt-5 sam2'>
                  <img src={require('./image/sam3.webp')} alt="" />
                  <button className='btn2'>BUY NOW</button>
                  <h6>Galaxy Watch5</h6>
                </div>
              </div>
              <div className='flex'>
                <div className='box sam2'>
                  <img src={require('./image/sam4.webp')} alt="" />
                  <button className='btn2'>BUY NOW</button>
                  <h6>Galaxy Buds2 Pro</h6>
                </div>
                <div className='box sam2'>
                  <img src={require('./image/sam5.webp')} alt="" />
                  <button className='btn2'>BUY NOW</button>
                  <h6>Baspok Addition</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------end freedom sec----------------------- */}
      {/*------------------start smart speaker sec-----------  */}
      <section>
        <div className="container">
          <div className="mt-5 speaker">
            <a href="">
              <img src={require('./image/offer-banner.jpg')} style={{ width: "100%" }} alt="" />
            </a>
          </div>
        </div>
      </section>
      {/*------------------end smart speaker sec-----------  */}
      {/* ----------------start tech news sec---------------- */}
      <section>

        <div class="album py-5 bg-light">
          <div class="container">
            <div className="row mt-5">
              <div data-aos="fade-right" className="col">
                <h2 className='text-center'>TECH NEWS</h2>
              </div>
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-md-3 g-3 mt-3">
              <div data-aos="fade-up" class="col">
                <div class="card shadow-sm zoom">
                  <img src={require('./image/t1.jpg')} alt="" />

                  <div class="card-body">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Gadgets</button>
                    </div>
                    <h6 className='gadgets'><a href="blog-details.html">Orci varius natoque penatibus et magnis dis parturient montes</a></h6>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" class="col">
                <div class="card shadow-sm zoom">
                  <img src={require('./image/t2.jpg')} alt="" />
                  <div class="card-body">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Gadgets</button>
                    </div>
                    <h6 className='gadgets'><a href="blog-details.html">Orci varius natoque penatibus et magnis dis parturient montes</a></h6>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" class="col">
                <div class="card shadow-sm zoom">
                  <img src={require('./image/t3.jpg')} alt="" />

                  <div class="card-body">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Gadgets</button>
                    </div>
                    <h6 className='gadgets'><a href="blog-details.html">Orci varius natoque penatibus et magnis dis parturient montes</a></h6>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" class="col d-block d-md-none d-lg-block">
                <div class="card shadow-sm zoom">
                  <img src={require('./image/t4.jpg')} alt="" />

                  <div class="card-body">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Gadgets</button>
                    </div>
                    <h6 className='gadgets'><a href="blog-details.html">Orci varius natoque penatibus et magnis dis parturient montes</a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
      {/* ----------------end tech news sec---------------- */}
      {/* --------------start service sec------------------- */}
      <section>
        <div className="bg_color">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div class="text-center mb-30">
                  <div class="service-icon flex">
                    <div className="circle flex">
                      <i class="fa-solid fa-truck icon1"></i>
                    </div>
                  </div>
                  <div class="service-content mt-3">
                    <h4>Freeship Wordwide</h4>
                    <p>In ac hendrerit turpis. Aliquam ultrices dolor dolor, at commodo diam feugiat</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div class="single-service text-center mb-30">
                  <div class="service-icon flex">
                    <div className="circle flex">
                      <i class="fa-solid fa-gift icon1"></i>
                    </div>
                  </div>
                  <div class="service-content mt-3">
                    <h4>Special Offers</h4>
                    <p>In ac hendrerit turpis. Aliquam ultrices dolor dolor, at commodo diam feugiat</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div class="single-service text-center mb-30">
                  <div class="service-icon flex">
                    <div className="circle flex">
                      <i class="fa-solid fa-lock icon1"></i>
                    </div>
                  </div>
                  <div class="service-content mt-3">
                    <h4>Order Protection</h4>
                    <p>In ac hendrerit turpis. Aliquam ultrices dolor dolor, at commodo diam feugiat</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-block d-md-none d-lg-block">
                <div class="single-service text-center mb-30">
                  <div class="service-icon flex">
                    <div className="circle flex">
                      <i class="fa-solid fa-headset icon1"></i>
                    </div>
                  </div>
                  <div class="service-content mt-3">
                    <h4>Proffesional Support</h4>
                    <p>In ac hendrerit turpis. Aliquam ultrices dolor dolor, at commodo diam feugiat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------end service sec------------------- */}
      {/* -----------start feature product sec----------------- */}
      <section>
        <div className="container">
          <div data-aos="fade-right">
            <h3 className='mt-5'>FEATURED PRODUCTS</h3>
            <p>There are many variations of passages of brands available</p>

          </div>
          <div class="album py-5 bg-light">
            <div class="container">

              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                <div class="col">
                  <div class="card shadow-sm">
                    <div className="image">
                      <img src={require('./image/f1.webp')} style={{ width: "100%" }} alt="" />
                    </div>
                    <div class="card-body">
                      <h6 className='mt-3'>iphone 12</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 86.00</h3>
                      <div className="flex mb c1">
                        <div className='circle1 ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle1'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle1'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle1'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <div className="image">
                      <img src={require('./image/f2.png')} style={{ width: "100%" }} alt="" />
                    </div>
                    <div class="card-body">
                      <h6 className='mt-3'>Head Phone</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 89.00</h3>
                      <div className="flex mb c1">
                        <div className='circle1 ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle1'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle1'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle1'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <div className="image">
                      <img src={require('./image/f3.png')} style={{ width: "100%" }} alt="" />
                    </div>
                    <div class="card-body">
                      <h6 className='mt-3'>Smart Watch</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 80.00</h3>
                      <div className="flex mb c1">
                        <div className='circle1 ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle1'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle1'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle1'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col d-block d-xs-none d-md-none d-lg-block">
                  <div class="card shadow-sm">
                    <div className='image'>
                      <img src={require('./image/f4.png')} style={{ width: "100%" }} alt="" />
                    </div>
                    <div className="flex mb c1">
                      <div className='circle1 ml'>
                        <i class="fa-solid fa-heart text-center"></i>
                      </div>
                      <div className='circle1'>
                        <i class="fa-brands fa-searchengin"></i>
                      </div>
                      <div className='circle1'>
                        <i class="fa-solid fa-rotate"></i>
                      </div>
                      <div className='circle1'>
                        <i class="fa-solid fa-cart-plus"></i>
                      </div>
                    </div>
                    <div class="card-body">
                      <h6 className='mt-3'>Laptop</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 69.00</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------end feature product sec----------------- */}
      {/* -------------start home appliance sec--------------- */}
      <section>
        <div className='app'>
          <img src={require('./image/home.jpg')} alt="" style={{width:"100%"}}></img>
          <div class="centered">
            <h1>Home Appliances</h1>
          </div>
          
        </div>
      </section>
      {/* -------------end home appliance sec--------------- */}
      {/* ---------------start latest product sec---------- */}
      <section>
        <div className="container">
          <div className="row mt-5">
            <div data-aos="fade-right" className="col">
              <h2>
                LATEST PRODUCT
              </h2>
            </div>
          </div>
          <div class="nav1 mb-60 flex1 mt-4">
            <a href='#' className='all'>
              All
            </a>
            <a href="#">
              Computer
            </a>
            <a href="#">
              Accessories
            </a>
            <a href="#">
              Headphones
            </a>
            <a href="#" className='d-xs-none d-md-block d-none'>
              Tablet
            </a>
            <a href="#" className='d-xs-none d-md-block d-none'>
              Laptop
            </a>
          </div>
          <div className="row g-3 mt-4">
            <div className="col-lg-2 col-md-3 col-xs-6 col-sm-6">
              <div className="bg-light blue">
                <a href="">
                  <img src={require('./image/1.png')} alt="" />
                </a>
              </div>
              <div className='mt-2'>
                <p className='p'>black smart headphone</p>
                <p>$59.00</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-xs-6 col-sm-6">
              <div className="bg-light blue">
                <a href="">
                  <img src={require('./image/2.png')} alt="" />
                </a>
              </div>
              <div className='mt-2'>
                <p className='p'>Alexa-play Music</p>
                <p>$59.00</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-xs-6 col-sm-6">
              <div className="bg-light blue">
                <a href="">
                  <img src={require('./image/3.png')} alt="" />
                </a>
              </div>
              <div className='mt-2'>
                <p className='p'>Golden AirPods</p>
                <p>$59.00</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-xs-6 col-sm-6">
              <div className="bg-light blue">
                <a href="">
                  <img src={require('./image/4.png')} alt="" />
                </a>
              </div>
              <div className='mt-2'>
                <p className='p'>red iphone</p>
                <p>$59.00</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 d-none d-lg-block">
              <div className="bg-light blue">
                <a href="">
                  <img src={require('./image/5.png')} alt="" />
                </a>
              </div>
              <div className='mt-2'>
                <p className='p'>Amazon smart</p>
                <p>$59.00</p>
              </div>
            </div>
            <div className="col-lg-2 d-none d-lg-block">
              <div className="bg-light blue">
                <a href="">
                  <img src={require('./image/6.png')} alt="" />
                </a>
              </div>
              <div className='mt-2'>
                <p className='p'>iphone 12Pro</p>
                <p>$59.00</p>
              </div>
            </div>

          </div>
          <div className="row mt-5 pt-4">
            <div className="col">
              <div>
                <a href="" className='round'>
                  <img src={require('./image/c1.jpg')} alt="" />
                </a>
              </div>
              <p className='p'>WATCH</p>
            </div>
            <div className="col">
              <div>
                <a href="" className='round'>
                  <img src={require('./image/c2.jpg')} alt="" />
                </a>
              </div>
              <p className='p'>SMART PHONE</p>
            </div>
            <div className="col">
              <div>
                <a href="" className='round'>
                  <img src={require('./image/c3.jpg')} alt="" />
                </a>
              </div>
              <p className='p'>HEADPHONE</p>
            </div>
            <div className="col d-none d-md-block">
              <div>
                <a href="" className='round'>
                  <img src={require('./image/c4.jpg')} alt="" />
                </a>
              </div>
              <p className='p'>LAPTOP</p>
            </div>
            <div className="col d-none d-md-block">
              <div>
                <a href="" className='round'>
                  <img src={require('./image/c5.jpg')} alt="" />
                </a>
              </div>
              <p className='p'>MOBILE</p>
            </div>
            <div className="col d-none d-lg-block">
              <div>
                <a href="" className='round'>
                  <img src={require('./image/c6.jpg')} alt="" />
                </a>
              </div>
              <p className='p'>SPEAKER</p>
            </div>
            <div className="col d-none d-lg-block">
              <div>
                <a href="" className='round'>
                  <img src={require('./image/c7.jpg')} alt="" />
                </a>
              </div>
              <p className='p'>SMART TV</p>
            </div>
            <div className="col d-none d-lg-block">
              <div>
                <a href="" className='round'>
                  <img src={require('./image/c8.jpg')} alt="" />
                </a>
              </div>
              <p className='p'>TABLET</p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------end latest product sec---------- */}
      {/* --------------start footer sec-------------- */}
      <section>
        <div className="container">
          <div className="footer">
            <div className="padding">
              <div data-aos="fade-right" className="row">
                <div class="col-xl-4 col-lg-5 col-md-4 d-block d-md-none d-lg-block">
                  <div>
                    <div className='px-5'>
                      <img src={require('./image/logo.png')} style={{ width: "100%" }} alt=""></img>
                    </div>
                    <div class="pt-5 py-5">
                      <p className='padd_in'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the subas industry's standard dummy text ever since the 1500s,</p>
                      <p className='padd_in'>When an unknown printer took a galley of type and If you are going to use a passage of Lorem Ipsum scrambled it to make.</p>
                    </div>
                    <div className="flex2 padd_in d-none d-lg-block">
                      <div className='circle_f'>
                        <i class="fa-brands fa-facebook-f"></i>
                      </div>
                      <div className='circle_f'>
                        <i class="fa-brands fa-google-plus-g"></i>
                      </div>
                      <div className='circle_f'>
                        <i class="fa-brands fa-twitter"></i>
                      </div>
                      <div className='circle_f'>
                        <i class="fa-solid fa-rss"></i>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="col-xl-2 d-block d-xl-block d-lg-none d-md-none">
                  <div className='mt-5'>
                    <h4>SHIPPING</h4>
                    <ul class="footer-menu">
                      <li className='pt-4'>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>New Products</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Discount Products</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Best Sell Products</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Popular Products</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Manufactirers</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Suppliers</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Special Products</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-3 mt-5">
                  <div class="single-footer">
                    <h4 class="footer-title border-left">MY ACCOUNT</h4>
                    <ul class="footer-menu">
                      <li className='pt-4'>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>My Account</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>My Wishlist</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>My Cart</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Sign In</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Registration</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Check out</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Oder Complete</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mt-5 px-5">
                  <div class="single-footer">
                    <h4 class="footer-title border-left">GET IN TOUCH</h4>
                    <div class="footer-message">
                      <form action="">
                        <input type="text" placeholder='Your name here...' className='form mt-4' />
                        <input type="email" placeholder='Your email here...' className='form mt-3' />
                        <input type="text" style={{ height: "100px" }} placeholder='Your message here...' className='form mt-3' />
                      </form>
                      <button className='submit'>
                        <h6>SUBMIT MESSAGE</h6>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <Spin /> */}

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------end footer sec-------------- */}

    </div>


  );
}

export default App;
