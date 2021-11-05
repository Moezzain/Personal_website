import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as YourSvg } from '../../icons/1929180_upwork_icon.svg';

class Specilizing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [
                {
                    id: 1,
                    classimg: 'featured-post mg-b43',
                    srcimg: './images/section/20.png',
                    altimg: 'images',
                    title: 'Front End Developer',
                    text01: "I'm a React Developer",
                    text02: "3 years of experience."
                },
                {
                    id: 2,
                    classimg: 'featured-post mg-b40',
                    srcimg: './images/section/22.png',
                    altimg: 'images',
                    title: 'Backend Wed Developer',
                    text01: "I'm a Backend Node js",
                    text02: "2 years of experience."
                },
                {
                    id: 3,
                    classimg: 'featured-post mg-b42',
                    srcimg: './images/section/21.png',
                    altimg: 'images',
                    title: 'Mobile View Responsiveness',
                    text01: "Mobile Screens",
                    text02: "3 years of experience."
                }
            ]
        }
    }

    render() {
        return (
            <div className="tf-modal-content">
                <section className="experienced s3 banner-section" id="services">
                    <div className="container">
                        <div className="background-inner bg-s1">
                            <div className="flat-title animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                <h2 className="title-section color-d19 mg-b44 text-center">SPECILIZING IN</h2>
                            </div>
                            <div className="row animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                {
                                    this.state.card.map(data => (
                                        <div className="col-lg-4" key={data.id}>
                                            <div className="iconbox-s2">
                                                <div className={data.classimg}><img src={data.srcimg} alt={data.altimg} /></div>
                                                <h3 className="title mg-b21"><Link to="#">{data.title}</Link></h3>
                                                <p>
                                                    {data.text01} <br />{data.text02}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section className="get-project s3 position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="image-gradient featured-post animate-element wow delay5 fadeZooming" data-wow-delay="0.5s">
                                    <img style={{borderRadius: '20px'}} src="images/section/WhatsApp Image 2021-06-03 at 10.00.43 AM.jpeg" alt="images" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="content-inner animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                    <h2 className="title mg-b14 text-white">Say Hello!</h2>
                                    <div className="site-list has-border">
                                        <a href="https://www.linkedin.com/in/moez-babiker-675076167/" className="bg-s2"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                                        <a href="https://www.upwork.com/freelancers/~010611c151ccc2897f" style={{ backgroundColor: '#6FDA44' }}><YourSvg /></a>
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

export default Specilizing;
