const variables = {
  development: {
    googleApiKey: "dev key",
  },
  production: {
    googleApiKey: "Prouction key",
  },
};

const getEnvVariables = () => {
  if (__DEV__) {
    return variables.development; // return this if in development mode
  }
  return variables.production; // otherwise, return this
};

export default getEnvVariables; // export a reference to the
