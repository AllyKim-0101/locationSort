export function calculateDistance(location1, location2) {
    //having 4 params
    const [lat1, lon1] = location1;
    const [lat2, lon2] = location2;

    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);  // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return Math.round(d);
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

export function sortByDistance(myLocation, locations) {
    // sort locations by distance
    const distances = calculateDistances(myLocation, locations);
    return distances.sort((firstBeach, secondBeach) => {
        return firstBeach.distance - secondBeach.distance
    });

}

export function calculateDistances(myLocation, locations) {
    return locations.map(location => {
        const distance = calculateDistance(myLocation, location);
        return { location: location, distance: distance }
    })
}