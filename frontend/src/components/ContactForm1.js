import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './forms/assets/FormikControl';

function ContactForm1(props){
    const initialValues = {
        name: '',
        email: '',
        project: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string().required().label('Full Name'),
        email: Yup.string().email().required().email().label('Email'),
        project: Yup.string().required().label('Project')
    });
    const onSubmit = (values) =>{
        console.log('Form data', values);
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                (formik) => {
                    return(
                    <Form>
                        <div className='row'>
                        <div className='col-md-6'>
                            <FormikControl control='input' type='text' label='' name='name' placeholder='Your Name' />
                        </div>
                        <div className='col-md-6'>
                            <FormikControl control='input' type='email' label='' name='email' placeholder='Email' />
                        </div>
                        <div className='col-md-12'>
                            <FormikControl control='input' type='text' label='' name='project' placeholder='Tell us about your project' />
                            <button type="submit" disabled={!formik.isValid} className='btn3'>Send</button>
                        </div>
                        </div>
                    </Form>)
                }
            }
        </Formik>
    )
}
export default ContactForm1;