import React from 'react';
import { Link } from "react-router-dom";

import b1 from '../assets/img/product/1.jpg';
import b2 from '../assets/img/product/2.jpg';
import b3 from '../assets/img/product/3.jpg';
import b4 from '../assets/img/product/4.jpg';
import b6 from '../assets/img/product/16.jpg';
import b7 from '../assets/img/product/7.jpg';
import b8 from '../assets/img/product/8.jpg';
import b10 from '../assets/img/product/10.jpg';

function Profile(){
    return(
        <div className="profile">
            <header>
                    
                    {/*-- header-mid-area-start --*/}
                <div className="header-mid-area ptb-20">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="logo-area text-center logo-xs-mrg">
                            <Link to="/loginHome"><h1 className="text-center">Bibliophilic</h1></Link>
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
                                            <li>
                                                <Link to="/categoriesLogin">Categories<i className="fa fa-angle-down" /></Link>
                                                <div className="sub-menu sub-menu-2">
                                                <ul>
                                                    <li><Link to="/artMusic">Art and Music</Link></li>
                                                    <li><Link  to="/biographies">Biographies</Link></li>
                                                    <li><Link to="/business">Business</Link></li>
                                                    <li><Link to="/comics">Comics</Link></li>
                                                    <li><Link to="/computer">Computer and Technology</Link></li>
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
                                        <li className="active">
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
            <div className="user-profile mt-80">
                <div className="col-lg-9 col-md-12 col-12 order-lg-2 order-1">
                
                <div className="section-title-5 mb-30" style={{marginLeft:'300px'}}>
                    <h2>Leo_laneh</h2>
                </div>
                <div className="toolbar mb-30" style={{marginLeft:'300px'}}>
                    <div className="shop-tab">
                    <div className="tab-3" style={{marginLeft:'300px'}}>
                        <ul className="nav" >
                        <li><Link  to="">10 Books</Link></li>
                        <li><Link to="" >15 Followers</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            
            <div className="readRecents">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-left mb-20">
                            <h2>Recent Reads</h2>
                            </div>
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
                                                <Link className="action-view" to="/bookDetails"  title="Quick View">
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
                                                <Link className="action-view" to="/bookDetails"  title="Quick View">
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
                                                <Link className="action-view" to="/bookDetails"  title="Quick View">
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
                                                <Link className="action-view" to="/bookDetails"  title="Quick View">
                                                <i className="fa fa-search-plus" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                            <h4><Link to="#">Harry Potter</Link></h4>
                                        </div>
                                        
                                    </div>
                                    {/* single-product-end */}
                                    <div class="product-details text-center" style={{marginTop:'50px', marginLeft:'50%'}}>
                                        <button className="btn btn-sqr">View All</button> 
                                    </div>
                                        
                                    
                                </div>
                            
                        </div>
                        </div>
                        
                        
                    </div>
                    {/* tab-area-end */}
                </div>
            </div>

            <div className="bookshelf mt-50 mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-left mb-20">
                            <h2>My Bookshelf</h2>
                            </div>
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
                                                <img src={b10} alt="book" className="primary" />
                                            </Link>
                                            <div className="quick-view">
                                                <Link className="action-view" to="/bookDetails"  title="Quick View">
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
                                                <img src={b6} alt="book" className="primary" />
                                            </Link>
                                            <div className="quick-view">
                                                <Link className="action-view" to="/bookDetails"  title="Quick View">
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
                                                <img src={b7} alt="book" className="primary" />
                                            </Link>
                                            <div className="quick-view">
                                                <Link className="action-view" to="/bookDetails"  title="Quick View">
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
                                                <img src={b8} alt="book" className="primary" />
                                            </Link>
                                            <div className="quick-view">
                                                <Link className="action-view" to="/bookDetails"  title="Quick View">
                                                <i className="fa fa-search-plus" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="product-details text-center" style={{marginTop:'-10px'}}>
                                            <h4><Link to="#">Harry Potter</Link></h4>
                                        </div>
                                        
                                    </div>
                                    {/* single-product-end */}
                                    <div class="product-details text-center" style={{marginTop:'50px', marginLeft:'50%'}}>
                                        <button className="btn btn-sqr">View All</button> 
                                    </div>
                                        
                                    
                                </div>
                            
                        </div>
                        </div>
                        
                        
                    </div>
                    {/* tab-area-end */}
                </div>
            </div>

        </div>
    );
}
export default Profile;