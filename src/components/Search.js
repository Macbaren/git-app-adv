import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/AlertContext'
import { GithubContext } from '../context/alert/github/gitubContext'

export const Search = () => {
  const [value, setValue] = useState('')

  const { show } = useContext(AlertContext)

  const github = useContext(GithubContext)

  const onSubmit = (event) => {
    if (event.key !== 'Enter') return
    if (value.trim()) {
      github.search(value.trim())
    } else show("Enter users' name!")
  }
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="enter users' name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}
