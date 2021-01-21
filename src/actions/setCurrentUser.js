export const setCurrentUser = userDetails => {
  return dispatch => {
    dispatch({type: 'LOGIN_USER', payload: userDetails})
  }
}