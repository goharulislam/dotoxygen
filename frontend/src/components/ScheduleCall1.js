import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik, Form} from 'formik';
import FormikControl from './forms/assets/FormikControl';
import * as Yup from 'yup';
import woman2 from '../images/woman2.jpg';
import hand1 from '../images/hand1.jpg';

function ScheduleCall1(){
const navigate = useNavigate();
const [currentStep, setCurrentStep] = useState(0);
const [errors, setErrors] = useState({});
const [data, setData] = useState({
  call_date: null,
});

const makeRequest = (newData) => {
console.log('newData', newData);

let i = newData;
navigate('/schedulecall2', {
  state: {
    i,
  }
});
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
<div>
<section className="schedule1">
<div className='container'>
<div className='row'>
<div className="col-md-6">
  <div className='b1 frame'><img src={woman2} alt="woman" className="img-fluid" /></div>
  <div className='b2'>
    <h5>Stephanie Liverani from DotOxygen</h5>
    <h3><span className="frame"><img src={hand1} alt="hand" /></span> Get-to-know-each-other call</h3>
  </div>
  <ul>
    <li><i className='fa fa-clock-o'></i> 30 min</li>
    <li><i className='fa fa-video-camera'></i> Web conferencing details provided upon confirmation.</li>
    <li><i className='fa fa-calendar'></i> 4:00pm - 4:30pm, Tuesday, April 5, 2022</li>
    <li><i className='fa fa-globe'></i> Pakistan, Maldives Time (12:08am)</li>
  </ul>
  <pre id="whereToPrint"></pre>
</div>{/*col*/}
<div className="col-md-6">
  {steps[currentStep]}
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
</div>
);
}

const stepOneValidationSchema = Yup.object({
  call_date: Yup.string().required().label('Date'),
});
  
const StepOne = (props) => {
  
const handleSubmit = (values) => {
  //console.log('Form data', values);
  //console.log('saved data', JSON.parse(JSON.stringify(values)));
  props.next(values, true);
}

return(
  <Formik initialValues={props.data} validationSchema={stepOneValidationSchema} onSubmit={handleSubmit}>
  {formik => {
    //console.log('formik', formik)
    return(
  <Form>
      <FormikControl control='date2' label='Select a Date & time' name='call_date' />
      <p className='float-start error' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required field(s).</p>
      <button type="submit" className="float-end btn8" disabled={!(formik.isValid)}>Confirm</button>
  </Form>
  )}}
</Formik>
);
}
export default ScheduleCall1;