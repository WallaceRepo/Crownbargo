import React from 'react';
import FormInput from '../../component/form-input/form-input.component';
import CustomButton from '../../component/custom-button/custom-button.component';
import './contact.styles.scss';
import axios from 'axios';


class ContactPage extends React.Component {

    state = {
        yourName: '',
        yourEmail: '',
        msg:''
    }

    handleChange = event => {
        const { name, value } = event.target;
        
        this.setState({ [name]: value });

      };
    handleChangeMessage = event => {
        this.setState({ msg: event.target.value });

      };
   
   handleContactSubmit = async event => {
          event.preventDefault();
       const { yourName, yourEmail, msg } = this.state; 
       
        axios({
          url:'contact',
          method: 'post',
          data: {
            name: yourName,
            email: yourEmail,
            msg: msg
          }
        }).then( response => {
            alert('Message sent');
         }).catch(error => {
            console.log('Sending Error: ', error);
            alert(
              'There was an issue with your email.'
            );
        });

      this.setState({
        yourName: '',
        yourEmail: '',
        msg:''
      });
  };

 render() {
    const { yourName, yourEmail, msg} = this.state;
    return (
<div className='container'>
    <div className='quote'>
      <h3 className='title'>Have questions?</h3>
        <h2 className='title'>Send us a message.</h2>
        <span>Lorem ipsum dolor sit amet, </span>
    </div>   
    <div className='contact'>
        <form className='sign-up-form' onSubmit = { this.handleContactSubmit}>
            <FormInput
                type='text'
                name='yourName'
                value={yourName}
                onChange={this.handleChange}
                label='Your Name*'
                required
                />
            <FormInput
                type='email'
                name='yourEmail'
                value={yourEmail}
                onChange={this.handleChange}
                label='Email*'
                required
          />
           <textarea 
                placeholder ='Your message...' 
                name="message" 
                rows="4" cols ="46" 
                maxLength = '200'
                spellCheck = 'true'
                value={msg}
                onChange={this.handleChangeMessage}
               required>   
            </textarea>
      <CustomButton type='submit'>SEND MESSAGE</CustomButton>
      </form>
    
    </div>
    </div> );
 }
};

export default ContactPage;
