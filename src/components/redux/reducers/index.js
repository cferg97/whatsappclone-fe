import { SAVE_CURRENT_USER, SAVE_ALL_CONVERSATIONS } from "../actions";
//importing the action names from the actions file

const initialState = {
  currentUser: [],
  currentConversation: [],
  allConversations: [],
};
//set up the initial state and type (these will be arrays)

//declare name of reducer, set the state to be initial state and pass action as an argument
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CURRENT_USER: {
      //declare case name
      return {
        ...state, //return the rest of the state, pass in the payload as currentUser
        currentUser: action.payload,
      };
    }

    case SAVE_ALL_CONVERSATIONS: {
      return {
        ...state,
        allConversations: action.payload,
      };
    }

    default:
      return state;
    //default state needed in case of any errors, it just returns the original state
  }
};

export default mainReducer;
