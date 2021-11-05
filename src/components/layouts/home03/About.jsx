import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Icon, NumberCount } from '../home02/about/index';

class About extends Component {
    render() {
        return (
            <div className="tf-modal-content">
                <section className="about-me t2 s3 shape-am position-relative" id="about">
                    <Icon />                  
                    <div className="container">
                        <div className="row position-relative">
                            <div className="col-lg-7 animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                <div className="flat-title t2">
                                <h4 className="sub-title mg-b22">About Me</h4>
                                <h2 className="title-section color-d12 mg-b41">Hi, I am here to help with your next project!</h2>
                                <div className="description">
                                    <p className="lt-sp01">
                                    Hi, my name is Moez. I am a Web Developer and a JavaScript and Reactjs enthusiast. I have 3 years of strong experience as a Full-Stack web developer with a solid understanding of front-end technologies, MVC frameworks, Restful web services, and Data Base designing. Check my portfolio.
                                    </p>
                                    <p className="lt-sp01">
                                    My primary focus is on building Front End Web Applications. I love building dynamic, responsive, interactive, and completely SEO-friendly web applications. Check my portfolio.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="fact">
                                <NumberCount />
                                <div className="btn-contact bg-s1 text-center">
                                    <h4 className="title color-d12">Get a project? Let’s talk.</h4>
                                    <Link to="#" className="email color-s1 color-d14">moezzain94@gmail.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>    
        );
    }
}

export default About;
