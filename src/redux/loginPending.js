//Define your action create that set your loading state.
export const loginPending = (bool) => {
  //return a action type and a loading state indicating it is getting data. 
  return {
      type: 'LOGIN_PENDING',
      payload: bool,
  };
}