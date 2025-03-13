import axios from 'axios'
import { Customer } from '../reducers/customersReducer'
import { API_URL } from '../config/config';




export const fetchCustomers = async (): Promise<Customer[]> => {
    try {
        const response = await axios.get<Customer[]>(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching customers:', error)
        throw error
    }
}

export const fetchCustomerById = async (id: number): Promise<Customer> => {
    try {
        const response = await axios.get<Customer>(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching customer with ID ${id}:`, error);
        throw error;
    }
};
