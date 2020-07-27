import React from 'react'
import './form.css'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mbjzqojd"
        method="POST"
      >
        <div className="headings">
            <h2>Contact Us</h2>
            <p>We would love to hear from you!</p>
        </div>
        <div className="name">
            <div className="first">
                <label htmlFor="first-name"></label>
                <input type="text" name='first-name' placeholder='First Name' required />
            </div>
            <div className="last">
                <label htmlFor="last-name"></label>
                <input type="text" name='last-name' placeholder='Last Name' required />
            </div>
        </div>
        <div className='info'>
            <div className="email">
                <label htmlFor="email"></label>
                <input type="email" name='email' placeholder='Email Address' required />
            </div>
            <div className="phone">
                <label htmlFor="phone"></label>
                <input type="tel" name='phone' placeholder='Phone Number' required />
            </div>
        </div>
        <div className="message">
            <label htmlFor="message"></label>
            <textarea name="message" placeholder='Leave us a message' required></textarea>
        </div>
        <div className="submit">
            {status === "SUCCESS" ? <p style={{backgroundColor: '#7E9772', color: 'white', fontSize: '18px', width: 'auto', padding: '8px', borderRadius: '10px'}}>Thanks for reaching out! We'll contact you as soon as possible.</p> : <button className='btn-primary' type='submit'>Submit</button>}
            {status === "ERROR" && <p style={{backgroundColor: '#D45E60', color: 'white', fontSize: '18px', width: 'auto', padding: '8px', borderRadius: '10px'}}>Ooops! There was an error.</p>}
        </div>
      </form>
    );
  }

  submitForm(ev) {
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
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}