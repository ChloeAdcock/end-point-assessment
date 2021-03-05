const getMapCentre = (eventsArray) => {
    let totalLat = 0;
    let totalLng = 0;
    let count = 0;

    for (const singleEvent of eventsArray) {
        totalLat += Number(singleEvent.latitude)
        totalLng += Number(singleEvent.longitude);
        count += 1
    }

    return({
        lat: totalLat/count,
        lng: totalLng/count,
    })
}

export default getMapCentre;