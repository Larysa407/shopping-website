import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import MyInput from "./MyInput";
import { NumericFormat } from 'react-number-format';

export default function Forms() {
    const handleSubmit = (values, {setSubmitting}) => {

        setTimeout(() => {
            const {firstName, lastName, age, address, tel} = values;

            console.log(firstName, lastName, age, address, tel);
            setSubmitting(false);
        }, 1000);
    }

    return (
        <>
            <h1>New Order</h1>
            <Formik
                initialValues={{firstName: '', lastName: '', age: '', address: '', tel: ''}}
                onSubmit={handleSubmit}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(20, 'Must be 20 characters or less').required('Field is required!'),
                    lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Field is required!'),
                    age: Yup.number().required('Field is required!'),
                    address: Yup.string().max(50, 'Must be 50 characters or less').required('Field is required!'),
                    tel: Yup.number().required('Field is required!')
                })}
            >
                <Form className='form-container' noValidate>
                    <Field
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        component={MyInput}
                    />

                    <Field
                        type='text'
                        placeholder='Last Name'
                        name='lastName'
                        component={MyInput}
                    />
                    
                    <Field
                        type='text'
                        placeholder='Age'
                        name='age'
                        component={MyInput}
                    />
                    
                    <Field
                        type='text'
                        placeholder='Address'
                        name='address'
                        component={MyInput}
                    />
                    
                    <Field
                        type='tel'
                        placeholder='Mobile'
                        name='tel'
                        component={MyInput}
                    />
                    <div className="mt-2">
                        <button type="submit" className="form-btn">Checkout</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}
