const successCreateEventResponse = {
  status: 201,
  response: {
    data: {
      id: 1,
      name: "test",
      description: "test",
      dateTime: "test",
      contactInfo: "test",
      latitude: 3.234345,
      longitude: 5.767567,
    },
  },
};

const successGetEventsResponse = {
  status: 200,
  response: {
    data: [
      {
        id: 1,
        name: "test",
        description: "test",
        dateTime: "test",
        contactInfo: "test",
        latitude: 3.234345,
        longitude: 5.767567,
      },
      {
        id: 2,
        name: "test",
        description: "test",
        dateTime: "test",
        contactInfo: "test",
        latitude: 3.234345,
        longitude: 5.767567,
      },
    ],
  },
};

const errorResponse = {
  status: 400,
};

const mocks = {
  createEventSuccess: successCreateEventResponse,
  getEventsSuccess: successGetEventsResponse,
  error: errorResponse,
};

export default mocks;
