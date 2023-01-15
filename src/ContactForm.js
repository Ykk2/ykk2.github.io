import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import "./contactform.css"


export const ContactForm = ({sent, setSent}) => {


    const form = useRef();

    const updateComment = (e) => {
        e.preventDefault()
        if (e.target.value.length <= 0) {
            return e.target.style.height = "26px"
        }
        e.target.style.padding = "100px, 0px, 0px, 0px"
        e.target.style.height = `${e.target.scrollHeight}px`
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ad2aruo', 'template_81u96x8', form.current, 'aI6AYybRCmdVoLrR2')
            .then((result) => {
                setSent(true)
                console.log(result.text);
            }, (error) => {
                setSent(true)
                console.log(error.text);
            });
    };

    return (
            <form className={sent ? "sent" : ""} ref={form} onSubmit={sendEmail}>
                <div id="contact-form-title">Send me a message</div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="user_name" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="user_email" />
                </div>
                <textarea id="textarea"
                          type='text'
                          name="message"
                          onChange={updateComment}
                          maxLength='500' />
                <input id="submit" type="submit" value={sent? "Sent!" : "Send"}/>
            </form>
    )
}

export default ContactForm
