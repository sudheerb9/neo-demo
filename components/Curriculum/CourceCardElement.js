import React, {useState} from 'react'
import Image from 'next/image'

function CourceCardElement(props) {
    return(
        <div className={"col-md-4 col-sm-6 cord-div"}>
                     <div className={"cours-card"}>
                         <Image src={props.image} alt="Middle" />
                         <div className={"cours-name"}>
                             <h2>{props.name}</h2>
                         </div>
                         <div className={"course-detail"}>
                             <h5>{props.heading}</h5>
                             <p>{props.para}</p>
                             <a className={"btn btn-sm btn-success"} href={props.curculum}>curculum</a>
                         </div>
                     </div>
                 </div>
    )
}

export default CourceCardElement