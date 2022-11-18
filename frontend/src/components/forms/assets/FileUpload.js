/* https://github.com/KarimMokhtar/react-drag-drop-files */

import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';

function FileUpload(props){
const {label, name, file_number, ...rest} = props;
let i = parseInt(file_number);
console.log('ieee',i);
//const fileTypes = ["JPG", "PNG", "GIF"];

    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
export default FileUpload;