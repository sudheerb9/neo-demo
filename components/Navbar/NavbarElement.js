import React, {useState} from 'react'
import Image from 'next/image'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import logo from '../../public/images/Logo4.png';
import { Link } from '@material-ui/core';


function Navbar(){
    const [NavbarToggler,setNavbarToggler] = useState({
        navbarshowmobile:false,
        buttonclass:'navbar-toggler collapsed',
        itemsclass:'collapse navbar-collapse'
    })

    const [NavbarTogglerDropdown1,setNavbarTogglerDropdown1] = useState({
        Dropdown:true,
        dropdownclass:'nav-link dropdown-toggle',
        dropdownitemsclass:'dropdown-menu'
    })

    const [NavbarTogglerDropdown2,setNavbarTogglerDropdown2] = useState({
        Dropdown:true,
        dropdownclass:'nav-link dropdown-toggle',
        dropdownitemsclass:'dropdown-menu'
    })

    function onClick2DropdownHandler(){
        if(NavbarTogglerDropdown2.Dropdown===false)
        {
            setNavbarTogglerDropdown2({
                Dropdown:true,
                dropdownclass:'nav-link dropdown-toggle',
                dropdownitemsclass:'dropdown-menu'
            })

        }
        else
        {
            setNavbarTogglerDropdown2({
                Dropdown:false,
                dropdownclass:'nav-link dropdown-toggle show',
                dropdownitemsclass:'dropdown-menu show'
            })

            setNavbarTogglerDropdown1({
                Dropdown:true,
                dropdownclass:'nav-link dropdown-toggle',
                dropdownitemsclass:'dropdown-menu'
            })
        }
    }

    function onClickDropdownHandler(){
        if(NavbarTogglerDropdown1.Dropdown===false)
        {
            setNavbarTogglerDropdown1({
                Dropdown:true,
                dropdownclass:'nav-link dropdown-toggle',
                dropdownitemsclass:'dropdown-menu'
            })

        }
        else
        {
            setNavbarTogglerDropdown1({
                Dropdown:false,
                dropdownclass:'nav-link dropdown-toggle show',
                dropdownitemsclass:'dropdown-menu show'
            })


            setNavbarTogglerDropdown2({
                Dropdown:true,
                dropdownclass:'nav-link dropdown-toggle',
                dropdownitemsclass:'dropdown-menu'
            })

        }
    }
    function NavbarbuttonToggler(){
        if(NavbarToggler.navbarshowmobile===false)
        {
            setNavbarToggler({
                navbarshowmobile:true,
                buttonclass:'navbar-toggler',
                itemsclass:'collapse navbar-collapse show'
            })

        }
        else
        {
            setNavbarToggler({
                navbarshowmobile:false,
                buttonclass:'navbar-toggler collapsed',
                itemsclass:'collapse navbar-collapse'
            })

            setNavbarTogglerDropdown1({
                Dropdown:true,
                dropdownclass:'nav-link dropdown-toggle',
                dropdownitemsclass:'dropdown-menu'
            })

            setNavbarTogglerDropdown2({
                Dropdown:true,
                dropdownclass:'nav-link dropdown-toggle',
                dropdownitemsclass:'dropdown-menu'
            })
        }
    }


    return (
        <div className={'navbar-height'}>
            <header className={'continer-fluid'}>
                <div className={'header-top'}  style={{'display': 'flex', 'flex' : 1 }}>
                    <div className={'container'} style={{'paddingTop': '0px', 'paddingBottom' : '0px'}}>
                        <div className={'row col-det'}>
                            <div className={'col-lg-6 d-none d-lg-block'}>
                                <ul className={'ulleft'}>
                                    <li className={'row'}>
                                        <i className={'far fa-envelope'}><MailOutlineIcon className={'new_icons'}/></i>
                                        info@neomentors.in
                                        <span>|</span> &nbsp; &nbsp;</li>
                                    <li className={'row'}>
                                        <i className={'fas fa-phone-volume'}><PhoneIcon className={'new_icons'} /></i>
                                        +91 9704558792
                                    </li>
                                </ul>
                            </div>
                            <div className={'col-lg-6 col-md-12'}>
                                <ul className={'ulright no-margin'}>
                                    <li>
                                        <i className={'fab fa-facebook-square-light'}><a href={'/'} className={'new_icons'}><FacebookIcon/></a></i>
                                    </li>
                                    <li>
                                        <i className={'fab fa-twitter-square'}><a href={'/'} className={'new_icons'}><TwitterIcon/></a></i>
                                    </li>
                                    <li>
                                        <i className={'fab fa-instagram'}><a href={'/'} className={'new_icons'}><InstagramIcon/></a></i>
                                    </li>
                                    <li>
                                        <i className={'fab fa-linkedin'}><a href={'/'} className={'new_icons'}><LinkedInIcon/></a></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="menu-jk" className={'header-bottom'} style={{'display': 'flex', 'flex': 1 }} >
                    <div className={'container'}>
                        <div className={'row nav-row'}>
                            <div className={'col-lg-3 col-md-3 col-10 logo'}>
                                <a href={'/'}>
                                    <Image src={logo} alt="Logo" width={181} height={55} layout="responsive" />
                                </a>

                            </div>
                            <div className={'col-lg-9 col-md-9  col-2 nav-col'} style={{'margin': 'auto'}}>
                                <nav className={'navbar navbar-expand-lg navbar-light'} style={{'height': '100%'}}>

                                    <button
                                        onClick={NavbarbuttonToggler}
                                        className={NavbarToggler.buttonclass}
                                        type={'button'}
                                        data-toggle={'collapse'}
                                        data-target={'#navbarNav'}
                                        aria-controls={'navbarNav'}
                                        aria-expanded={NavbarToggler.navbarshowmobile}
                                        aria-label={'Toggle navigation'}
                                        style={{'padding': '5px', 'margin-top': '37px'}}>
                                        <span className={'navbar-toggler-icon'}></span>
                                    </button>
                                    <div className={NavbarToggler.itemsclass} id="navbarNav">
                                        <ul className={'navbar-nav'}>
                                            <li className={'nav-item active'}>
                                                <Link className={'nav-link'} href="/">Home
                                                </Link>
                                            </li>
                                            {/* <li className={'nav-item'}>
                                                <a className={'nav-link'} href="about">About us</a>
                                            </li> */}

                                            <li className={"nav-item dropdown"}>
                                                <div className={NavbarTogglerDropdown1.dropdownclass} onClick={onClickDropdownHandler}
                                                   id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                                                   aria-expanded="false">
                                                    About Us
                                                </div>
                                                <ul className={NavbarTogglerDropdown1.dropdownitemsclass} aria-labelledby="navbarDropdownMenuLink" onClick={onClickDropdownHandler}>
                                                    <li><a className={"dropdown-item"} href="about">Overview</a></li>
                                                    <li><a className={"dropdown-item"} href="faculty">Faculty</a></li>
                                                    <li><a className={"dropdown-item"} href="schoolInfrastructure">School</a></li>
                                                    {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                                </ul>
                                            </li>

                                            <li className="nav-item dropdown">
                                                <a className={NavbarTogglerDropdown2.dropdownclass} href="#" onClick={onClick2DropdownHandler}
                                                   id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                                                   aria-expanded="false">
                                                    Acadamics
                                                </a>
                                                <ul className={NavbarTogglerDropdown2.dropdownitemsclass} aria-labelledby="navbarDropdownMenuLink" onClick={onClick2DropdownHandler}>
                                                    <li><a className={"dropdown-item"} href="curriculum">Curriculum</a></li>
                                                    <li><a className={"dropdown-item"} href="#">Admission Form</a></li>
                                                    <li><a className={"dropdown-item"} href="strengthperticulers">Strength Perticulars</a></li> 
                                                </ul>
                                            </li>
                                            <li className={'nav-item'}>
                                                <a className={'nav-link'} href="careers">Careers</a>
                                            </li>
                                            <li className={'nav-item'}>
                                                <a className={'nav-link'} href="gallery">Gallery</a>
                                            </li>
                                            <li className={'nav-item'}>
                                                <a className={'nav-link'} href="contact-us">Contact us</a>
                                            </li>

                                        </ul>


                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;
