import React, { Component } from 'react';

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    id: 1,
                    image: 'https://media-exp1.licdn.com/dms/image/C4E03AQEf0pJUYhqE-g/profile-displayphoto-shrink_800_800/0/1605323406573?e=1641427200&v=beta&t=_fAEt41cUGOvB5lEJwluZ0XUpZkRKWmIcyGc7hvZqHg',
                    alt: 'images',
                },
                {
                    id: 2,
                    image: './images/blog/10.jpg',
                    // image: 'https://media-exp1.licdn.com/dms/image/C4E03AQEf0pJUYhqE-g/profile-displayphoto-shrink_800_800/0/1605323406573?e=1641427200&v=beta&t=_fAEt41cUGOvB5lEJwluZ0XUpZkRKWmIcyGc7hvZqHg',
                    alt: 'images',
                },
                // {
                //     id: 3,
                //     image: './images/blog/10.jpg',
                //     alt: 'images',
                // }
            ],
            testimonial: [
                {
                    id: 1,
                    text: `“Great experience working with Moez.
                    He work like professional and cooperate very well.
                    Will moving my all react project to him.
                    HIGHLY RECOMMENDED !!!”`,
                    name: 'Ankit  Kumar',
                    office: 'Upwork Client',
                    url: 'https://www.linkedin.com/in/ceoankityadav/'
                },
                {
                    id: 2,
                    text: `“Completed the job in less than an hour though the task was complex.
                    Did a very fine job. Really impressed. 
                    Will work with him again.”`,
                    name: 'Ankit  Kumar',
                    office: 'Upwork Client',
                    url: 'https://www.linkedin.com/in/ceoankityadav/'
                },
                // {
                //     id: 3,
                //     text: '“Excellent design, great communication, fast turnaround of revisions. I had a clear vision of what I wanted. Ranaroy did not just deliver it he a improved upon it substantially. Recommended!”',
                //     name: 'Davin Heily',
                //     office: 'at CEO Brisben'
                // }
            ],
            current: 1
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            if (this.state.current !== this.state.images.length - 1)
                this.setState({ current: 1 })
            else
                this.setState({ current: ++this.state.current })

        }, 5000);
    }
    render() {
        return (
            <div id="c_clients" className="tf-modalbox-wrapper">
                <div className="tf-modal-content">
                    <section className="testimonial t2 s2 bg-s1 position-relative" id="testimonial">
                        <div className="background-right bg-cl2">
                            <div className="text-testimonial color-d17">Testimonial</div>
                        </div>
                        <div className="background-transparent bg-cl4"></div>
                        <div className="container d-lg-flex">
                            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                <div className="flat-spacer" data-desktop={4} data-mobile={0} data-smobile={0} />
                                <div className="wrap-box bg-white position-relative">
                                    <div className="featured-post mg-b27"><img src={this.state.images[this.state.current - 1].image} alt="images" /></div>
                                    <div className="images-list d-flex justify-content-between">
                                        {
                                            this.state.images.map(data => (
                                                <img style={{ borderRadius: '10px' }} src={data.image} alt={data.alt} key={data.id} />
                                            ))
                                        }

                                    </div>
                                    <div className="quote"><img src="images/testimonial/09.png" alt="images" /></div>
                                </div>
                            </div>
                            <div className="col-right animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <div className="flat-spacer" data-desktop={0} data-mobile={100} data-smobile={100} />
                                <div className="flat-title t1">
                                    <h4 className="sub-title mg-b13">Testimonial</h4>
                                    <h2 className="title-section color-d12">Client Brief</h2>
                                </div>
                                <div className="slider-drop-apps custom-dot dot-s1 none-nav-default mg-dots-s3">
                                    <div className="flat-carousel-box data-effect clearfix" data-gap={0} data-column={1} data-column2={1} data-column3={1} data-column4={1} data-column5={1} data-dots="true" data-auto="false" data-nav="false" data-loop="true">
                                        <div className="owl-carousel">
                                            {
                                                this.state.testimonial.map(data => (
                                                    <div className="client-info" key={data.id}>
                                                        <p className="color-d16">
                                                            {data.text}
                                                        </p>
                                                        <div className="client-detail">
                                                            <a href={data.url} style={{ color: '#627fff' }} className="color-d6 f-w500">{data.name}</a> {data.office}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Testimonial;
