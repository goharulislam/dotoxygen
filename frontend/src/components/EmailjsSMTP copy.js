import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useNavigate} from 'react-router-dom';

const Emailjs1 = () => {
const [data, setData] = useState('');

const form = useRef();
const navigate = useNavigate();

const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value});
}

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm('service_y4ueaq6', 'template_h57ujhd', form.current, 'eeFOANNZeYqZKnT29')
    .then((result) => {
        /*console.log(result.text);
        console.log('Message sent successfully.');*/
        e.target.reset();
        navigate('/contactthanks');
    }, (error) => {
        /*console.log(error.text);*/
        navigate('/contactoops');
});
};

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="to_name" className='hidden' value="Muhammad Ashraf Khan" onChange={handleChange} />
            <div className='row'>
            <div className='col-md-6'>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="from_name" onChange={handleChange} />
                    <label htmlFor="floatingInput">Your name</label>
                </div>
            </div>
            <div className='col-md-6'>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput2" name="from_email" placeholder='Your Email' onChange={handleChange} />
                    <label htmlFor="floatingInput">Your email</label>
                </div>
            </div>
            <div className='col-md-12'>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingInput3" name="message" placeholder='Tell us about your project' onChange={handleChange} />
                    <label htmlFor="floatingInput">Message</label>
                </div>
                <button type="submit" className='btn6'>Send</button>
            </div>
            </div>
        </form>
    );
};
export default Emailjs1;