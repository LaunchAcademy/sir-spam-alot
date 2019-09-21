import React from "react"

const EmailList = (props) => {
  // const { emails, names } = props

  // const emails = props.emails
  // const names = props.names
  const { emails } = props
  const emailListItems = emails.map((email) => {
    return (<li key={email}>{email}</li>)
  })

  return (
    <ul>
      {emailListItems}
    </ul>
  )
}

export default EmailList