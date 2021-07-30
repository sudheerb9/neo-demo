import React from 'react'
import {Row,Col,Container} from 'reactstrap'
import Image from 'next/image'
import profilePic from '../../public/images/team/1.jpg'


function Principal (){
    return(
        <div className={'testimonial-container'}>
            <div className={'user'}>
                <img
                    src={'https://randomuser.me/api/portraits/women/46.jpg'}
                    alt="user"
                    className="user-img"
                />
                <div className={'user-details'}>
                    <h4 className={'username'}>Miyah Myles</h4>
                    <p className={'role'}>Marketing</p>
                </div>
            </div>
            <p className={'testimonia'}>
                I've worked with literally hundreds of HTML/CSS developers & I have to
                say the top spot goes to this guy. This guy is an amazing developer. He
                stresses on good, clean code & pays attention to the details. I love
                developers who respect each other & every aspect of a thoroughly thought
                out design & do their best to put it in code. He goes above & beyond,
                transforming ART into PIXELS - without a glitch, everytime.
            </p>
        </div>
    )
}

export default Principal;