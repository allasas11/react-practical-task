import axios from 'axios';
import { Location } from '../reducers/locationsReducer';
import { API_URL } from '../config/config';

export const fetchLocations = async (): Promise<Location[]> => {
    try {
        const response = await axios.get<Location[]>(`${API_URL}/locations`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const fetchLocationsById = async (id: number | string): Promise<Location> => {
    try {
        const response = await axios.get<Location>(`${API_URL}/locations/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching locations with ID ${id}:`, error);
        throw error;
    }
};