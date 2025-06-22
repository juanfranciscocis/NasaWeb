import axios from 'axios';
import type {NasaImageCollection} from "../Interfaces/NasaImageCollection.ts";
import type {NasaImagesParams} from "../Interfaces/NasaImagesParams.ts";

export const fetchNasaImages = async (params:NasaImagesParams): Promise<NasaImageCollection> => {
    const url = `${import.meta.env.PUBLIC_API_URL}/nasa_images`;

    const query = params.query || 'Earth';

    try {
        const response = await axios.post<NasaImageCollection>(url, {
            query
        } );
        return response.data;
    } catch (error) {
        console.error('Error fetching Mars Rover images:', error);
        throw error;
    }

};
