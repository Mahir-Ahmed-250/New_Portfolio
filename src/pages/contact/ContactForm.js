import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './ContactForm.css'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import ClipLoader from "react-spinners/ClipLoader";

const ContactForm = () => {
    let formRef = useRef();
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {
        setLoading(true)
        e.preventDefault()
        emailjs.sendForm('service_yy0l1cx', 'template_6c9yxgq', formRef.current, 'user_yjwbvUwE9uV38jOIolP7w')
            .then((result) => {
                setName("")
                setSubject("");
                setEmail("");
                setMessage("");
                swal({
                    title: "Thank you! ",
                    text: "Message successfully delivered! I'll reply asap inshaAllah",
                    icon: "success",
                    button: "OK",
                });
                setLoading(false)
            }, (error) => {
                swal({
                    title: "Sorry! ",
                    text: error.text,
                    icon: "error",
                    button: "OK",
                })
                setLoading(false)
            });

    }
    return (
        <div>
            <div className="contact">

                <div className="contact">

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" onChange={e => setName(e.target.value)}
                            value={name} required />
                        <input type="text" placeholder="Subject" name="user_subject" onChange={e => setSubject(e.target.value)}
                            value={subject} required />
                        <input type="email" placeholder="Email" name="user_email"
                            onChange={e => setEmail(e.target.value)}
                            value={email} required />
                        <textarea rows='5' placeholder="Message" name="message"
                            onChange={event => setMessage(event.target.value)}
                            value={message} required />
                        {
                            loading ? (
                                <>
                                    <button className='btn project-button'>
                                        <ClipLoader size={20} color="#36d7b7" />
                                    </button>
                                </>) : (<>
                                    <button className="btn project-button">Send</button></>)
                        }
                    </form>
                </div>

            </div>
        </div >

    );
};

export default ContactForm;