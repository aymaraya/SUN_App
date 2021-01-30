import { createStore, applyMiddleware } from 'redux';
//import thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk';
//import reducer from our reducer file
import reducer from './src/redux/reducer';
//import your action creators used by dispatchers to alter your global state.
import { loginPending } from './src/redux/loginPending'
import { loginSuccessful } from './src/redux/loginSuccessful'
import { loginFailed } from './src/redux/loginFailed'
import { logout } from './src/redux/logout'

import axios from 'axios';

const store = createStore(reducer, applyMiddleware(thunk))

//Define your action creators that will be responsible for asynchronous operation 
export const loginUser = (username, password) => {
  //IN order to use await your callback must be asynchronous using async keyword.
  return async dispatch => {

    try {
      dispatch(loginPending(true));
      await axios({
        method: 'post',
        url: 'https://api.sun.edu.ng/api/login/authenticate',
        data: { username: username, password: password },

      })
        .then(response => {
          dispatch(loginSuccessful(response.data.result.studentDetail))
          console.log(response.data.result.studentDetail)
        }
        )
        .catch(err => {
          dispatch(loginFailed(err))
          alert(err)
          console.log(err)
        })
    }
    catch (error) {
      dispatch(loginFailed(error))
      alert(error)
      console.log(error)
    }
  }
}

export const logoutUser = () => {
  return dispatch => {
    dispatch(logout(true))
  }
}

export default store;