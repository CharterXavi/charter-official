import './form.css'

import React, {useState} from 'react'

import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const formOptions = [
    {
      name: "default",
      action: "https://formspree.io/f/mbjzqojd"
    },
    {
      name: "communications",
      action: "https://formspree.io/f/xwkwdzkg"
    },
    {
      name: "human-resources",
      action: "https://formspree.io/f/mleoyvdl"
    },
    {
      name: "careers",
      action: "https://formspree.io/f/myybqvzd"
    },
    {
      name: "compliance", 
      action: "https://formspree.io/f/mjvpqzkg"
    },
  ]

  const [status, setStatus] = useState("");
  const [action, setAction] = useState(formOptions[0].action);

  const handleChange = (ev) => {
    ev.preventDefault();
    
    formOptions.forEach(department => {
      if(department.name === ev.target.value) {
        return setAction(department.action);
      }
      return;
    });
  }

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <form
      onSubmit={submitForm}
      action={action}
      method="POST"
    >
      <div className="headings">
          <h4>Contact Us</h4>
          <p>We would love to hear from you!</p>
      </div>
      <div className="name">
          <div className="first">
              <label htmlFor="full-name">
                First Name
                <input type="text" name='full-name' id='full-name' placeholder='Full Name' required />
              </label>
          </div>
          <div className="department">
              <label htmlFor="department">
                Last Name
                <select type="select" name='department' id='department' defaultValue="default" required onChange={handleChange}>
                  <option value="default" disabled hidden>What can we help you with?</option>
                  <option value="communications">General Inquiry</option>
                  <option value="careers">Careers/Recruitment</option>
                  <option value="human-resources">Human Resources</option>
                  <option value="compliance">Complaints</option>
                </select>
              </label>
          </div>
      </div>
      <div className='info'>
          <div className="email">
              <label htmlFor="email">
                Email
                <input type="email" name='email' id='email' placeholder='Email Address' required />
              </label>
          </div>
          <div className="phone">
              <label htmlFor="phone">
                Phone Number
                <input type="tel" name='phone' id='phone' placeholder='Phone Number' required />
              </label>
          </div>
      </div>
      <div className="message">
          <label htmlFor="message">
            Message
            <textarea name="message" id='message' placeholder='Leave us a message' required></textarea>
          </label>
      </div>
      <input type="text" name="_gotcha" style={{display: 'none'}} />
      <ReCAPTCHA 
        style={{padding: '16px 0'}}
        theme='dark'
        sitekey='6Ld750gaAAAAALwfP-9KCCJeG1im5IjFTgTs7cHx'
      />
      <div className="submit">
          {status === "SUCCESS" ? <p className='detail-text' style={{backgroundColor: '#63af40', color: 'white', width: 'auto', padding: '8px', borderRadius: '10px', margin: '16px 0'}}>Thanks for reaching out! We'll contact you as soon as possible. NOTE: form submissions are not monitored 24/7. In case of emergency, contact your local office for immediate assistance or call 911.</p> : <button className='btn-primary' type='submit' aria-label='Submit Form'>Submit</button>}
          {status === "ERROR" && <p className='detail-text' style={{backgroundColor: '#d12629', color: 'white', width: 'auto', padding: '8px', borderRadius: '10px', margin: '16px 0'}}>Ooops! There was an error - please ensure your email is a valid format (youremail@somewhere.com, for example) and that your phone number is correct.</p>}
      </div>
    </form>
  );
}

export default ContactForm;