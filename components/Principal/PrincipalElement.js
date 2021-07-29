import React from 'react'
import {Row,Col,Container} from 'reactstrap'
import Image from 'next/image'
import profilePic from '../../public/images/team/1.jpg'


function Principal (){
    return(
        <div className={'princ-comp'}>
            <div className={"heading"}>
                <h2>Our Principal</h2>
                <span></span>
            </div>
            <Row className={'centered'} >
                <Row className={'pric-card'}>
                    <Col sm={12} md={6} lg={6} xs={12} className={'justify-content-center'}>
                        <Image src={profilePic} alt="Principal image" />
                    </Col>
                    <Col sm={12} md={6} lg={6} xs={12}>
                        <h4>Mfghjj.Rykknjnhh</h4>
                        <h6>fghj,ghhjjj</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </Col>
                </Row>
            </Row>


            {/* <Container className={'justify-content-center'}>
                <Row className={'cen pric'}><h2><b>Meet Our Principal</b></h2></Row>
                <Row className={'justify-content-center'}>
                    <Col sm={12} md={6} lg={6} xs={12} className={'justify-content-center'}>
                        <Image src={profilePic} alt="Principal image" />
                    </Col>
                    <Col sm={12} md={6} lg={6} xs={12}>
                      <h4>Mfghjj.Rykknjnhh</h4>
                      <h6>fghj,ghhjjj</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </Col>
                </Row>

            </Container> */}
        </div>
    )
}

export default Principal;