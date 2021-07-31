import React, {useState} from 'react'
import Image from 'next/image'
import { Button, Form, FormGroup, Label, Input, FormText,FormFeedback } from 'reactstrap';
import {SiGmail} from 'react-icons/si'
import {FaPhoneAlt} from 'react-icons/fa'
import {ImLocation} from 'react-icons/im'
import Iframe from 'react-iframe'
import axios from "axios";

function ContactUs() {

    const [form_State,setFormState]=useState({
        name:'',
        email:'',
        body:''
    })

    const onNameChangeHandler = (e) =>{
        setFormState({
            ...form_State,
            name: e.target.value
        })
    }

    const onEmailChangeHandler = (e) =>{
        setFormState({
            ...form_State,
            email: e.target.value
        })
    }

    const onBodyChangeHandler = (e) =>{
        setFormState({
            ...form_State,
            body: e.target.value
        })
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        axios.post('https://cors-anywhere.herokuapp.com/https://maker.ifttt.com/trigger/Mail/with/key/0Z91p35KynJZtHGCLzr0R',{
            value1:"rohithbheema27@gmail.com",
            value2:form_State.email,
            value3:form_State.body},{
            headers: {
                "access-control-allow-origin" : "*",
                "Content-type": "application/json"
        }}
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        //console.log(form_State)
    }

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
                                <li> <ImLocation  style={{color:'#4528DC',height:'20px',width:'20px'}}/>  <span style={{marginLeft:'20px'}}>
                                    1-1-379(210/A), Jawahar nagar, Chikadpally, Hyderabad, 500020
                                </span></li>
                                <li> <SiGmail  style={{color:'#4528DC',height:'20px',width:'20px'}}/>  <span style={{marginLeft:'20px'}}> info@neomentors.in </span> </li>
                                <li>  <FaPhoneAlt  style={{color:'#4528DC',height:'20px',width:'20px'}}/>  <span style={{marginLeft:'20px'}}> +91 9704558792</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className={"col-lg-6 col-md-6 col-12"}>
                        <div className={"contact-box"}>
                            {/*<Form className={"my-form"} onSubmit={onSubmitHandler}>*/}
                            {/*    <Form.Group className={"form-group"}>*/}
                            {/*        <Form.Control type="text" name="name" id="exampleName" placeholder="Name" className={"form-control"} required value={form_State.name} onChange={onNameChangeHandler} />*/}
                            {/*    </Form.Group>*/}

                            {/*    <Form.Group className={"form-group"}>*/}
                            {/*        <Form.Control type="email" name="email" id="exampleEmail" placeholder="Email" className={"form-control"} required  value={form_State.email} onChange={onEmailChangeHandler} />*/}
                            {/*    </Form.Group>*/}

                            {/*    <Form.Group className={"form-group"}>*/}
                            {/*        <Form.Check as="textarea" rows={1}  className={"form-control"} name="message" placeholder="Message" required value={form_State.body} onChange={onBodyChangeHandler} />*/}
                            {/*    </Form.Group>*/}

                            {/*    <Button variant="primary" type="submit">*/}
                            {/*        Submit*/}
                            {/*    </Button>*/}
                            {/*</Form>*/}

                        <Form className={"my-form"} onSubmit={onSubmitHandler}>

                            <FormGroup className={"form-group"}>
                                <Input   type="text"  id="exampleName" placeholder="Name" className={"form-control"} required value={form_State.name} onChange={onNameChangeHandler}/>
                            </FormGroup>

                            <FormGroup className={"form-group"}>
                                <Input type="email"  id="exampleEmail" placeholder="Email" className={"form-control"} required  value={form_State.email} onChange={onEmailChangeHandler}/>
                            </FormGroup>

                            <FormGroup>
                                <Input type="textarea" id="exampleText" className={"form-control"}  placeholder="Message" required value={form_State.body} onChange={onBodyChangeHandler}/>
                            </FormGroup>

                            <div className={"form-group"}>
                                    <Button className={"link"}>Send</Button>
                            </div>

                        </Form>
                        </div>

                    </div>
                </div>
            </div>

            <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0618123273007!2d78.48783111532637!3d17.408821006767784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9951c124b1a9%3A0x39e71ad3d7f66c46!2sNeomentors%20Education!5e0!3m2!1sen!2sin!4v1627633679715!5m2!1sen!2sin"
                width="100%" height="450" frameBorder="0" style={{marginBottom:'0px',border:0}} allowFullScreen=""/>
        </section>
    )
}

export default ContactUs;