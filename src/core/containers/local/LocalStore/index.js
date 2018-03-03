/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';
import { compose, lifecycle, withState, withStateHandlers } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './component';
import { fromLocal } from 'store/departments/selectors'

/* ---------------------------- Module Package ------------------------------ */

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) =>({
  data: fromLocal.getDepartment(state)
})

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {

  },

})


export default compose(
  connect(mapStateToProps),
  QueryLifecycle,
)(Render);