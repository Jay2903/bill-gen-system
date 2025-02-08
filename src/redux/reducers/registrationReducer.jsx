import { REGISTER_USER } from '../actions/registrationActions';

const initialState = {
  users: [],
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default registrationReducer;