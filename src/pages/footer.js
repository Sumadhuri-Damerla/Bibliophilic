import React from 'react';
import { Link } from "react-router-dom";

function Footer()
{
    return(
        <footer>
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="footer-top-menu bb-2">
                        <h2 style={{color:'white'}}>Bibliophilic</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

  {/* footer-mid-start */}
  <div className="footer-mid ptb-50">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="single-footer br-2 xs-mb">
                <div className="footer-title mb-20">
                  <h3>Links</h3>
                </div>
                <div className="footer-mid-menu">
                  <ul>
                    <li><a href="about.html">Home</a></li>
                    <li><a href="#">About Us </a></li>
                    <li><a href="#">Categories</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-12">
              <div className="single-footer br-2 xs-mb">
                <div className="footer-title mb-20">
                  <h3>Links</h3>
                </div>
                <div className="footer-mid-menu">
                  <ul>
                    <li><a href="contact.html">Contact us</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="single-footer mrg-sm">
            <div className="footer-title mb-20">
              <h3>GROUP INFORMATION</h3>
            </div>
            <div className="footer-contact">
              <p className="adress">
                <span>Team 3 - Advanced Software Engineering</span>
                Master of Applied Computing<br/>
                University of Windsor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* footer-mid-end */}
  {/* footer-bottom-start */}
  <div className="footer-bottom">
    <div className="container">
      <div className="row bt-2">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="copy-right-area text-center">
            <p> © 2021 <strong>Team 3 </strong> </p>
          </div>
        </div>
        </div>
    </div>
  </div>
  {/* footer-bottom-end */}
</footer>
   
    );
}
export default Footer;