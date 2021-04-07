import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import Form from '../form';
import '../form.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
      
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.firstNameInputChangeHandler = this.firstNameInputChangeHandler.bind(this);
    this.lastNameInputChangeHandler = this.lastNameInputChangeHandler.bind(this);
    this.emailInputChangeHandler = this.emailInputChangeHandler.bind(this);
    this.passwordInputChangeHandler = this.passwordInputChangeHandler.bind(this);
  }

  onSubmitHandler (e) {
    e.preventDefault();
    if (!(this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.password === '')
      && (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
      axios.post('/api/signUp', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }).then(res => {
        alert('register successfully! please go to login page');
        console.log(res);
      }).catch(err => {
        alert('Please enter valid information!');
        console.log(err);
      });
    } else {
      alert('Please enter valid details');
    }
  }

  firstNameInputChangeHandler(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  lastNameInputChangeHandler(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  emailInputChangeHandler(event) {
    this.setState({
      email: event.target.value
    });
  }

  passwordInputChangeHandler(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    /* if (this.state.redirect) return <Redirect to='/' /> */
    return (
        <div className="log-in">
             <header>
                    
                    {/*-- header-mid-area-start --*/}
                <div className="header-mid-area ptb-20">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="logo-area text-center logo-xs-mrg">
                            <Link to="index.html"><h1 className="text-center">Bibliophilic</h1></Link>
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
                                            
                                            <li>
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
                                            <Link to="/SignIn">Login</Link>
                                        </li>
                                        <li className="active">
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

            <div className="user-login-area mb-70  mt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login-title text-center mb-30">
                            </div>
                        </div>
                        <Form onSubmit={this.onSubmitHandler.bind(this)}>
                            <h3 className="text-center text-info">Register</h3>
                            <div className="form-group">
                            <label htmlFor="first-name" className="text-info">First Name:</label><br />
                            <input
                                id="first-name"
                                className="form-control"
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={this.firstNameInputChangeHandler}
                                required />
                            </div>
                            <div className="form-group">
                            <label htmlFor="last-name" className="text-info">Last Name:</label><br />
                            <input
                                id="last-name"
                                className="form-control"
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={this.lastNameInputChangeHandler}
                                required />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email" className="text-info">Email:</label><br />
                            <input
                                id="email"
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="example@domain.com"
                                onChange={this.emailInputChangeHandler}
                                required />
                            </div>
                            <div className="form-group">
                            <label htmlFor="password" className="text-info">Password:</label><br />
                            <input
                                id="password"
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="********"
                                onChange={this.passwordInputChangeHandler}
                                required />
                            </div>
                            <div className="d-flex justify-content-between align-items-end">
                            <input type="submit" name="submit" className="btn btn-info btn-md" value="Submit" />
                            <Link to="/signIn" className="text-info">Login here</Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </div>

    );
  }
}

export default SignIn;