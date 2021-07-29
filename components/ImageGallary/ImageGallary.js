import React, {useState} from 'react'
import ImageGallaryElement from './ImageGallaryElement'
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
                        <h2>Our School Events</h2>
                        <span></span>
                    </div>
                    <ImageGallaryElement image={photo1} name={'Foundation Day'} moreimages={'festival'}></ImageGallaryElement>
                    <ImageGallaryElement image={photo2} name={'Sports Day'} moreimages={'festival'}></ImageGallaryElement>
                    <ImageGallaryElement image={photo3} name={'Annual Day'} moreimages={'festival'}></ImageGallaryElement>
                    <ImageGallaryElement image={photo4} name={'Holi'} moreimages={'festival'}></ImageGallaryElement>
                    <ImageGallaryElement image={photo5} name={'Sankranthi'} moreimages={'festival'}></ImageGallaryElement>
                    <ImageGallaryElement image={photo6} name={'Environmental Day'} moreimages={'festival'}></ImageGallaryElement>
                </div>
            </div>
        </section>
    )
}

export default ImageGallary