
import { connect } from 'react-redux'
import { sendMessageBtnActionCreater, updateTextAreaValueActionCreater } from '../../redux/messagesReducer'
import Dialogs from './Dialogs'





let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    MessageBtn: () => {
      dispatch(sendMessageBtnActionCreater())
    },
    AreaValue: (text) => {
      dispatch(updateTextAreaValueActionCreater(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer


