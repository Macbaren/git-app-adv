import React, { Fragment, useContext } from 'react'
import { Alert } from '../components/Alert'
import { Card } from '../components/Card'
import { Search } from '../components/Search'
import { GithubContext } from '../context/alert/github/gitubContext'

export const Home = () => {
  const { loading, users } = useContext(GithubContext)

  return (
    <Fragment>
      <Alert alert={{ text: 'test alert' }} />
      <Search />
      <div className="row">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          users.map((user) => (
            <div className="col-sm-4 mb-4" key={user.id}>
              <Card user={user} />
            </div>
          ))
        )}
      </div>
    </Fragment>
  )
}
