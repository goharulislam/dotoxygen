/*https://www.youtube.com/watch?v=xAjbUJfpoz0*/
import React, {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {Formik, Form} from 'formik';
import FormikControl from './assets/FormikControl';
import * as Yup from 'yup';
import axios from '../../axios/index';

function Form2(){
const [currentStep, setCurrentStep] = useState(0);
const [errors, setErrors] = useState({});
let response = null;
let formData = new FormData();
const navigate = useNavigate();
const params = useLocation();
const [data, setData] = useState({
	function: 'schedule_call',
	full_name: '',
	email: '',
	guest_emails: '',
	company: '',
	phone: '',
	call_date: params.state.i.call_date
});
/*
function formatDate(date){
	var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    hour = d.getHours(),
    minutes = d.getMinutes();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day, 'T', hour, minutes].join('-');
}
*/
const makeRequest = (newData) => {
console.log('newData', newData);
//document.getElementById("whereToPrint").innerHTML = JSON.stringify(newData, null, 4);

Object.keys(newData).forEach(fieldName => {
  /*if(fieldName === 'call_date'){
    let d1 = formatDate(newData[fieldName]);
    console.log('fieldName:', fieldName);
    formData.append(fieldName, d1);
  } else {*/
    console.log(fieldName, newData[fieldName]);
    formData.append(fieldName, newData[fieldName]);
  //}
  
});
  
//document.getElementById("whereToPrint").innerHTML = JSON.stringify(formData, null, 4);
/*
	// V IMP CODE
	for(var pair of formData.entries()){
		console.log(pair[0]+ ', ' + pair[1]); 
	}
*/
create(formData);
}

async function create(formData){
	try{
		response = await axios.post('index2.php', formData);
		//console.log('response data', response.data);
		if(response.data.status === 1){
			console.log('Added successfully.');
			let i = '';
			for(var pair of formData.entries()){
				//console.log(pair[0]+ ', ' + pair[1]);
				if(pair[0] === 'call_date'){
					i = pair[1];
				}
			}
			navigate('/emailtoclient', {state: {i,}});
		}else{
			console.log('Error: Not saved.');
		}
	}catch(err){
		setErrors(err);
		console.error(err);
	}
}

const handleNextStep = (newData, final = false) => {
	setData((prev) => ({...prev, ...newData}));
	if(final){
		makeRequest(newData)
		return;
	}
	setCurrentStep((prev) => prev + 1);
};

const steps = [
	<StepOne next={handleNextStep} data={data} errors={errors} />,
]

return(
<section style={{padding:0}}>
	<div className='clearfix'></div>
	{steps[currentStep]}
	<pre id="whereToPrint"></pre>
</section>
);
}

const stepOneValidationSchema = Yup.object({
	/*full_name: Yup.string().required().label('Full Name'),
	email: Yup.string().email().required().label('Email'),
	guest_email: Yup.string().email().required().label('Guest email(s)'),
	company: Yup.string().required().label('Company name'),
	phone: Yup.string().required().label('Phone'),
	*/
});

const StepOne = (props, params) => {

const handleSubmit = (values) => {
	console.log('Form data', values);
	console.log('saved data', JSON.parse(JSON.stringify(values)));
	props.next(values, true);
}

return(
	<Formik initialValues={props.data} validationSchema={stepOneValidationSchema} onSubmit={handleSubmit}>
	{formik => {
		console.log('formik', formik)
		return(
	<Form className='contact1'>
		<h5>Enter details</h5>
		<div className="row">
		<div className="col-md-12">
			<FormikControl control='input' type='text' label='Full Name' name='full_name' />
			<FormikControl control='input' type='email' label='Email' name='email' />
			<FormikControl control='textarea' label='Guest email(s)' name='guest_emails' placeholder='Notify upto 5 guest(s), one per line.' />
			<FormikControl control='input' type='text' label='Company name' name='company' />
			<FormikControl control='input' type='text' label='Send text message to' name='phone' />
			<p className='float-start error' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required field(s).</p>
			<button type="submit" className="btn2" disabled={!(formik.isValid)}>Schedule event</button>
		</div>
	</div>{/*row*/}
	</Form>
	)}}
</Formik>
);
}

export default Form2;