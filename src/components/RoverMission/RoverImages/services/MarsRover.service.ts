import axios from 'axios';
import type {MarsRoverParams, MarsRoverPhoto} from "../Interfaces/MarsRoverPhoto.ts";

export const fetchMarsRoverImages = async (params: MarsRoverParams = {}): Promise<MarsRoverPhoto[]> => {
    const rover = params.rover || 'curiosity';
    const camera = params.camera || null;
    const sol = params.sol || 1000;

    let url = `${import.meta.env.PUBLIC_API_URL}/mars_rover`;

    try {
        const response = await axios.post<MarsRoverPhoto[]>(url, {
            rover,
            camera,
            sol
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Mars Rover images:', error);
        throw error;
    }
};
