//Define a action creator to set your loading state to false, and return the data when the promise is resolved
export const logout = (bool) => {
  //Return a action type and a loading to false, and the data.
  return {
      type: 'LOGOUT',
      payload: bool,
      loading: false,
      isAuthenticated: false
  };
}