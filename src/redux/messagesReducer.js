const ADD_MESSAGE = 'messages/ADD-MESSAGE';

let initialState = {
  messagesData: [
    { id: 1, message: 'Hi', flag: true },
    { id: 2, message: 'How are you?', flag: true },
    { id: 3, message: 'Hello', flag: false },
    { id: 4, message: 'Ok', flag: false },
  ],
  dialogsData: [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Kostya' },
    { id: 3, name: 'Ivan' },
    { id: 4, name: 'Lena' },
    { id: 5, name: 'Alyona' },
  ],
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessgae = {
        id: 5,
        message: action.newMessageBody,
        flag: true,
      };
      return {
        ...state,

        messagesData: [...state.messagesData, newMessgae],
      };
    default:
      return state;
  }
};

export const sendMessageBtnActionCreater = (newMessageBody) => {
  return {
    type: ADD_MESSAGE,
    newMessageBody,
  };
};

export default messagesReducer;
