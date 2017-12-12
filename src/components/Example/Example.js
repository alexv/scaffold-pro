import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from './index.js'

const mapState = (state) => ({
  ...state.Example
})

const mapDispatch = (dispatch) => ({
  dummyAction: () => {
    dispatch(actions.dummyAction())
  }
})

class Example extends Component {
  constructor( props ) {
    super( props )
  }
  render() {
    return (
      <div>Example -- Stateful w/ Redux</div>
    )
  }
}

Example = connect(mapState, mapDispatch)(Example)

export default Example
