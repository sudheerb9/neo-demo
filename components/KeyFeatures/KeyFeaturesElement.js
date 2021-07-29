import React, {useState} from 'react'

function KeyFeaturesElement(props) {
    return(
        <div className={"col-md-3 key-div"}>
                       <div className={"key-cover"}>
                           <i className={"far fa-file-word"}></i>
                           <h4>{props.heading}</h4>
                           <p>{props.para}</p>
                       </div>
                   </div>
    )
}

export default KeyFeaturesElement