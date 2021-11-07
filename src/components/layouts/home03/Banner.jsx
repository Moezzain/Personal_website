import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import UpworkIcon from '../icons/';
import { ReactComponent as YourSvg } from '../../icons/1929180_upwork_icon.svg';

class Banner extends Component {
    render() {
        return (
            <section className="banner-section s3 two-home" id="home">
                <div className="container">
                    <div className="content-text position-relative">
                        <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.3s">
                            <div className="tag color-d1 lt-sp53 mg-b24">Web Developer</div>
                            <h1 className="cd-headline clip is-full-width title color-d2 mg-b31">
                                <span>Hello, </span>
                                <span className="cd-words-wrapper color-d6">
                                <b  className="is-visible">I’m Moez!</b>
                                {/* <b>I’m Olivia!</b> */}
                                {/* <b>I’m Amelia!</b> */}
                                </span>
                            </h1>
                            <p className="lt-sp02 mg-b51">
                                Hi, i m Moez, professional Software Engineer with 2 years <br />of experience as a web developer. Need any help?
                            </p>
                        </div>
                        <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                            <div className="fl-btn btn-general btn-hv-common color-s1">
                                <a href="https://drive.google.com/uc?export=download&id=1wVMX_JKjc7QzXtdKlInzqd8IUAIh8l_E" download className="btn-inner f-w500 color-d6 border-corner5 lt-sp01">Download Resume</a>
                            </div>
                        </div>
                    </div>
                    <div className="featured-post border-corner-bl">
                        <img src="images/section/test.jpg" alt="images" />
                        <div className="site-list has-border text-center animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                            <a href="https://www.linkedin.com/in/moez-babiker-675076167/" className="bg-s2"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                            <a href="https://www.upwork.com/freelancers/~010611c151ccc2897f" style={{backgroundColor: '#6FDA44'}}><YourSvg /></a>
                        </div>
                    </div>
                    </div>
                    <div className="iconbox-s4 t2 color-s2 border-corner5 animate-element wow delay5 fadeZooming" data-wow-delay="0.3s">
                        <div className="avatar position-relative">
                            <img src="images/footer/01.jpg" alt="images" />
                        </div>
                        <div className="content-inner">
                            <h4 className="name lt-sp04 mg-b16 text-white position-relative">Available for Project</h4>
                            <div className="fl-btn btn-general">
                                <Link to="#" className="text-white border-corner2">Hire Me</Link>
                            </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
