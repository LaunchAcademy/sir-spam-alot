import React, { useState } from 'react';
import SpamFormContainer from './SpamFormContainer';

const App = (props) => {
  return (
    <div>
      <div>
        <h1>Dear Sir Spams A Lot,</h1>
        <h2>Please spam me</h2>
        <SpamFormContainer />
      </div>
    </div>
  )
}

export default App;
