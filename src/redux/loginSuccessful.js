//Define a action creator to set your loading state to false, and return the data when the promise is resolved
export const loginSuccessful = (data) => {
  //Return a action type and a loading to false, and the data.
  return {
      type: 'LOGIN_SUCCESSFUL',
      payload: data,
      loading: false,
      isAuthenticated: true
  };
}