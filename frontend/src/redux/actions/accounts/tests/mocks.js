const successLoginResponse = {
  status: 200,
  response: {
    data: {
      token: "test",
      user: { username: "test" },
    },
  },
};

const errorLoginResponse = {
  status: 400,
};

const mocks = {
  loginSuccess: successLoginResponse,
  loginError: errorLoginResponse,
};

export default mocks;
