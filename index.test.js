import { calculateDistance, sortByDistance, calculateDistances } from ".";
describe('calculate distance between two locations', () => {
    test('should return the distance', () => {
        const location1 = [37.8679, 144.9740];
        const location2 = [37.8155, 145.1549];
        const distance = calculateDistance(location1, location2);
        expect(distance).toEqual(17)
    })
})

describe('calculate the distances from my location to each of the given locations', () => {
    test('should sort locations by distance', () => {
        const myLocation = [37.8155, 145.1549];
        const locations = [
            [37.8679, 144.9740],
            [38.2260, 147.3840],
            [37.9160, 144.9861],
        ];

        const result = sortByDistance(myLocation, locations);
        expect(result).toEqual([
            { location: [37.8679, 144.9740], distance: 17 },
            { location: [37.9160, 144.9861], distance: 19 },
            { location: [38.2260, 147.3840], distance: 201 },
        ])
    })

})

describe('calculate distances for all locations', () => {
    test('should calculate all the distances', () => {
        const myLocation = [37.8155, 145.1549];
        const locations = [
            [37.8679, 144.9740],
            [38.2260, 147.3840],
            [37.9160, 144.9861],
        ];
        const result = calculateDistances(myLocation, locations);
        expect(result).toEqual([
            { location: [37.8679, 144.9740], distance: 17 },
            { location: [38.2260, 147.3840], distance: 201 },
            { location: [37.9160, 144.9861], distance: 19 },
        ]);
    })

})