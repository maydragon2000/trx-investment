import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const SignUp = () => {
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Signup</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Signup</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tf-login tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tf-title-heading ct style-1">
                                Sigup To Axies
                            </h2>

                            <div className="flat-form box-login-email">
                                <div className="box-title-login">
                                    <h5>login with email</h5>
                                </div>
                                <div className="form-inner">
                                    <form action="#" id="contactform">
                                        <input id="name" name="name" tabIndex="1" aria-required="true" required type="text" placeholder="Your Full Name" />
                                        <input id="email" name="email" tabIndex="2" aria-required="true" type="email" placeholder="Your Email Address" required />
                                        <input id="phonenumber" name="phonenumber" tabIndex="2" aria-required="true" type="text" placeholder="Your Phone Number" required />
                                        <input id="Gender" name="Gender" tabIndex="2" aria-required="true" type="text" placeholder="Male or Female" required />
                                        <input id="pass" name="pass" tabIndex="3" aria-required="true" type="text" placeholder="Set Your Password" required />
                                        <div className="row-form style-1">
                                            <label>Remember me
                                                <input type="checkbox" />
                                                <span className="btn-checkbox"></span>
                                            </label>
                                            <Link to="#" className="forgot-pass">Forgot Password ?</Link>
                                        </div>
                                        <button className="submit">Sign Up</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default SignUp;
