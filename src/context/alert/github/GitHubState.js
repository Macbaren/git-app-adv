import React, { useReducer } from 'react'
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from '../types'
import { githubReducer } from './githubReducer'
import { GithubContext } from './gitubContext'

export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const search = async (value) => {
    setLoading()

    dispatch({
      type: SEARCH_USERS,
      payload: [],
    })
  }

  const getUser = async (name) => {
    setLoading()

    dispatch({
      type: GET_USER,
      payload: [],
    })
  }

  const getRepos = async (name) => {
    setLoading()

    dispatch({
      type: GET_REPOS,
      payload: [],
    })
  }

  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  const setLoading = () => dispatch({ type: SET_LOADING })

  const { user, users, repos, loading } = state

  return (
    <GithubContext.Provider
      value={{
        setLoading,
        search,
        getRepos,
        getUser,
        clearUsers,
        user,
        users,
        repos,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
