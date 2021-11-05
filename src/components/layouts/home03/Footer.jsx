import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as YourSvg } from '../../icons/1929180_upwork_icon.svg';

class Footer extends Component {
    render() {
        return (
            <div className="tf-modal-content justify-content-end">
                <footer id="footer" className="footer footer-s2">
                    <div className="container">
                        <div id="footer-widget" className="footer-widget-s3 border-bottom-s1 position-relative">
                            <h3 className="widget-title larger color-d10 lt-sp06 text-center">Let’s try me!</h3>
                            <div className="site-list site-list-center text-center">
                                {/* <Link to="#" className="bg-s1"><i className="fa fa-twitter" aria-hidden="true" /></Link> */}
                                <a href="https://www.linkedin.com/in/moez-babiker-675076167/" className="bg-s2"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                                <a href="https://www.upwork.com/freelancers/~010611c151ccc2897f" style={{ backgroundColor: '#6FDA44' }}><YourSvg /></a>
                            </div>
                        </div>
                    </div>
                    <div id="bottom" className="bottom-s3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="copyright lt-sp02">
                                        © Moez Babiker, 2021 All rights reserved.
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="widget-nav-menu color-s2">
                                        <li><Link to="#">Home</Link></li>
                                        <li><Link to="#">Portfolio</Link></li>
                                        <li><Link to="#">About</Link></li>
                                        <li><Link to="#">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2">
                                    <div className="socials-list color-s2">
                                        <a href="https://www.facebook.com/moez.bzain"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                        <a href="https://www.instagram.com/moezzain"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                        <a href="https://twitter.com/mozezain?t=5Yiq2rE1jIORprwiVx2s-w&s=09"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
