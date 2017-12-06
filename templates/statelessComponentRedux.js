import React from 'react'
import { connect } from 'react-redux'

import { actions } from './index.js'

const mapState = (state) => ({
  ...state.{{ComponentName}}
})

const mapDispatch = (dispatch) => ({
  dummyAction: () => {
    dispatch( actions.dummyAction() )
  }
})

const {{ComponentName}} = () => {
  return (
    <div>{{ComponentName}} -- Stateless w/ Redux</div>
  )
}

const connected{{ComponentName}} = connect(mapState, mapDispatch)({{ComponentName}})

export default connected{{ComponentName}}
