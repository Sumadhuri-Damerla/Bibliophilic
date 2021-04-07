import React from 'react';
import { Link } from "react-router-dom";

import b11 from '../assets/img/product/11.jpg';
import b12 from '../assets/img/product/10.jpg';
import b13 from '../assets/img/product/13.jpg';
import b14 from '../assets/img/product/15.jpg';

function Biographies(){
    return(
        <div className="biography">
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
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="menu-area">
                                    <nav>
                                        <ul>
                                            
                                            <li>
                                                <Link to="/loginHome">Home</Link>
                                            </li>
                                            <li className="active">
                                                <Link to="/categoriesLogin">Categories<i className="fa fa-angle-down" /></Link>
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
                            <div className="col-lg-6">
                                <div className="menu-area ">
                            
                                    <nav>
                                        <ul>
                                        <li>
                                            <Link to="/profile">Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/bookshelf">Bookshelf</Link>
                                        </li>
                                        <li>
                                            <Link to="/followers">Followers</Link>
                                        </li>
                                        
            
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="col-lg-2">
                                <div className="menu-area ">
                            
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link to=""><i className="fa fa-user" />Username</Link>
                                                <div className="sub-menu sub-menu-2">
                                                    <ul>
                                                        <li><Link to="/logout">Logout</Link></li>
                                                    </ul>
                                                </div>
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

            <div className="shop-main-area mb-70 mt-50">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-3 col-md-12 col-12 order-lg-1 order-2 mt-sm-50 mt-xs-40">
                        <div className="category-area mb-30">
                        <h3><Link to="#">Category Menu <i className="fa fa-bars" /></Link></h3>
                        <div className="category-menu">
                            <nav className="menu">
                            <ul>
                                <li><Link to="/categoriesLogin">All</Link></li>
                                <li><Link to="/artMusic">Art and Music</Link></li>
                                <li className="active"><Link  to="/biographies">Biographies</Link></li>
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
                            </nav>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-12 order-lg-2 order-1">
                        <div className="section-title-5 mb-30">
                        <h2>Biographies</h2>
                        </div>
                        {/* tab-area-start */}
                        <div className="tab-content text-justify">
                        <div className="tab-pane fade show active" id="list">
                            {/* single-shop-start */}
                            <div className="single-shop mb-30">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                <div className="product-wrapper-2">
                                    <div className="product-img">
                                    <Link to="#">
                                        <img src={b11} alt="book" className="primary" />
                                    </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                <div className="product-wrapper-content">
                                    <div className="product-details">
                                    <div className="product-rating">
                                        <ul>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="#">Crown Summit</Link></h4>
                                    <h6>Author1</h6>
                                    <p>The sporty Joust Duffle Bag can't be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare,... </p>
                                    </div>
                                    <div className="product-link">
                                    <div className="product-button">
                                        <Link to="#" title="Add to cart"><i className="fa fa-book" />Add to Bookshelf</Link>
                                    </div>
                                    <div className="add-to-link">
                                        <ul>
                                        <li><Link to="/bookDetails" title="Details"><i className="fa fa-external-link" /></Link></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* single-shop-end */}
                            {/* single-shop-start */}
                            <div className="single-shop mb-30">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                <div className="product-wrapper-2">
                                    <div className="product-img">
                                    <Link to="#">
                                        <img src={b12} alt="book" className="primary" />
                                    </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                <div className="product-wrapper-content">
                                    <div className="product-details">
                                    <div className="product-rating">
                                        <ul>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="#">Driven Backpack</Link></h4>
                                    <h6>Author2</h6>
                                    <p>The sporty Joust Duffle Bag can't be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare,... </p>
                                    </div>
                                    <div className="product-link">
                                    <div className="product-button">
                                        <Link to="#" title="Add to cart"><i className="fa fa-book" />Add to Bookshelf</Link>
                                    </div>
                                    <div className="add-to-link">
                                        <ul>
                                        <li><Link to="/bookDetails" title="Details"><i className="fa fa-external-link" /></Link></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* single-shop-end */}
                            {/* single-shop-start */}
                            <div className="single-shop mb-30">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                <div className="product-wrapper-2">
                                    <div className="product-img">
                                    <Link to="#">
                                        <img src={b13} alt="book" className="primary" />
                                    </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                <div className="product-wrapper-content">
                                    <div className="product-details">
                                    <div className="product-rating">
                                        <ul>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="#">Fusion Backpack</Link></h4>
                                    <h6>Author3</h6>
                                    <p>The sporty Joust Duffle Bag can't be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare,... </p>
                                    </div>
                                    <div className="product-link">
                                    <div className="product-button">
                                        <Link to="#" title="Add to cart"><i className="fa fa-book" />Add to Bookshelf</Link>
                                    </div>
                                    <div className="add-to-link">
                                        <ul>
                                        <li><Link to="/bookDetails" title="Details"><i className="fa fa-external-link" /></Link></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* single-shop-end */}
                            {/* single-shop-start */}
                            <div className="single-shop mb-30">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                <div className="product-wrapper-2">
                                    <div className="product-img">
                                    <Link to="#">
                                        <img src={b14} alt="book" className="primary" />
                                    </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                <div className="product-wrapper-content">
                                    <div className="product-details">
                                    <div className="product-rating">
                                        <ul>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="#">Set of Sprite Yoga Straps</Link></h4>
                                    <h6>Author4</h6>
                                    <p>The sporty Joust Duffle Bag can't be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare,... </p>
                                    </div>
                                    <div className="product-link">
                                    <div className="product-button">
                                        <Link to="#" title="Add to cart"><i className="fa fa-book" />Add to Bookshelf</Link>
                                    </div>
                                    <div className="add-to-link">
                                        <ul>
                                        <li><Link to="/bookDetails" title="Details"><i className="fa fa-external-link" /></Link></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* single-shop-end */}
                        </div>
                        </div>
                        {/* tab-area-end */}
                        {/* pagination-area-start */}
                        <div className="pagination-area mt-50">
                        <div className="list-page-2">
                            <p>Items 1-9 of 11</p>
                        </div>
                        <div className="page-number">
                            <ul>
                            <li><Link to="#" className="active">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li><Link to="#">3</Link></li>
                            <li><Link to="#">4</Link></li>
                            <li><Link to="#" className="angle"><i className="fa fa-angle-right" /></Link></li>
                            </ul>
                        </div>
                        </div>
                        {/* pagination-area-end */}
                    </div>
                    </div>
                </div>
                </div>

	


        </div>
    );
}
export default Biographies;