import React, {useState} from 'react'
import TestimoniesCard from './TestmoniesCard.js'
import photo1 from '../../public/images/blog/img-01.jpg'
import photo2 from '../../public/images/blog/img-02.jpg'
import photo3 from '../../public/images/blog/img-03.jpg'

function TestimonialComp() {
    return(
    <section className={"bg-04"}>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"heading"}>
                    <h2>What People think</h2>
                    <span></span>
                </div>
                <TestimoniesCard image={photo1} heading={'Parent Says'} para={'The Schooling is the main platform for any student which helps in transforming the leaders of the future. This school do exatly that in transforming students life'} name={'-P.Pratuman'}></TestimoniesCard>
                <TestimoniesCard image={photo2} heading={'Parent Says'} para={'The Schooling is the main platform for any student which helps in transforming the leaders of the future. This school do exatly that in transforming students life'} name={'-V. Sairam'}></TestimoniesCard>
                <TestimoniesCard image={photo3} heading={'Student Says'} para={'The Schooling is the main platform for any student which helps in transforming the leaders of the future. This school do exatly that in transforming students life'} name={'-R.V.Raja Kumar'}></TestimoniesCard>
            </div>
        </div>
    </section>
    )
}

export default TestimonialComp