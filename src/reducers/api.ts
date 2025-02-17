const BASE_URL = 'https://consumer-api.development.dev.woltapi.com/home-assignment-api/v1/venues';

export const fetchStaticData = async (venueSlug: string): Promise<[number, number]> => {
    const response = await fetch(`${BASE_URL}/${venueSlug}/static`);
    const data = await response.json();
    const coordinates = data?.venue_raw?.location?.coordinates;console.log("API Response:", data);
    return [coordinates[0],coordinates[1]] // Assumes API always returns valid [longitude, latitude]
};