import React, { useState } from 'react';
import SpamFormContainer from './SpamFormContainer';
import EmailList from './EmailList';

const App = (props) => {
  const [emails, setEmails] = useState([])
  const addEmail = (email) => {
    setEmails([
      ...emails,
      email
    ])
  }
  return (
    <div>
      <div>
        <h1>Dear Sir Spams A Lot,</h1>
        <h2>Please spam me</h2>
        <EmailList emails={emails} />
        <SpamFormContainer onEmailAdded={addEmail} />
      </div>
    </div>
  )
}

export default App;
