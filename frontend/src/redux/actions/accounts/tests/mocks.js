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

const successGetUserResponse = {
  status: 200,
  response: {
    data: {
      username: "test",
      id: 1,
    },
  },
};

const errorResponse = {
  status: 400,
};


const mocks = {
  loginSuccess: successLoginResponse,
  registerSuccess: successRegisterResponse,
  getUserSuccess: successGetUserResponse,
  error: errorResponse,
};

export default mocks;
