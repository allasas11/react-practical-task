export interface Customer {
    id: number
    name: string
    username: string
    email: string
    phone: string
    address: string
    avatar: string
}

export interface CustomerState {
    customers: Customer[]
}

export enum CustomerActionTypes {
    SET_CUSTOMERS = 'setCustomers',
    DELETE_CUSTOMER = 'deleteCustomer',
}

type CustomerAction =
    | { type: CustomerActionTypes.SET_CUSTOMERS; payload: Customer[] }
    | { type: CustomerActionTypes.DELETE_CUSTOMER; payload: number }


export const customerInitialState: CustomerState = {
    customers: []
};

export const customerReducer = (state: CustomerState, action: CustomerAction): CustomerState => {
    switch (action.type) {
        case CustomerActionTypes.SET_CUSTOMERS:
            return { ...state, customers: action.payload };
        case CustomerActionTypes.DELETE_CUSTOMER:
            return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) };
        default:
            return state;
    }
};
