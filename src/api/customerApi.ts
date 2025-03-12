import axios from 'axios'
import { Customer } from '../reducers/customersReducer'

export const API_URL = 'http://localhost:5000/customers'


export const fetchCustomers = async (): Promise<Customer[]> => {
    try {
        const response = await axios.get<Customer[]>(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching customers:', error)
        throw error
    }
}


