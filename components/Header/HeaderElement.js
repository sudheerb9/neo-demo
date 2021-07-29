import React from 'react'

function HeaderElement(props) {
    return(
        <section className={"abt-01"}>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-12"}>
                    <div className={"seting"}>
                        <h3>{props.name}</h3>
                        <ol>
                            <li>Home <i className={"fas fa-chevron-double-right"}></i></li>
                            <li>{props.name}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HeaderElement