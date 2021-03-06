import React, {useState} from 'react'
import Image from 'next/image'
import photo1 from '../../public/images/blog/img-01.jpg'
import photo2 from '../../public/images/blog/img-02.jpg'
import photo3 from '../../public/images/blog/img-03.jpg'

function Testimonial() {
    return(
        <div className={'testimonials'}>
            <div className={'testimonial-inner'}>
                <div className={"heading"}>
                    <h2>Testimonials</h2>
                    <span></span>
                </div>

                {/*<div className={'border'}></div>*/}

                <div className={'row'}>
                    <div className={'col'}>
                        <div className={'testimonial'}>
                            {/*<Image*/}
                            {/*    src={'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}*/}
                            {/*    alt=""*/}
                            {/*/>*/}
                                <div className={'name'}>John Waddrob</div>
                                {/*<div className="stars">*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*</div>*/}
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur
                                    temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur
                                    voluptates excepturi placeat iusto cupiditate.</p>
                        </div>
                    </div>

                    <div className={'col'}>
                        <div className={'testimonial'}>
                            {/*<Image*/}
                            {/*    src="https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"*/}
                            {/*    alt=""/>*/}
                                <div className={'name'}>John Waddrob</div>
                                {/*<div className="stars">*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*    <i className="far fa-star"></i>*/}
                                {/*</div>*/}
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur
                                    temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur
                                    voluptates excepturi placeat iusto cupiditate.</p>
                        </div>
                    </div>

                    <div className={'col'}>
                        <div className={'testimonial'}>
                            {/*<Image*/}
                            {/*    src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"*/}
                            {/*    alt=""/>*/}
                                <div className={'name'}>John Waddrob</div>
                                {/*<div className="stars">*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*    <i className="fas fa-star"></i>*/}
                                {/*</div>*/}
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur
                                    temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur
                                    voluptates excepturi placeat iusto cupiditate!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;