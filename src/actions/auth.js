import axios from "axios";
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/'
const API_KEY = 'AIzaSyDX4lm74DQJq8W2DbrO1hvI1p5QHuUZmRc'
export const SignupwithEmail_pass = (details,callback)=>{
    
     return async(dispatch)=>{
        try {
            const response = await axios.post(`${BASE_URL}accounts:signUp?key=${API_KEY}`,{
                email:details.email,
                password:details.password,
                returnSecureToken:true
               })
               console.log(response);
               dispatch({
                type:'SIGNUP',
                payload:response.data
               })
                localStorage.setItem("token",response.data.idToken);
                localStorage.setItem("email",response.data.email);
               
               return callback(response.data)
          } catch (error) {
            console.log(error);
            return callback({
                error:true,
                response:error.response
            })
          }
     }
   
}



export const loginWithEmailAndPassword = (details, callback) => {
  return async(dispatch) => {
      try {
          const response = await axios.post(`${BASE_URL}accounts:signInWithPassword?key=${API_KEY}`, {
              email: details.email,
              password: details.password,
              returnSecureToken: true
          })
          dispatch({
              type: 'LOGIN',
              payload: response.data
          })
          localStorage.setItem("token",response.data.idToken);
          localStorage.setItem("email",response.data.email);
          
          return callback(response.data)
      }
      catch (error) {
          return callback({
              error: true,
              response: error.response
          })
      }
  }
}

export const checkIsLoggedIn = callback => {
    return async(dispatch) => {
        try {
            let token = localStorage.getItem("token")
            let email = localStorage.getItem("email")
            if(!token) {
                return;
            }
            const response = await axios.post(`${BASE_URL}accounts:lookup?key=${API_KEY}`, {
                idToken: token,

                email:email
            })
            dispatch({
                type: 'LOGIN',
                payload: {
                    idToken: token,
                    email: email,
                    localId: response.data.users[0].localId,
                    ...response.data
                }
            })
            return callback(response.data)
        }
        catch (error) {
            return callback({
                error: true,
                response: error.response
            })
        }
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem("token")
        dispatch({
            type: "LOGOUT"
        })
    }
}