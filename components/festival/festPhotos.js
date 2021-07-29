import React, {useState} from 'react'
import ImageGallaryElement from './festphotocomponent.js'
import photo1 from '../../public/images/blog/img-01.jpg'
import photo2 from '../../public/images/blog/img-02.jpg'
import photo3 from '../../public/images/blog/img-03.jpg'
import photo4 from '../../public/images/blog/img-04.jpg'
import photo5 from '../../public/images/blog/img-05.jpg'
import photo6 from '../../public/images/blog/img-06.jpg'

function ImageGallary() {
    return(
        <section className={"bg-01"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"heading"}>
                        <h2>Festival</h2>
                        <span></span>
                    </div>
                    <ImageGallaryElement image={photo1} ></ImageGallaryElement>
                    <ImageGallaryElement image={photo2} ></ImageGallaryElement>
                    <ImageGallaryElement image={photo3} ></ImageGallaryElement>
                    <ImageGallaryElement image={photo4} ></ImageGallaryElement>
                    <ImageGallaryElement image={photo5} ></ImageGallaryElement>
                    <ImageGallaryElement image={photo6} ></ImageGallaryElement>
                </div>
            </div>
        </section>
    )
}

export default ImageGallary