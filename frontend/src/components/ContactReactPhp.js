import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function ContactReactPhp(props){
    const initialValues = {
        user_name: '',
        user_email: '',
        content: '',
        subject: 'Gohaych web: contact page',
        to_email: 'contact@gohaych.co.uk',
    }
    const validationSchema = Yup.object({
        user_name: Yup.string().required(),
        user_email: Yup.string().email().required(),
        content: Yup.string().required(),
    });
    const onSubmit = (values) =>{
        console.log('Form data', values);
    }
    return(
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
        (formik) => {
            return(<Form>
                <div className='row'>
                <div className='col-md-6'>
                    <FormikControl control='input' type='text' label='Your name' name='user_name' />
                </div>
                <div className='col-md-6'>
                    <FormikControl control='input' type='email' label='Your email' name='user_email' />
                </div>
                <div className='col-md-12'>
                    <FormikControl control='textarea' label='Message' name='content' />
                </div>
                <button type="submit" disabled={!formik.isValid}>Submit</button>
                </div>{/*row*/}
            </Form>)
            }
        }
        </Formik>
    )
}
export default ContactReactPhp;