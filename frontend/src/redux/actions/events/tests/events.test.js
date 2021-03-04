import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import mocks from "./mocks";
import { createEvent, getEvents } from '../events';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe("The create event action creator", () => {
  const url = "http://127.0.0.1:8000/events/create/";

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should dispatch an action of type CREATE_EVENT_SUCCESS on successful axios request", () => {
    moxios.stubRequest(url, mocks.createEventSuccess);
    return store
      .dispatch(createEvent({              
        name: 'test',
        description: 'test',
        dateTime: 'test',
        contactInfo: 'test',
        addLine1: 'test',
        city: 'test',
        region: 'test',
        postcode: 'test'
    }))
      .then(() => {
        const actualAction = store.getActions();
        expect(actualAction[0].type).toEqual("CREATE_EVENT_SUCCESS");
      });
  });

  it("should dispatch an action of type CREATE_EVENT_FAILURE on unsuccessful axios request", () => {
    moxios.stubRequest(url, mocks.error);
    return store
      .dispatch(createEvent({              
        name: 'test',
        description: 'test',
        dateTime: 'test',
        contactInfo: 'test',
        addLine1: 'test',
        city: 'test',
        region: 'test',
        postcode: 'test'
    }))
      .then(() => {
        const actualAction = store.getActions();
        expect(actualAction[0].type).toEqual("CREATE_EVENT_FAILURE");
      });
  });
});

describe("The get events action creator", () => {
  const url = "http://127.0.0.1:8000/events/list/";

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should dispatch an action of type VIEW_EVENTS_SUCCESS on successful axios request", () => {
    moxios.stubRequest(url, mocks.getEventsSuccess);
    return store
      .dispatch(getEvents())
      .then(() => {
        const actualAction = store.getActions();
        expect(actualAction[0].type).toEqual("VIEW_EVENTS_SUCCESS");
      });
  });

  it("should dispatch an action of type VIEW_EVENTS_FAILURE on unsuccessful axios request", () => {
    moxios.stubRequest(url, mocks.error);
    return store
      .dispatch(getEvents())
      .then(() => {
        const actualAction = store.getActions();
        expect(actualAction[0].type).toEqual("VIEW_EVENTS_FAILURE");
      });
  });
});