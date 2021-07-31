import React, {useState} from 'react'
import Image from 'next/image'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {SiGmail} from 'react-icons/si'
import {FaPhoneAlt} from 'react-icons/fa'
import {ImLocation} from 'react-icons/im'
import logo from '../../public/images/logoneo.jpg';

function Fotter() {
    return(
        <footer>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-12"}>
                        <div className={"_kl_ds_we"}>
                            <div className={"head-footer"}>
                                {/* <p>As the leading student-first connected learning platform, NEOMENTORS makes higher education
                                more affordable and more accessible, all while improving student outcomes. neomentors is a publicly-
                                held company based in HYDERABAD India, NEOMENTORS Student Hub Services Include: Online
                                coaching for UPSC, IIT-JEE, NEET, Other STATE PSC’S and Other exams.., Mentorship programme
                                ,Test Preparation, Careers Search, Internship Admissions and College Admissions.
                                “Quality and affordability” is our DNA. It drives everything we do. From the way we build our network to
                                the way we connect students to opportunity. We give every student the ability to realize their full potential</p> */}
                                 {/* <Image src={logo} alt="Logo" width={200} height={40} layout="responsive" />  */}
                                <ol>
                                    <li>
                                        <i className={'fab fa-facebook-square'}> <a href={'/'} className={'new_icons'}><FacebookIcon /></a> </i>
                                    </li>
                                    <li>
                                        <i className={'fab fa-twitter-square'}> <a href={'/'} className={'new_icons'} ><TwitterIcon/></a> </i>
                                    </li>
                                    <li>
                                        <i className={'fab fa-instagram'}> <a href={'/'} className={'new_icons'}><InstagramIcon/></a> </i>
                                    </li>
                                    <li>
                                        <i className={'fab fa-linkedin'}> <a href={'/'} className={'new_icons'}><LinkedInIcon/></a> </i>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                     {/* <div className={"col-lg-3 col-md-3 col-sm-4 col-xs-6"}> 
                       <div className={"_kl_ds_we"}>
                          <div className={"head-footer"}>
                               <h3>Services</h3>
                               <ul>
                                   <li><i className={"fas fa-chevron-right"}></i>Development</li>
                                    <li><i className={"fas fa-chevron-right"}></i>Busniess</li>
                                    <li><i className={"fas fa-chevron-right"}></i>Accounting</li>
                                   <li><i className={"fas fa-chevron-right"}></i>Arts & Design</li>
                                    <li><i className={"fas fa-chevron-right"}></i>Marketing</li>
                                </ul>
                            </div>
                        </div>
                     </div>  */}

                    <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-6"}>
                        <div className={"_kl_ds_we"}>
                            <div className={"head-footer"}>
                                <h3>Quick links</h3>
                                <ul>
                                    <li><a href={'/'} style={{textDecoration:'none',color:'white'}}>Home</a></li>
                                    <li><a href={'about'} style={{textDecoration:'none',color:'white'}}>About Us</a></li>
                                    <li><a href={'faculty'} style={{textDecoration:'none',color:'white'}}>Faculty</a></li>
                                    <li><a href={'curriculum'} style={{textDecoration:'none',color:'white'}}>Curriculum</a></li>
                                    {/* <li><a href={'schoolInfrastructure'} style={{textDecoration:'none',color:'white'}}>School Infrastructure</a></li>
                                    <li><a href={'strengthperticulers'} style={{textDecoration:'none',color:'white'}}>Strength Perticulers</a></li>
                                    <li><a href={'gallery'} style={{textDecoration:'none',color:'white'}}>Gallery</a></li>
                    <li><a href={'contact-us'} style={{textDecoration:'none',color:'white'}}>Contact Us</a></li> */}
                                </ul> 
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-6"}>
                        <div className={"_kl_ds_we"}>
                            <div className={"head-footer"}>
                                <h3>find us</h3>
                                <ul className={"un-hover"}>
                                    <li><i className={"far fa-location"}><ImLocation/></i>Hyderabad</li>
                                    <li><i className={"fas fa-mobile-alt"}><FaPhoneAlt/></i>+91 9704558792</li>
                                    <li><i className={"far fa-envelope"}><SiGmail/></i>info@neomentors.in</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={"col-12"}>
                        <div className={"row _pl_we_sq"}>
                            <div className={"col-12"}>
                                <div className={"last-01"}>
                                    <p>2021 @ All Rights Reserved Designed and developed by <a href="#">Neomentors</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Fotter
