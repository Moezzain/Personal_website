import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class TopEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contenttop : [
                {
                    id: 1,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.3s',
                    year: 'SUST 2012-2017',
                    title: 'Sudan University of science and technology',
                    text: ''
                },
                // {
                //     id: 2,
                //     classname: 'experience-box experience-box-line t3',
                //     datawow: '0.5s',
                //     year: 'Udemy',
                //     title: 'User Centered Design',
                //     text: 'User experience (UX) design is the process design teams use to create products.'
                // },
                // {
                //     id: 3,
                //     classname: 'experience-box t3',
                //     datawow: '0.7s',
                //     year: 'Skil Share',
                //     title: 'Interaction Design',
                //     text: 'User experience (UX) design is the process design teams use to create products.'
                // }
            ],
            contentbot : [
                {
                    id: 1,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.8s',
                    year: '2018 - 2020',
                    title: 'Software Developer at',
                    office: 'AZ Technology',
                    text: 'Developing apps specialized in banking services using languages like C, C++, Java.'
                },
                {
                    id: 2,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '1s',
                    year: '12/2018 – 12/2020',
                    title: 'React Developer at',
                    office: 'XZone',
                    text: 'Part-time employee working for XZone which is a company focused on implementing E-Commerce applications for vendors'
                },
                {
                    id: 3,
                    classname: 'experience-box t3',
                    datawow: '1.2s',
                    year: '12/2020 – 03/202',
                    title: 'Full-stack Developer at',
                    office: 'Orderpharma',
                    text: 'As a full-time developer implementing Orderpharma dashboard and backend using MERN stack.'
                },{
                    id: 4,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.8s',
                    year: '2018 - 2020',
                    title: 'Full stack Developer at',
                    office: 'Utopia Tech PTY LTD',
                    text: 'Part-time employee working in an Agile environment using technolgies such as Next.js, Node, AWS lambda, etc..'
                },
                {
                    id: 5,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '1s',
                    year: '12/2018 – 12/2020',
                    title: 'Part time React Developer at',
                    office: 'Friyay Company',
                    text: 'Part-time employee using technolgies such as React js, graphQl relay, Redux, froala editor, etc..'
                },
                {
                    id: 6,
                    classname: 'experience-box t3',
                    datawow: '1.2s',
                    year: '12/2020 – 03/202',
                    title: 'Full-stack Developer at',
                    office: 'My Ticket Company',
                    text: 'Full-time employee using technologies such as React js, Node js, MongoDB, etc..'
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="animate-element delay5 fadeInUp">
                <div className="padding-bottom">
                    <div className="row">
                        {
                            this.state.contenttop.map(data => (
                                <div className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn" data-wow-delay={data.datawow} key={data.id}>
                                    <div className={data.classname}>
                                        <div className="box-inner">
                                        <h3 className="education-edit bg-s1 color-d6">{data.year}</h3>
                                        <div className="exp-wrap">
                                            <div className="s-info mg-b11">{data.title}</div>
                                            <p>
                                            {data.text}
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.contentbot.map(data => (
                            <div className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn" data-wow-delay={data.datawow} key={data.id}>
                                <div className={data.classname}>
                                    <div className="box-inner">
                                    <h3 className="f-info bg-s1 color-d6">{data.year}</h3>
                                    <div className="exp-wrap">
                                        <div className="s-info mg-b11">{data.title} <Link to="#">{data.office}</Link></div>
                                        <p>
                                            {data.text} 
                                        </p>        
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default TopEducation;
