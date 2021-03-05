import getMapCentre from "../getMapCentre";

describe("The get map centre function", () => {
  it("should return the mean latitude and longitude when passed an array of event objects", () => {
    const mockEvents = [
      {
        latitude: 10,
        longitude: 10,
      },
      {
        latitude: 12,
        longitude: 12,
      },
    ];
    const mapCentre = getMapCentre(mockEvents);
    expect(mapCentre).toEqual({
      lat: 11,
      lng: 11,
    });
  });
});
