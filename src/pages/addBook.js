import React from 'react';
import { Link } from "react-router-dom";

function AddBook(){
    return(
        <div className="add-book container mt-50 mb-50">
                <h3>Add Book</h3>
                {/* Single Tab Content Start */}
                <div className="myaccount-content">
                    <h5>Book Details</h5>
                    <div className="account-details-form">
                    <form action="#">
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="single-input-item">
                            <label htmlFor="book-name" className="required">Book Name</label>
                            <input type="text" id="book-name" placeholder="Book Name" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-input-item">
                            <label htmlFor="author-name" className="required">Author Name</label>
                            <input type="text" id="author-name" placeholder="Author Name" />
                            </div>
                        </div>
                        </div>
                        <fieldset>
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="single-input-item">
                            <label htmlFor="pub-name" className="required">Publication Name</label>
                            <input type="text" id="pub-name" placeholder="Book Name" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-input-item">
                            <label htmlFor="pub-date" className="required">Publication Date</label>
                            <input type="date" id="pub-date" placeholder="Publication Date" />
                            </div>
                        </div>
                        </div> 

                        <div className="row">
                        <div className="col-lg-6">
                            <div className="single-input-item">
                            <label htmlFor="isbn" className="required">ISBN Number</label>
                            <input type="text" id="isbn" placeholder="ISBN Number" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-input-item">
                            <label htmlFor="category" className="required">Category</label>
                            <input type="text" id="category" placeholder="Eg: Art, Education, Romance, etc" />
                            </div>
                        </div>
                        </div> 

                        <div className="row">
                        <div className="col-lg-6">
                            <div className="single-input-item">
                            <button className="btn" style={{background:"grey" ,color:"white"}}>Select Cover Image</button>
                            </div>
                        </div>
                        
                        </div>                
                        </fieldset>
                        <div className="single-input-item">
                        <button className="btn btn-sqr">Add Book</button>
                        </div>
                    </form>
                    </div>
                </div>
                
        </div>
    );
}
export default AddBook;

