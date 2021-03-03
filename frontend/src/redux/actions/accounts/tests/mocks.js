const successLoginResponse = {
  status: 200,
  response: {
    data: {
      token: "test",
      user: { username: "test", id: 1 },
    },
  },
};

const successRegisterResponse = {
  status: 201,
  response: {
    data: {
      token: "test",
      username: "test",
      id: 1,
    },
  },
};

const errorLoginResponse = {
  status: 400,
};

const errorRegisterResponse = {
  status: 400,
};

const mocks = {
  loginSuccess: successLoginResponse,
  registerSuccess: successRegisterResponse,
  loginError: errorLoginResponse,
  registerError: errorRegisterResponse,
};

export default mocks;
