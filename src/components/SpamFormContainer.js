import React, { useState } from "react"

const SpamFormContainer = (props) => {
  const [email, setEmail] = useState("")
  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onEmailAdded(email)
    setEmail("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          name="email" 
          onChange={handleEmailChange}
          value={email} />
      </div>
      <div>
        <input type="submit" value="Add" />
      </div>
    </form>
  )
}

export default SpamFormContainer