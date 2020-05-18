export const userActions = {
  login,
  logout 
};

function login(username) {
  return dispatch => {
    dispatch(request({ username })); 
  };

  function request(user) { return { type: 'USERS_LOGIN_REQUEST', user } } 
}

function logout() { 
  return { type: 'USERS_LOGOUT' };
} 