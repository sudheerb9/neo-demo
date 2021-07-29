import React, {useState} from 'react'
import Image from 'next/image'

function ImageGallaryElement(props) {
    return(
        <div className={"col-lg-4 col-md-4 col-sm-6 col-xs-12"}>
            <div className={"category-box"}>
                <div className={"my-card"}>
                    <ul>
                        <li>
                            <Image src={props.image} />
                        </li>
                        <h4>{props.name}</h4>
                        <a className={"btn btn-sm btn-primary"} href={props.moreimages}>See more Images</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ImageGallaryElement