export const setUser = (user, token) => ({
  type: "SET_USER",
  payload: { user, token },
});

export const logout = () => ({
  type: "LOGOUT",
});

export const setRoles = (roles) => ({
  type: "SET_ROLES",
  payload: roles,
});
