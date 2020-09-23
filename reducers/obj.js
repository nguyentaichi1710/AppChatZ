const initSate = {
  loading: false,
  List: [{name: 'a', chatMessage: 'a'}],
};
const SEND_MESSAGE = 'SEND_MESSAGE';
const ObjReducer = (state = initSate, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newList = [...state.List];
      newList.push(action.List);
      return {
        ...state,
        List: newList,
      };
    default:
      return state;
  }
};

export default ObjReducer;
