import React from 'react';
import '../mode/css/Contact.css'; // Link to your Contact.css file

const Contact = () => {
  return (
    <section className="p-5 bg-yellow py-5">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-md-5">
            <h6>Quick Contact</h6>
            <h2 className="display-3">Leave a Message</h2>
            <p>Labore accusam in modo compungi, iacentem substantiales um se sed esse haec.</p>
          </div>
          <div className="col-md-5">
            <div className="mb-3">
              <input type="text" className="form-control p-3 rounded-4" name="name" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control p-3 rounded-4" name="email" placeholder="Your email" />
            </div>
            <div className="mb-3">
              <textarea className="form-control p-3 rounded-4" name="message" placeholder="Your message" rows="3"></textarea>
            </div>
            <div className="d-grid">
              <button type="button" className="btn btn-dark btn-lg text-uppercase rounded-4">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
