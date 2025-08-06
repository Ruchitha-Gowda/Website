import React, { useState } from "react";
import './salesforceForm.css';

export default function SalesforceForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="salesforce-form">
    
      <iframe
        title="Salesforce submission frame"
        name="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (submitted) {
            console.log("Form submitted silently.");
          }
        }}
      ></iframe>

      <h2>Get in Touch</h2>
      <form
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgK000004ayct"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="oid" value="00DgK000004ayct" />
        <input type="hidden" name="retURL" value="/" />

        <label htmlFor="first_name">First Name</label>
        <input id="first_name" name="first_name" type="text" maxLength="40" required />

        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" name="last_name" type="text" maxLength="80" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" maxLength="80" required />

        <label htmlFor="city">City</label>
        <input id="city" name="city" type="text" maxLength="40" />

        <label htmlFor="country">Country</label>
        <input id="country" name="country" type="text" maxLength="40" />

        <label htmlFor="state">State/Province</label>
        <input id="state" name="state" type="text" maxLength="40" />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" required />

        <input type="submit" value="Submit" />

        {submitted && <p style={{ color: "aquamarine", textAlign: "center" }}>Thank you for contacting us!</p>}
      </form>
    </div>
  );
}
