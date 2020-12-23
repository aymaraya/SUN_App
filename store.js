import { createStore, applyMiddleware } from 'redux';
//import thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk';
//import reducer from our reducer file
import reducer from './src/redux/reducer';
//import your action creators used by dispatchers to alter your global state.
import { loginPending } from './src/redux/loginPending'
import { loginSuccessful } from './src/redux/loginSuccessful'
import { loginFailed } from './src/redux/loginFailed'
import axios from 'axios';

const store = createStore(reducer, applyMiddleware(thunk))

//Define your action creators that will be responsible for asynchronouse operatiosn 
export const loginUser = () => {
  //IN order to use await your callback must be asynchronous using async keyword.
  return async dispatch => {

    try {
      dispatch(loginPending(true));
      console.log('1')
      await axios({
        method: 'get',
        url: 'https://api.sun.edu.ng/api/student-detail/1113/studentId',
        data: { studentId : 1113 },
        
      })
        .then(response => {
          dispatch(loginSuccessful(response.data))
          console.log(response.data)
        }
        )
        .catch(err => {
          dispatch(loginFailed(err))
          console.log(err)
        })
    }
    catch (error) {
      console.log(error)
      dispatch(loginFailed(error))
    }
  }
}

export default store;