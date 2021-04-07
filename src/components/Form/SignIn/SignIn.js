import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Form from '../form';
import '../form.css'

class SignIn extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
          token: ''
        }
    
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.emailInputChangeHandler = this.emailInputChangeHandler.bind(this);
        this.passwordInputChangeHandler = this.passwordInputChangeHandler.bind(this);
      }
    
        onSubmitHandler() {
            if (!(this.state.email === '' || this.state.password === '')
            && (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
            axios.post('/api/signIn', {
                email: this.state.email,
                password: this.state.password
            }).then(res => {
                this.setState({
                    token: res.data.token
                });
                console.log(res);
                const data = {
                    token: this.state.token,
                    time: new Date().getTime()
                }
                localStorage.setItem('userTokenTime', JSON.stringify(data));
                this.setState({
                    redirect: true
                });
                alert('login successful');
            }).catch(err => {
                console.log(err);
                alert('wrong email or password');
            });
            } else {
                alert('Please enter valid details');
            }
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
    render(){
        return(
            <div className="log-in">
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
                                        <li className="active">
                                            <Link to="/SignIn">Login</Link>
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
            <Form onSubmit={this.onSubmitHandler.bind(this)}>
                <h3 className="text-center text-info">Login</h3>
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
                <button onClick={this.onSubmitHandler} className="btn btn-info btn-md" type="button">Submit</button>
                <Link to="/signUp" className="text-info">Sign Up here</Link>
                </div>
            </Form>
           

        </div>








            
        );
    }
}

export default SignIn;