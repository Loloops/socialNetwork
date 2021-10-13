const ADD_MESSAGE = 'ADD-MESSAGE',
      UPD_MESSAGE = 'UPDATE-MESSAGE-TEXTAREA'

export const messagesReducer = (state, action) => {


  switch (action.type) {
    case ADD_MESSAGE:
        const newMessgae = {
          id: 5,
          message: state.textAreaStateValue,
          flag: true,
        }
        state.messagesData.push(newMessgae)
        state.textAreaStateValue= ''
      return state  
    case UPD_MESSAGE:
        state.textAreaStateValue = action.newMessage
      return state
    default:
      return state
  }

}

export const sendMessageBtnActionCreater = () => {
  return {
    type: ADD_MESSAGE
  }
}
export const updateTextAreaValueActionCreater = (text) => { 
  return {
    type: UPD_MESSAGE,
    newMessage: text
  }
}


export default messagesReducer