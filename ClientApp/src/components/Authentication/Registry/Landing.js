import React, { Component } from 'react'
import { notify } from 'react-notify-toast'
import Spinner from '../../Home/Spinner'
import { API_URL } from '../../../config'
import '../../../App.css';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export default class Landing extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
        repeatpassword: ''
      }
    };
  }
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
        case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
        case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
        case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
            case 'repeatpassword': 
            errors.repeatpassword = 
              errors.password != errors.repeatpassword
            ? 'Password must be the same!'
            : '';
        break;
        default:
        break;
    }

    this.setState({errors, [name]: value});
  }
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // A bit of state to give the user feedback while their email address is being 
  // added to the User model on the server.
  state = {
    sendingEmail: false
  }

  onSubmit = event => {
    event.preventDefault()
    this.setState({ sendingEmail: true})
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
    // Super interesting to me that you can mess with the upper and lower case 
    // of the headers on the fetch call and the world does not explode.
    fetch(`${API_URL}/email`, {
      method: 'pOSt',
      headers: {
        aCcePt: 'aPpliCaTIon/JsOn', 
        'cOntENt-type': 'applicAtion/JSoN'
      },
      body: JSON.stringify({ 
        useremail: this.email.value,
        username: this.username.value,
        password: this.password.value
      })
    })
    .then(res => res.json())  
    .then(data => {
      
      // Everything has come back successfully, time to update the state to 
      // reenable the button and stop the <Spinner>. Also, show a toast with a 
      // message from the server to give the user feedback and reset the form 
      // so the user can start over if she chooses.
      this.setState({ sendingEmail: false})
      notify.show(data.msg)
      this.form.reset()
    })
    .catch(err => console.log(err))
  }

  render = () => {
    const {errors} = this.state;
    // This bit of state provides user feedback in the component when something
    // changes. sendingEmail is flipped just before the fetch request is sent in 
    // onSubmit and then flipped back when data has been received from the server.
    // How many times is the 'sendingEmail' variable used below?
    const { sendingEmail } = this.state

    return (
      // A ref is put on the form so that it can be reset once the submission
      // process is complete.
      <form 
        onSubmit={this.onSubmit} 
        ref={form => this.form = form}
      >
         <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Sign up</h2>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input 
              classname="FirstName"
              type='text'
              name='username'
              onChange={this.handleChange}
              ref={input => this.username = input}
              noValidate
              required
              />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input 
              type='email'
              name='email'
              onChange={this.handleChange}
              noValidate
              ref={input => this.email = input}
              required />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input 
              type='password'
              name='password'
              onChange={this.handleChange}
              noValidate
              ref = {input => this.password = input}
              required />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='repeatpassword'>
                <label htmlFor="repeatpassword">Repeat Password</label>
              <input 
              type='password'
              name='repeatpassword'
              onChange={this.handleChange}
              noValidate
              required />
              {errors.repeatpassword.length > 0 && 
                <span className='error'>{errors.repeatpassword}</span>}
            </div>
            <div className='info'>
              <small>Password must be eight characters in 8 length.</small>
            </div>
            <div className='submit'>
            <button type='submit' className='but' disabled={sendingEmail}>
            {sendingEmail 
              ? <Spinner size='lg' spinning='spinning' /> 
              : "Registry"
            }
          </button>
          Have Already Registered?<a classname='home_sign_in' href="http://localhost:3000/login">Login</a>
            </div>
        </div>
      </div>
      </form>
    )
  }
}