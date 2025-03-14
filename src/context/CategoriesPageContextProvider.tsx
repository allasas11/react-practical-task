import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { Category, CategoryActionTypes, categoryInitialState, categoryReducer } from "../reducers/categoriesReducer";
import axios from "axios";
import { API_URL } from "../config/config";
import { fetchCategories } from "../api/categoriesApi";

type CategoriesPageContextType = {
    categories: Category[];
    deleteCategory: (id: number | string) => void;
    addNewCategory: (newCategory: Category) => void;
    editCategory: (updatedCategory: Category) => void;
};


const CategoriesPageContext = createContext<CategoriesPageContextType | undefined>(undefined);


type CategoriesPageContextProviderProps = {
    children: ReactNode;
};


export const CategoriesPageContextProvider: React.FC<CategoriesPageContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(categoryReducer, categoryInitialState);
    const { categories } = state;

    const deleteCategory = async (id: number | string) => {
        try {
            await axios.delete(`${API_URL}/categories/${id}`);
            dispatch({ type: CategoryActionTypes.DELETE_CATEGORY, payload: id });

            const categoriesData = await fetchCategories();
            dispatch({ type: CategoryActionTypes.SET_CATEGORIES, payload: categoriesData });
        } catch (error) {
            console.error(`Error deleting category with ID ${id}:`, error);
        }
    };

    const addNewCategory = async (newCategory: Category) => {
        try {
            await axios.post(`${API_URL}/categories`, newCategory);
            dispatch({ type: CategoryActionTypes.ADD_NEW_CATEGORY, payload: newCategory });

            const categoriesData = await fetchCategories();
            dispatch({ type: CategoryActionTypes.SET_CATEGORIES, payload: categoriesData });
        } catch (error) {
            console.error('Error adding new category:', error);
        }
    };

    const editCategory = async (updatedCategory: Category) => {
        try {

            await axios.put(`${API_URL}/categories/${updatedCategory.id}`, updatedCategory);
            dispatch({ type: CategoryActionTypes.EDIT_CATEGORY, payload: updatedCategory });

            const categoriesData = await fetchCategories();
            dispatch({ type: CategoryActionTypes.SET_CATEGORIES, payload: categoriesData });
        } catch (error) {
            console.error('Error editing category:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesData = await fetchCategories();
                dispatch({ type: CategoryActionTypes.SET_CATEGORIES, payload: categoriesData });
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, []);

    const ctxValue: CategoriesPageContextType = {
        categories,
        deleteCategory,
        addNewCategory,
        editCategory,
    };

    return (
        <CategoriesPageContext.Provider value={ctxValue}>
            {children}
        </CategoriesPageContext.Provider>
    );
};

export const useCategories = () => {
    const ctx = useContext(CategoriesPageContext);
    if (!ctx) {
        throw new Error('useCategories can only be used within CategoriesPageContextProvider');
    }
    return ctx;
};