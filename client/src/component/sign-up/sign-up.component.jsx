import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.style.scss';
import { signUpStart } from '../../redux/user/user-action';
import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {

     const [userCredentials, setUserCredentials ] = useState({
         displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
     });
 
  const { displayName, email, password, confirmPassword } = userCredentials;   
  
  const handleSubmit = async event => {
         event.preventDefault();
       if( password !== confirmPassword) {
           alert("Passwords don't match");
           return;
       }
      signUpStart({ displayName, email, password});
    };
const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }
     return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your emaul and password</span>
                <form className='sign-up-form' onSubmit={ handleSubmit }>
                    <FormInput  type='text' name = 'displayName' value={ displayName } label = 'Display Name' required
                         onChange = { handleChange } />

                    <FormInput  type='email' value = {email} name = 'email' label = 'Email' required
                         onChange = { handleChange }  />

                    <FormInput  type='password' value= {password} name='password' label='Password' required
                         onChange = { handleChange } />

                    <FormInput  type = 'password' value= {confirmPassword} name = 'confirmPassword' label = 'Confirm Password' required
                         onChange = { handleChange }  />
                         
                   <CustomButton type='submit' >SIGN UP</CustomButton>
                </form>
            </div>
        )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect( null, mapDispatchToProps)(SignUp);