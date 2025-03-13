import { createContext, ReactNode, useContext, useEffect, useReducer } from "react"
import { Customer, CustomerActionTypes, customerInitialState, customerReducer } from "../reducers/customersReducer"
import { fetchCustomers } from "../api/customerApi";
import axios from "axios";
import { API_URL } from "../config/config";

type CustomersPageContextType = {
    customers: Customer[];
    deleteCustomer: (id: number) => void;
    addNewCustomer: (newCustomer: Customer) => void;
    editCustomer: (updatedCustomer: Customer) => void;
};

const CustomersPageContext = createContext<CustomersPageContextType | undefined>(undefined);

type CustomersPageContextProviderProps = {
    children: ReactNode;
};

export const CustomersPageContextProvider: React.FC<CustomersPageContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(customerReducer, customerInitialState);
    const { customers } = state;

    const deleteCustomer = async (id: number) => {
        try {
            await axios.delete(`${API_URL}/${id}`)
            dispatch({ type: CustomerActionTypes.DELETE_CUSTOMER, payload: id })
    
            const customersData = await fetchCustomers();
            dispatch({ type: CustomerActionTypes.SET_CUSTOMERS, payload: customersData });
        } catch (error) {
            console.error(`Error deleting customer with ID ${id}:`, error);
        }
    };

    const addNewCustomer = async (newCustomer: Customer) => {
        try {
            await axios.post(API_URL, newCustomer);
            dispatch({ type: CustomerActionTypes.ADD_NEW_CUSTOMER, payload: newCustomer });
            const customersData = await fetchCustomers();
            dispatch({ type: CustomerActionTypes.SET_CUSTOMERS, payload: customersData });
        } catch (error) {
            console.error('Error adding new customer:', error);
        }
    };


    const editCustomer = async (updatedCustomer: Customer) => {
        try {
            // Send PUT request to update the customer
            await axios.put(`${API_URL}/${updatedCustomer.id}`, updatedCustomer);

            // Dispatch the edit action to update the state
            dispatch({ type: CustomerActionTypes.EDIT_CUSTOMER, payload: updatedCustomer });

            // Re-fetch the updated customers data
            const customersData = await fetchCustomers();
            dispatch({ type: CustomerActionTypes.SET_CUSTOMERS, payload: customersData });
        } catch (error) {
            console.error('Error editing customer:', error);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const customersData = await fetchCustomers();
                dispatch({ type: CustomerActionTypes.SET_CUSTOMERS, payload: customersData });
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };

        fetchData();
    }, []);

    const ctxValue: CustomersPageContextType = {
        customers,
        deleteCustomer,
        addNewCustomer,
        editCustomer
    };

    return (
        <CustomersPageContext.Provider value={ctxValue}>
            {children}
        </CustomersPageContext.Provider>
    );
};


export const useCustomers = () => {
    const ctx = useContext(CustomersPageContext);
    if (!ctx) {
        throw new Error('useCustomers can only be used within CustomersPageContextProvider');
    }
    return ctx;
};