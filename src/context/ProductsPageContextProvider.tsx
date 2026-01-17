import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { Product, ProductActionTypes, productInitialState, productReducer } from "../reducers/productsReducer";

import axios from "axios";
import { API_URL } from "../config/config";
import { fetchProducts } from "../api/productsApi";

type ProductsPageContextType = {
    products: Product[];
    deleteProduct: (id: number | string) => void;
    addNewProduct: (newProduct: Product) => void;
    editProduct: (updatedProduct: Product) => void;
};

const ProductsPageContext = createContext<ProductsPageContextType | undefined>(undefined);

type ProductsPageContextProviderProps = {
    children: ReactNode;
};

export const ProductsPageContextProvider: React.FC<ProductsPageContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, productInitialState);
    const { products } = state;

    const deleteProduct = async (id: number | string) => {
        try {
            await axios.delete(`${API_URL}/products/${id}`);
            dispatch({ type: ProductActionTypes.DELETE_PRODUCT, payload: id });

            const productsData = await fetchProducts();
            dispatch({ type: ProductActionTypes.SET_PRODUCTS, payload: productsData });
        } catch (error) {
            console.error(`Error deleting product with ID ${id}:`, error);
        }
    };

    const addNewProduct = async (newProduct: Product) => {
        try {
            await axios.post(`${API_URL}/products`, newProduct);
            dispatch({ type: ProductActionTypes.ADD_NEW_PRODUCT, payload: newProduct });

            const productsData = await fetchProducts();
            dispatch({ type: ProductActionTypes.SET_PRODUCTS, payload: productsData });
        } catch (error) {
            console.error('Error adding new product:', error);
        }
    };

    const editProduct = async (updatedProduct: Product) => {
        try {
            await axios.put(`${API_URL}/products/${updatedProduct.id}`, updatedProduct);
            dispatch({ type: ProductActionTypes.EDIT_PRODUCT, payload: updatedProduct });

            const productsData = await fetchProducts();
            dispatch({ type: ProductActionTypes.SET_PRODUCTS, payload: productsData });
        } catch (error) {
            console.error('Error editing product:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await fetchProducts();
                dispatch({ type: ProductActionTypes.SET_PRODUCTS, payload: productsData });
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    const ctxValue: ProductsPageContextType = {
        products,
        deleteProduct,
        addNewProduct,
        editProduct
    };

    return (
        <ProductsPageContext.Provider value={ctxValue}>
            {children}
        </ProductsPageContext.Provider>
    );
};

export const useProducts = () => {
    const ctx = useContext(ProductsPageContext);
    if (!ctx) {
        throw new Error('useProducts can only be used within ProductsPageContextProvider');
    }
    return ctx;
};