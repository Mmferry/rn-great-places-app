// const vars = {
//   googleApiKey: "AIzaSyAQ--R0GjWWnzOndGT10easck1xdgyjJRo",
// };

const variables = {
  development: {
    googleApiKey: "AIzaSyAQ--R0GjWWnzOndGT10easck1xdgyjJRo",
  },
  production: {
    googleApiKey: "AIzaSyAQ--R0GjWWnzOndGT10easck1xdgyjJRo",
  },
};

const getEnvVariables = () => {
  if (__DEV__) {
    return variables.development; // return this if in development mode
  }
  return variables.production; // otherwise, return this
};

export default getEnvVariables; // export a reference to the
