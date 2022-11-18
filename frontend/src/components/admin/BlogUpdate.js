import React, {useState} from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import axios from "../../axios/index";
import Writer from './Writer';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../components/forms/assets/FormikControl';

function BlogUpdate(){
const navigate = useNavigate();
const params = useLocation();
const [value, setValue] = useState('');
/*below config configures buttons of wysiwyg toolbar*/

const dropdownWriters = [
    {key: 'mashhood', value: 'Mashhood Bin Hassan'},
    {key: 'ashraf', value: 'Muhammad Ashraf Khan'},
];

const initialValues = {
    table:"posts",
    id: params.state.i.id,
    heading: params.state.i.heading,
    text: params.state.i.text,
    author: params.state.i.author,
};

const validationSchema = Yup.object({
    heading: Yup.string().required(),
    author: Yup.string().required(),
});


const onSubmit = values => {
    console.log('ID: ', params.state.i.id);
    values.text = value;
    axios.post('/updateOne', values).then(json => console.log('Updated successfully'));
}

return(
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {
        (formik)=>{
            return(
                <section className='admin1'>
                <div className="container">
                <div className="row">
                <div className="col-md-12">
                <h6 className='alert alert-primary float-start'>Edit post</h6>
                <button className="btn5 float-end" onClick={() => navigate(-1)}>Back</button>
                <Form>
                    <FormikControl control='input' type='text' label='Post heading' name='heading' />
                    <label>Post text</label>
                    <Writer name="text" setValue={setValue} initialValue={params.state.i.text} />
                    <FormikControl control='select' label='Post author' name='author' options={dropdownWriters} className='form-control' />
                    <button type='submit' className='btn btn-secondary' disabled={!formik.isValid}>Update</button>
                </Form>
                </div>{/*col*/}
                </div>{/*row*/}
                </div>{/*con*/}
                </section>
            )
        }
    }
    </Formik>
)
}
export default BlogUpdate;