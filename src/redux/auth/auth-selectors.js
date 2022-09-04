const getIsloggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
const isLoading = state => state.auth.isLoading;

const authSelectors = {
  getIsloggedIn,
  getUserName,
  isLoading,
  getIsFetchingCurrentUser,
};

export default authSelectors;
