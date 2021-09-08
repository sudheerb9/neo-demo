import REACT from 'react'
import Image from 'next/image'


function TeamElement(props){
    return(
        <div className={"col-lg-3 col-md-4 col-sm-6 col-6"}>
                    <div className={"team-main-box"}>
                        <Image src={props.image} layout="fill"/>
                        <div className={"team-content-box"}>
                            <h3>{props.name}</h3>
                            <b>{props.designation}</b>
                        </div>
                    </div>
                </div>
    )
}

export default TeamElement