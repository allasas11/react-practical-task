import axios from 'axios';
import { Category } from '../reducers/categoriesReducer';
import { API_URL } from '../config/config';

export const fetchCategories = async (): Promise<Category[]> => {
    try {
        const response = await axios.get<Category[]>(`${API_URL}/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const fetchCategoryById = async (id: number | string): Promise<Category> => {
    try {
        const response = await axios.get<Category>(`${API_URL}/categories/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching category with ID ${id}:`, error);
        throw error;
    }
};