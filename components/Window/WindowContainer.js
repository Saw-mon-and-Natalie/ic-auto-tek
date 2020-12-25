import { connect } from 'react-redux'
import WindowComponent from './WindowComponent'
import { mapWindowDispatchProps } from './WindowActions'

export default connect(
    null,
    mapWindowDispatchProps
)(WindowComponent)

