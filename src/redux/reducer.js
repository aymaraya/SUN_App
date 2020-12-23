//Define your initialState
const initialState = {
  //Have a people array responsible for getting the data and setting to the array.
  userDetails: {},
  //Have the loading state indicate if it's done getting data.
  loading: true,
  //Have state for error message for recieving an error.
  errorMessage: 'no',
}


//Define your reducer that will return the initialState by default
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return { ...state, loading: action.payload };
    case 'LOGIN_SUCCESSFUL':
      return { ...state, userDetails: action.payload, loading: action.loading };
    case 'LOGIN_FAILED':
      return { ...state, errorMessage: action.payload, loading: action.loading };
    default:
      return state;
  }
}


export default reducer;