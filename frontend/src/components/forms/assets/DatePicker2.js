/*github.com/Hacker0x01/react-datepicker*/
import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';
import DateView from 'react-datepicker';
import { subDays, addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker2(props){
    const {label, name, ...rest} = props;
    return(
        <div className='fc'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({form, field}) => {
                        const {setFieldValue} = form;
                        const {value} = field;
                        
                        const formatUTC = (dateInt, addOffset = false) => {
                            let date = (!dateInt || dateInt.length < 1) ? new Date : new Date(dateInt);
                            if (typeof dateInt === "string") {
                                //return date;
                                return setFieldValue(name, date);
                            } else {
                                const offset = addOffset ? date.getTimezoneOffset() : -(date.getTimezoneOffset());
                                const offsetDate = new Date();
                                offsetDate.setTime(date.getTime() + offset * 60000)
                                //return offsetDate;
                                return setFieldValue(name, offsetDate);
                            }
                        }
                        const highlightWithRanges = [
                            {
                              "react-datepicker__day--highlighted-custom-1": [
                                subDays(new Date(), 4),
                                subDays(new Date(), 3),
                                subDays(new Date(), 2),
                                subDays(new Date(), 1),
                              ],
                            },
                            {
                              "react-datepicker__day--highlighted-custom-2": [
                                addDays(new Date(), 1),
                                addDays(new Date(), 2),
                                addDays(new Date(), 3),
                                addDays(new Date(), 4),
                              ],
                            },
                          ];
                        return(
                            <div>
                            {/*<DateView id={name} {...field} {...rest} selected={value} onChange={val => formatUTC(val)} dateFormat="dd/MM/yyyy" highlightDates={highlightWithRanges} showTimeSelect timeFormat="HH:mm" timeIntervals={30} timeCaption="Time" inline />*/}
                            <DateView id={name} {...field} {...rest} selected={value} onChange={val => setFieldValue(name, val)} dateFormat="dd/MM/yyyy" highlightDates={highlightWithRanges} showTimeSelect timeFormat="HH:mm" timeIntervals={30} timeCaption="Time" inline />
                            </div>
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
export default DatePicker2;