let initialState = {
  userName: ""
};

const newUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_NAME_CHANGE":
      return {
        ...state,
        userName: action.payload
      };
    default:
      return state;
  }
};

export default newUserReducer;
