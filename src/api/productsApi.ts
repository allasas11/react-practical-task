import axios from 'axios';
import { Product } from '../reducers/productsReducer';
import { API_URL } from '../config/config';


export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get<Product[]>(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};


export const fetchProductById = async (id: number | string): Promise<Product> => {
    try {
        const response = await axios.get<Product>(`${API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        throw error;
    }
};


export const addNewProduct = async (newProduct: Product): Promise<Product> => {
    try {
        const response = await axios.post<Product>(`${API_URL}/products`, newProduct);
        return response.data;
    } catch (error) {
        console.error('Error adding new product:', error);
        throw error;
    }
};


export const editProduct = async (updatedProduct: Product): Promise<Product> => {
    try {
        const response = await axios.put<Product>(`${API_URL}/products/${updatedProduct.id}`, updatedProduct);
        return response.data;
    } catch (error) {
        console.error('Error editing product:', error);
        throw error;
    }
};


export const deleteProduct = async (id: number | string): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/products/${id}`);
    } catch (error) {
        console.error(`Error deleting product with ID ${id}:`, error);
        throw error;
    }
};