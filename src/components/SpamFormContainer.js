import React, { useState } from "react"

const SpamFormContainer = (props) => {
  const [contact, setContact] = useState({
    email: "",
    phone: "",
    preference: "",
    preferenceDetail: ""
  })

  const [errors, setErrors] = useState({})
  const validateForm = () => {
    let errorsInSubmission = {}
    if(contact.preference.trim() === "") {
      errorsInSubmission = {
        ...errorsInSubmission,
        preference: "must be specified"
      }
    }
    else {
      if(contact.preference === "email" && contact.email.trim() === "") {
        errorsInSubmission = {
          ...errorsInSubmission,
          email: "must be specified"
        }
      }
      else if(contact.preference === "phone" && contact.phone.trim() === "") {
        errorsInSubmission = {
          ...errorsInSubmission,
          phone: "must be specified"
        }
      }
    }

    if(contact.preferenceDetail.trim() === "") {
      errorsInSubmission = {
        ...errorsInSubmission,
        preferenceDetail: "must be specified"
      }
    }

    setErrors(errorsInSubmission)

    return Object.keys(errorsInSubmission).length === 0
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if(validateForm()) {

    }
  }

  const handleChange = (event) => {
    setContact({
      ...contact,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const contactPreferences = ["phone", "email"]
  const messageOptions = [""].concat(contactPreferences).map((pref) => {
    return <option key={pref} value={pref}>{pref}</option>
  })

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          name="email" 
          onChange={handleChange}
          value={contact.email} />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input 
          type="text" 
          name="phone" 
          id="phone" 
          onChange={handleChange} 
          value={contact.phone} />
      </div>
      <div>
        <label htmlFor="preference">Preference</label>
        <select name="preference" id="preference" onChange={handleChange}>
          {messageOptions}
        </select>
      </div>
      <div>
        <label htmlFor="preferenceDetail">Tell us what kind of spam you really like</label>
        <textarea 
          name="preferenceDetail" 
          onChange={handleChange}
          id="preferenceDetail"
          value={contact.preferenceDetail}>
        </textarea>
      </div>
      <div>
        <input type="submit" value="Add" />
      </div>
    </form>
  )
}

export default SpamFormContainer