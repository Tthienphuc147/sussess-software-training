export default (to, from, next) => {
  if (localStorage.getItem("meetUpKey")) {
    next();
  } else {
    next("/account/sign-in");
  }
};
