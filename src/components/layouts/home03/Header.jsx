import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import links from '../links';
import menus from '../menus';
import bloglinks from '../bloglinks';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header id="header" className="header header-style3 has-menu-model">
                <div className="container">
                    <div className="flex-header d-flex justify-content-between align-items-center">
                        <div id="logo" className="logo">
                            {/* <Link to="/" onClick={() => { window.location.href = "/" }} title="Logo"><img style={{width: '150px', height: '64px'}} src="images/logo/Moez-logos_transparent.png" alt="images" style={{opacity: '0.9'}} data-width={150} data-height={34} /></Link> */}
                        </div>
                        <div dir="rtl" className="btn-menu mobile-header__menu-button">
                            <div className="line line-1" />
                            <div className="line line-2" />
                            <div className="line line-3" />
                            <div className="line line-4" />
                        </div>
                        <div className="content-menu d-lg-flex">
                            <div className="nav-wrap">
                                <nav id="mainnav" className="mainnav">
                                    <ul className="menu ace-responsive-menu" data-menu-style="horizontal">
                                        <li><Link to="/" className="active">Home</Link>
                                            <ul className="sub-menu" >
                                                {/* {
                                                    links.map(data => (
                                                        <li key={data.id}>
                                                            <Link to={data.tolink} onClick={() => {window.location.href=data.tolink}} className={data.id === 3 ? "active" : ""}>
                                                                {data.namelink}
                                                            </Link>
                                                        </li>
                                                    ))
                                                } */}
                                            </ul>
                                        </li>
                                        {
                                            menus.map(menu => (
                                                <li key={menu.id}><Link to={menu.tomenu} className="click-model">{menu.namemenu}</Link></li>
                                            ))
                                        }
                                        {/* <li><Link to="#">Blog</Link>
                                            <ul className="sub-menu" >
                                                {
                                                    bloglinks.map(data => (
                                                        <li key={data.id}>
                                                            <Link to={data.toblog} onClick={() => {window.location.href=data.toblog}}>
                                                                {data.nameblog}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>                              */}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="socials-list-hd s2 hv2">
                            <a href="https://www.facebook.com/moez.bzain"><i className="fa fa-facebook" aria-hidden="true" /></a>
                            <a href="https://www.instagram.com/moezzain/"><i className="fa fa-instagram" aria-hidden="true" /></a>
                            <a href="https://twitter.com/mozezain?t=5Yiq2rE1jIORprwiVx2s-w&s=09"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
