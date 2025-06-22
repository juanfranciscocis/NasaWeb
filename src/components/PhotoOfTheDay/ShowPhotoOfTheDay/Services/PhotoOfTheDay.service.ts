import axios from 'axios';
import type {PhotoOfTheDay} from "../Interfaces/PhotoOfTheDay.ts";

export const fetchPhotoOfTheDay = async (): Promise<PhotoOfTheDay> => {
    const url = `${import.meta.env.PUBLIC_API_URL}/picture_of_day`;

    try {
        const response = await axios.post<PhotoOfTheDay>(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching Mars Rover images:', error);
        throw error;
    }

};
