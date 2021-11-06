import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CaseStudy extends Component {
    render() {
        return (
            <div className="tf-modal-content">
                <section className="flat-case-study s3" id="portfolio">
                    <div className="container">
                        <div className="d-md-flex">
                            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                <div className="image-link t1">
                                    <div className="featured-post">
                                        <a href="https://orderpharma.net/dashboard/pages_login_2"><img src="images/section/ORDERFARMA.png" alt="images" /></a>
                                    </div>
                                    <div className="portfolio-template-link text-center">
                                        <Link to="#">Orderpharma Dashboard</Link>
                                    </div>
                                    <p>
                                        Dashboard for clients/administrations fulfilling the Orderpharma company services and implementing next technical features:<br/>
                                        - Data visualizing and altering (Graphs, Tables, Basic CRUD processes).<br/>
                                        - Session Management.<br/>
                                        - Maps services to monitor orders' locations and statuses.<br/>
                                        - Real-time Notifications and updates.<br/>
                                        - Live chat.<br/>
                                        - UI smooth implementation using Bootstrap.<br/>
                                    </p>
                                </div>
                                <div className="image-link t1">
                                    <div className="featured-post">
                                        <a href="https://jobit.world/home"><img src="images/section/JOBIT.png" alt="images" /></a>
                                    </div>
                                    <div className="portfolio-template-link text-center">
                                        <Link to="#">Jobit </Link>
                                    </div>
                                    <p>
                                        Was responsible for Applying improvements to the Jobit application and fixing features like:<br/>
                                        - UI improvements.<br/>
                                        - Request optimization and adding caching to the server side.<br/>
                                        - adding settings component to the application.<br/>
                                        - Chat filter improvements.<br/>
                                        - Applicants filter improvements.<br/>
                                        - login bug issue.<br/>
                                        - Loading chat conversation after moving from another page.<br/>
                                        etc..
                                    </p>
                                </div>
                                {/* <div className="fl-btn text-center">
                                    <Link to="#" className="f-w500">Explore More</Link>
                                </div> */}
                            </div>
                            <div className="flat-spacer" data-desktop={0} data-mobile={100} data-smobile={100} />
                            <div className="col-right animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <div className="flat-title t2 mg-b60">
                                    {/* <h4 className="sub-title mg-b13">Portfolio</h4> */}
                                    <h2 className="title-section color-d12 mg-b20">Few selected works.</h2>
                                </div>
                                <div className="pd-right">
                                    <div className="image-link t1">
                                        <div className="featured-post">
                                            <a href="http://store.omersuliman.com/"><img src="images/section/JOOMA.png" alt="images" /></a>
                                        </div>
                                        <div className="portfolio-template-link text-center">
                                            <Link to="#">Dex Dashboard </Link>
                                        </div>
                                        <p>
                                            Dashboard for clients/administrations fulfilling Jooma restaurant services and implementing next technical features: <br/>
                                            - Data visualizing and altering (Graphs, Tables, Basic CRUD processes).<br/>
                                            - Session Management.<br/>
                                            - Maps services to monitor orders' locations and statuses.<br/>
                                            - UI smooth implementation using Material Design.<br/>
                                        </p>
                                    </div>
                                    <div className="image-link t1">
                                        <div className="featured-post">
                                            <a href="167.99.141.30:8080/"><img src="images/section/CMS_DATAPROCESSING.png" alt="images" /></a>
                                        </div>
                                        <div className="portfolio-template-link text-center">
                                            <Link to="#">Employers evaluation </Link>
                                        </div>
                                        <p>
                                            A full-stack CMS app used by company to assess employees personal development using complex equations getting parameters from long to excel sheets. providing next technical features:<br/>
                                            - Data visualizing and processing.<br/>
                                            - UI smooth implementation using Material Design.<br/>
                                            - Mail sending generating specific URLs and sending them to employees.<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default CaseStudy;
