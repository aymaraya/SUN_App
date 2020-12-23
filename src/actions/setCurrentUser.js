export const setCurrentUser = userObject => {
  return dispatch => {
    dispatch({type: 'LOGIN_USER', payload: userObject})
  }
}