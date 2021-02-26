import React, { Fragment } from 'react'
import { Alert } from '../components/Alert'
import { Card } from '../components/Card'
import { Search } from '../components/Search'

export const Home = () => {
  const cards = new Array(15).fill(0).map((_, ind) => ind + 1)
  return (
    <Fragment>
      <Alert alert={{ text: 'test alert' }} />
      <Search />
      <div className="row">
        {cards.map((it) => (
          <div key={it.toString()} className="col-sm-4 mb-4">
            <Card />
          </div>
        ))}
      </div>
    </Fragment>
  )
}
