import REACT from 'react'
import Image from 'next/image'

function ContactUs() {
    return(
        <section className={"bg-001"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"heading"}>
                        <h2>Get In Touch</h2>
                        <span></span>
                    </div>

                    <div className={"col-lg-6 col-md-6 col-12"}>
                        <div className={"contact-box"}>
                            <ul>
                                <li>First Floor,Vincent Plaza, Kuzhithurai,Marthandam, Kanyakumari Dist
                                    Tamilnadu, India - 629163</li>
                                <li>sales@smarteyeapps.com</li>
                                <li>+91 9751791203</li>
                            </ul>
                        </div>
                    </div>

                    <div className={"col-lg-6 col-md-6 col-12"}>
                        <div className={"contact-box"}>
                            <form action="" className={"my-form"}>
                                <div className="form-group">
                                    <input type="name" className={"form-control"} placeholder="Name" />
                                </div>

                                <div className={"form-group"}>
                                    <input type="email" className={"form-control"} placeholder="Email" />
                                </div>

                                <div className="form-group">
                                    <input type="text" className={"form-control"} placeholder="Subject" />
                                </div>

                                <div className={"form-group"}>
                                    <textarea className={"form-control"} name="message" placeholder="Message" ></textarea>
                                </div>

                                <div className={"form-group"}>
                                    <div className={"link"}>
                                        <a href="#">Send</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs