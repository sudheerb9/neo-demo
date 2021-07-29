import React, {useState} from 'react'
import ImageGallaryElement from './SchoolInfraElement.js'
import photo1 from '../../public/images/blog/img-01.jpg'
import photo2 from '../../public/images/blog/img-02.jpg'
import photo3 from '../../public/images/blog/img-03.jpg'
import photo4 from '../../public/images/blog/img-04.jpg'
import photo5 from '../../public/images/blog/img-05.jpg'
import photo6 from '../../public/images/blog/img-06.jpg'

function SchoolInfra() {
    return(
        <section className={"bg-01"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"heading"}>
                        <h2>School Infrastructure</h2>
                        <span></span>
                    </div>
                    <ImageGallaryElement image={photo1} name={'Ground'} ></ImageGallaryElement>
                    <ImageGallaryElement image={photo2} name={'Computer Lab'} ></ImageGallaryElement>
                    <ImageGallaryElement image={photo3} name={'Chemistry Lab'} ></ImageGallaryElement>
                    <ImageGallaryElement image={photo4} name={'Physics Lab'} ></ImageGallaryElement>
                    <ImageGallaryElement image={photo5} name={'Robotics Lab'} ></ImageGallaryElement>
                    <ImageGallaryElement image={photo6} name={'Park'} ></ImageGallaryElement>
                </div>
            </div>
        </section>
    )
}

export default SchoolInfra