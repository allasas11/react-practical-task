import { createContext, ReactNode, useContext, useEffect, useReducer } from "react"
import { Customer, CustomerActionTypes, customerInitialState, customerReducer } from "../reducers/customersReducer"
import { API_URL, fetchCustomers } from "../api/customerApi";
import axios from "axios";

type CustomersPageContextType = {
    customers: Customer[];
    deleteCustomer: (id: number) => void;
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
        deleteCustomer
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