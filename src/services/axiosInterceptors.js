import axios from 'axios'
import setAuthorizationToken from './setAuthorizationToken'
import setDeviceId from './setDeviceId'
import types from '../redux/types';

export default {
  init: (store) => {
    axios.interceptors.response.use(
      (response) => {
        if (sessionStorage.getItem('MARTYGAMES')) {
          setAuthorizationToken(sessionStorage.Worder)
          setDeviceId(localStorage.WORDER_device_id)
        } else if (localStorage.getItem('MARTYGAMES')) {
          setAuthorizationToken(localStorage.Worder)
          setDeviceId(localStorage.WORDER_device_id)
        }

        return response
      },
      (e) => {
        if (e.response?.status === 401) {
          console.log(e?.response)
          store.dispatch({ type: types.USER_LOG_OUT })
          setAuthorizationToken()
          setDeviceId()
          return false
        }
        return Promise.reject(e)
      }
    )
  },
}
