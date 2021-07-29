import React, {useState} from 'react'
import Image from 'next/image'
import { PinDropSharp } from '@material-ui/icons'

function TestmoniesCard(props) {
    return(
    <div className={"col-lg-4 col-md-4 col-sm-6 col-12"}>
                    <article className={"blog-sub"}>
                        <div className={"blog-content"}>
                            <Image src={props.image} />
                        </div>
                        <div className={"blog-content-section"}>
                            <div className={"blo-content-title"}>
                                <h4>{props.heading}</h4>
                                <p>{props.para}</p>
                            </div>
                            <div className={"blog-admin"}>
                                <ol>
                                    <li><i className={"fal fa-user-tie"}></i>{props.name}</li>
                                </ol>
                            </div>
                        </div>
                    </article>
                </div>
    )
}

export default TestmoniesCard