//Define a action creator that catches a error and sets an errorMessage
export const loginFailed = (error) => {
  //Return a action type and a payload with a error
  return {
      type: 'LOGIN_FAILED',
      payload: error,
      loading: false,
  };
}