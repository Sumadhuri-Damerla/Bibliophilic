import React from 'react';
import { Link } from "react-router-dom";
import b1 from '../assets/img/product/1.jpg';
import b2 from '../assets/img/product/2.jpg';
import b3 from '../assets/img/product/3.jpg';
import b4 from '../assets/img/product/4.jpg';
import b6 from '../assets/img/product/16.jpg';
import b7 from '../assets/img/product/7.jpg';
import b8 from '../assets/img/product/8.jpg';
import b9 from '../assets/img/product/9.jpg';
import b10 from '../assets/img/product/10.jpg';
import slider1 from '../assets/img/slider/1.jpg';
import slider2 from '../assets/img/slider/2.jpg'; 


function Home()
{
    return(
        <div className="home">
            <header>
                    
                    {/*-- header-mid-area-start --*/}
                <div className="header-mid-area ptb-20">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="logo-area text-center logo-xs-mrg">
                            <Link to="/"><h1 className="text-center">Bibliophilic</h1></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            {/*-- header-mid-area-end --*/}
            {/*-- main-menu-area-start --*/}
                <div className="main-menu-area d-md-none d-none d-lg-block sticky-header-1" id="header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="menu-area">
                                    <nav>
                                        <ul>
                                            
                                            <li className="active">
                                                <Link to="/">Home</Link>
                                            
                                            </li>
                                            <li>
                                                <Link to="/categories">Categories<i className="fa fa-angle-down" /></Link>
                                                <div className="sub-menu sub-menu-2">
                                                <ul>
                                                    <li><Link to="/artMusic">Art and Music</Link></li>
                                                    <li><Link  to="/biographies">Biographies</Link></li>
                                                    <li><Link to="/business">Business</Link></li>
                                                    <li><Link to="/comics">Comics</Link></li>
                                                    <li><Link to="/computer">Computer</Link></li>
                                                    <li><Link to="/cooking">Cooking</Link></li>
                                                    <li><Link to="/education">Education</Link></li>
                                                    <li><Link to="/health">Health and Fitness</Link></li>
                                                    <li><Link to="/history">History</Link></li>
                                                    <li><Link to="/romance">Romance</Link></li>
                                                    <li><Link to="/kids">Kids</Link></li>
                                                    <li><Link to="/sports">Sports</Link></li>
                                                    <li><Link to="/travel">Travel</Link></li>
                                                    <li><Link to="/crime">Crime</Link></li>
                                                </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                    
                            </div>
                            <div className="col-lg-4">
                                <div className="menu-area ml-5 pl-5">
                            
                                    <nav>
                                        <ul>
                                        <li>
                                            <Link to="/SignIn">Sign in</Link>
                                        </li>
                                        <li>
                                            <Link to="/SignUp">Register</Link>
                                        </li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*-- main-menu-area-end --*/}
            </header>

            <div className="hero-image">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption text-left" >
                            <h1 style={{marginTop:'-350px', marginLeft:'-140px'}}>Bibliophilic</h1>
                            <h5 style={{marginTop:'20px',marginLeft:'-140px'}}>A Place where book lovers can find books of their interest.</h5>
                            <h5 style={{marginLeft:'-140px'}}>A place to connect with like-minded people. </h5>                
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="home-6" style={{marginTop:'20px',marginBottom:'50px'}}>
                {/* banner-area-6-start */}
                <div className="banner-area-6 pt-40">
                <div className="container">
                    <div className="text-center pb-4">
                        <h2>Categories</h2>
                    </div>
                    <div className="row text-left p-2">
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-banner-8">
                                <div className="banner-img-2">
                                    <Link to="/artMusic"><h5>Art and Music</h5></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-banner-8">
                                <div className="banner-img-2">
                                    <Link to="/biographies"><h5>Biographies</h5></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-banner-8">
                                <div className="banner-img-2">
                                    <Link to="/comics"><h5>Comics</h5></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-banner-8">
                                <div className="banner-img-2">
                                    <Link to="/computer"><h5>Computer</h5></Link>
                                </div>
                            </div>
                        </div>     
                    </div>

                    <div className="row text-left p-2">
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-banner-8">
                                <div className="banner-img-2">
                                    <Link to="/cooking"><h5>Cooking</h5></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-banner-8">
                                <div className="banner-img-2">
                                    <Link to="/education"><h5>Education</h5></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-banner-8">
                                <div className="banner-img-2">
                                    <Link to="/health"><h5>Health and Fitness</h5></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-banner-8">
                                <div className="banner-img-2">
                                    <Link to="/history"><h5>History</h5></Link>
                                </div>
                            </div>
                        </div>     
                    </div>

                    <div className="row text-left p-2">
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-banner-8">
                                <div className="banner-img-2">
                                    <Link to="/romace"><h5>Romance</h5></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-banner-8">
                                <div className="banner-img-2">
                                    <Link to="/kids"><h5>Kids</h5></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-banner-8">
                                <div className="banner-img-2">
                                    <Link to="/sports"><h5>Sports</h5></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-banner-8">
                                <div className="banner-img-2">
                                    <Link to="/travel"><h5>Travel </h5></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-banner-8">
                                <div className="banner-img-2">
                                    <Link to="/crime"><h5>Crime </h5></Link>
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>
                </div>

            </div>

                {/* product-area-start , most read books*/}
            <div className="product-area pt-95 xs-mb mb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-50">
                        <h2>Top Interesting</h2>
                        <p>Browse the collection of our most read books. <br /> You will definitely find what you are looking for..</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        {/* tab-menu-start */}
                        <div className="tab-menu mb-40 text-center">
                        <ul className="nav justify-content-center">
                            <li><Link className="active" to="" data-toggle="tab">Most Read Books</Link></li>
                        </ul>
                        </div>
                        {/* tab-menu-end */}
                    </div>
                </div>
                {/* tab-area-start */}
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="Audiobooks">
                    <div className="tab-active">
                        
                        {/* single-product-start */}
                            <div className="row">
                                
                                <div className=" col-lg-3 col-md-3 col-12 product-wrapper mt-4">
                                    <div className="product-img">
                                        <Link to="#">
                                            <img src={b1} alt="book" className="primary" />
                                        </Link>
                                        <div className="quick-view">
                                            <Link className="action-view" to="product-details.html"  title="Quick View">
                                            <i className="fa fa-search-plus" />
                                            </Link>
                                        </div>
                                    
                                    </div>
                                    <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                        <h4><Link to="#">A Bigger Prize</Link></h4>
                                    </div>
                                    
                                </div>
                                {/* single-product-end */}
                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12 product-wrapper mt-4">
                                    <div className="product-img">
                                        <Link to="#">
                                            <img src={b2} alt="book" className="primary" />
                                        </Link>
                                        <div className="quick-view">
                                            <Link className="action-view" to="product-details.html"  title="Quick View">
                                            <i className="fa fa-search-plus" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                        <h4><Link to="#">Strive Shoulder Pack</Link></h4>
                                    </div>
                                </div>
                                {/* single-product-end */}
                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12 product-wrapper mt-4">
                                    <div className="product-img">
                                        <Link to="#">
                                            <img src={b3} alt="book" className="primary" />
                                        </Link>
                                        <div className="quick-view">
                                            <Link className="action-view" to="product-details.html"  title="Quick View">
                                            <i className="fa fa-search-plus" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                        <h4><Link to="#">The Gettyburg Address</Link></h4>
                                    </div>
                                </div>
                                {/* single-product-end */}
                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12 product-wrapper mt-4">
                                    <div className="product-img">
                                        <Link to="#">
                                            <img src={b4} alt="book" className="primary" />
                                        </Link>
                                        <div className="quick-view">
                                            <Link className="action-view" to="product-details.html"  title="Quick View">
                                            <i className="fa fa-search-plus" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                        <h4><Link to="#">Harry Potter</Link></h4>
                                    </div>
                                    
                                </div>
                                {/* single-product-end */}
                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12 product-wrapper mt-4">
                                    <div className="product-img">
                                        <Link to="#">
                                            <img src={b6} alt="book" className="primary" />
                                        </Link>
                                        <div className="quick-view">
                                            <Link className="action-view" to="product-details.html"  title="Quick View">
                                            <i className="fa fa-search-plus" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                        <h4><Link to="#">Shaping Humanity</Link></h4>
                                    </div>
                                </div>
                                {/* single-product-end */}
                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12 product-wrapper mt-4">
                                    <div className="product-img">
                                        <Link to="#">
                                            <img src={b7} alt="book" className="primary" />
                                        </Link>
                                        <div className="quick-view">
                                            <Link className="action-view" to="product-details.html" data-target="#productModal" data-toggle="modal" title="Quick View">
                                            <i className="fa fa-search-plus" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                        <h4><Link to="#">Creating Your Own Destiny</Link></h4>
                                    </div>
                                </div>
                                {/* single-product-end */}
                            </div>
                         
                      </div>
                    </div>
                    
                    
                </div>
                {/* tab-area-end */}

                <div className="row mt-5">
                    <div className="col-lg-12">
                        {/* tab-menu-start */}
                        <div className="tab-menu mb-40 text-center">
                        <ul className="nav justify-content-center">
                            <li><Link className="active" to="" data-toggle="tab">Most Flag Books</Link></li>
                        </ul>
                        </div>
                        {/* tab-menu-end */}
                    </div>
                </div>
                {/* tab-area-start */}
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="Audiobooks">
                    <div className="tab-active">
                        
                        {/* single-product-start */}
                            <div className="row">
                                
                                <div className=" col-lg-3 col-md-3 col-12 product-wrapper mt-4">
                                    <div className="product-img">
                                        <Link to="#">
                                            <img src={b7} alt="book" className="primary" />
                                        </Link>
                                        <div className="quick-view">
                                            <Link className="action-view" to="product-details.html"  title="Quick View">
                                            <i className="fa fa-search-plus" />
                                            </Link>
                                        </div>
                                    
                                    </div>
                                    <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                        <h4><Link to="#">Creating Your Own Destiny</Link></h4>
                                    </div>
                                    
                                </div>
                                {/* single-product-end */}
                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12 product-wrapper mt-4">
                                    <div className="product-img">
                                        <Link to="#">
                                            <img src={b8} alt="book" className="primary" />
                                        </Link>
                                        <div className="quick-view">
                                            <Link className="action-view" to="product-details.html"  title="Quick View">
                                            <i className="fa fa-search-plus" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                        <h4><Link to="#">Tim O'Brien</Link></h4>
                                    </div>
                                </div>
                                {/* single-product-end */}
                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12 product-wrapper mt-4">
                                    <div className="product-img">
                                        <Link to="#">
                                            <img src={b9} alt="book" className="primary" />
                                        </Link>
                                        <div className="quick-view">
                                            <Link className="action-view" to="product-details.html"  title="Quick View">
                                            <i className="fa fa-search-plus" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                        <h4><Link to="#">Shaping Humanity</Link></h4>
                                    </div>
                                </div>
                                {/* single-product-end */}
                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12 product-wrapper mt-4">
                                    <div className="product-img">
                                        <Link to="#">
                                            <img src={b10} alt="book" className="primary" />
                                        </Link>
                                        <div className="quick-view">
                                            <Link className="action-view" to="product-details.html"  title="Quick View">
                                            <i className="fa fa-search-plus" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                        <h4><Link to="#">Desevendendo Princesas</Link></h4>
                                    </div>
                                    
                                </div>
                                {/* single-product-end */}
                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12 product-wrapper mt-4">
                                    <div className="product-img">
                                        <Link to="#">
                                            <img src={b1} alt="book" className="primary" />
                                        </Link>
                                        <div className="quick-view">
                                            <Link className="action-view" to="product-details.html"  title="Quick View">
                                            <i className="fa fa-search-plus" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                        <h4><Link to="#">A Bigger Prize</Link></h4>
                                    </div>
                                </div>
                                {/* single-product-end */}
                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12 product-wrapper mt-4">
                                    <div className="product-img">
                                        <Link to="#">
                                            <img src={b4} alt="book" className="primary" />
                                        </Link>
                                        <div className="quick-view">
                                            <Link className="action-view" to="product-details.html" data-target="#productModal" data-toggle="modal" title="Quick View">
                                            <i className="fa fa-search-plus" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                        <h4><Link to="#">Harry Potter</Link></h4>
                                    </div>
                                </div>
                                {/* single-product-end */}
                            </div>
                         
                      </div>
                    </div>
                    
                    
                </div>
                {/* tab-area-end */}

            </div>
            </div>
            {/* product-area-end */}





        </div>
    );
}
export default Home;