import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from './index.js'

const mapState = (state) => ({
  ...state.{{ComponentName}}
})

const mapDispatch = (dispatch) => ({
  dummyAction: () => {
    dispatch(actions.dummyAction())
  }
})

class {{ComponentName}} extends Component {
  constructor( props ) {
    super( props )
  }
  render() {
    return (
      <div>{{ComponentName}} -- Stateful w/ Redux</div>
    )
  }
}

{{ComponentName}} = connect(mapState, mapDispatch)({{ComponentName}})

export default {{ComponentName}}
