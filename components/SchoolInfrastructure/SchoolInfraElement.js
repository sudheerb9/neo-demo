import React, {useState} from 'react'
import Image from 'next/image'

function SchoolInfraElement(props) {
    return(
        <div className={"col-lg-4 col-md-4 col-sm-6 col-xs-12"}>
            <div className={"category-box"}>
                <div className={"my-card"}>
                    <ul>
                        <li>
                            <Image src={props.image} layout="fill"/>
                        </li>
                        <h4>{props.name}</h4>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SchoolInfraElement