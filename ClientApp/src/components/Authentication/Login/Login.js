import React, { useState, Component } from 'react';
import { notify } from 'react-notify-toast';
import { API_URL } from '../../../config';
import '../../../App.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//import {authenticationService} from '../_services';
class Login extends React.Component {
        /*   constructor(props) {
            super(props);

            // redirect to home if already logged in
            if (authenticationService.currentUserValue) { 
                this.props.history.push('/');
            }
        } */
        state = {
            sendingEmail: false
        }
        onSubmit = event => {
            event.preventDefault()
            this.setState({ sendingEmail: true })
                // Super interesting to me that you can mess with the upper and lower case 
                // of the headers on the fetch call and the world does not explode.
            fetch(`${API_URL}/email`, {
                    method: 'get',
                    headers: {
                        aCcePt: 'aPpliCaTIon/JsOn',
                        'cOntENt-type': 'applicAtion/JSoN'
                    },
                    zz: JSON.stringify({
                        useremail: this.email.value,
                        password: this.password.value
                    })
                })
                .then(res => res.json())
                .then(data => {

                    // Everything has come back successfully, time to update the state to 
                    // reenable the button and stop the <Spinner>. Also, show a toast with a 
                    // message from the server to give the user feedback and reset the form 
                    // so the user can start over if she chooses.
                    this.setState({ sendingEmail: false })
                    notify.show(data.msg)
                    this.form.reset()
                })
                .catch(err => console.log(err))
                //
        }
        render = () => {
                const { sendingEmail } = this.state
                return ( <div >
                        <Formik initialValues = {
                            {
                                email: '',
                                password: ''
                            }
                        }
                        validationSchema = {
                            Yup.object().shape({
                                email: Yup.string().required('Email is required'),
                                password: Yup.string().required('Password is required')
                            })
                        }
                        /* onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
                            setStatus();
                            authenticationService.login(username, password)
                                .then(
                                    user => {
                                        const { from } = this.props.location.state || { from: { pathname: "/" } };
                                        this.props.history.push(from);
                                    },
                                    error => {
                                        setSubmitting(false);
                                        setStatus(error);
                                      }
                                );
                        }} */
                        render = {
                            ({ errors, status, touched, isSubmitting }) => (
                               <Form className = 'login' >
                                <div className = 'wrapper' >
                                <div className = 'form-wrapper' >
                                <h2 > Sign in </h2> 
                                <div className = "email" >
                                <label htmlFor = "email" > Email </label> <Field required name = "email"
                                type = "email"
                                className = { 'form-control' + (errors.email && touched.email ? ' is-invalid' : '') }
                                /> 
                                <ErrorMessage name = "email"
                                component = "div"
                                className = "invalid-feedback" />
                                </div> 
                                <div className = "password" >
                                <label htmlFor = "password" > Password </label> 
                                <Field required name = "password"
                                type = "password"
                                className = { 'form-control' + (errors.password && touched.password ? ' is-invalid' : '') }
                                /> 
                                <ErrorMessage name = "password"
                                component = "div"
                                className = "invalid-feedback" />
                                </div> 
                                <label > < a href = "http://localhost:3000/registry" > Haven `t registred? Sign up</a></label>
                    <div className="submit">
                        <button  className='but' type="submit" disabled={isSubmitting}>Login</button>
                        {isSubmitting &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                    {status &&
                        <div className={'alert alert-danger'}>{status}</div>
                    }
                    </div>
                    </div>
                </Form>
            )}
        />
        </div>
      )
    }
  }
  export default Login ;