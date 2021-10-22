
import { connect } from 'react-redux'
import { compose } from 'redux'
import { sendMessageBtnActionCreater } from '../../redux/messagesReducer'
import { withAuthRedirect } from '../hoc/AuthRedirect'
import Dialogs from './Dialogs'





let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    MessageBtn: (newMessageBody) => {
      dispatch(sendMessageBtnActionCreater(newMessageBody))
    },
    
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),//(**)
  withAuthRedirect//(*) Этот результат прокидываем в (**)
)(Dialogs) // берем dialogs и прокидываем в (*)


