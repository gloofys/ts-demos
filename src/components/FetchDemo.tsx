import React, { useEffect, useState } from "react";
import {fetchStaticData} from "../reducers/api.ts";


const FetchDemo = ({ venueSlug }: { venueSlug: string }) => {
    const [venueCoordinates, setVenueCoordinates] = useState<[number, number] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchStaticData(venueSlug);
            setVenueCoordinates(data);
        };

        fetchData();
    }, [venueSlug]);

    return (
        <div>
            <h2>Venue Coordinates</h2>
            {venueCoordinates ? (
                <p>
                    Latitude: {venueCoordinates[1]}, Longitude: {venueCoordinates[0]}
                </p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default FetchDemo;
