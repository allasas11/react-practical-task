export interface Customer {
    id: number | string
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
    ADD_NEW_CUSTOMER = 'addNewCustomer',
    EDIT_CUSTOMER = 'editCustomer',
}

type CustomerAction =
    | { type: CustomerActionTypes.SET_CUSTOMERS; payload: Customer[] }
    | { type: CustomerActionTypes.DELETE_CUSTOMER; payload: number }
    | { type: CustomerActionTypes.ADD_NEW_CUSTOMER; payload: Customer }
    | { type: CustomerActionTypes.EDIT_CUSTOMER; payload: Customer }


export const customerInitialState: CustomerState = {
    customers: []
};

export const customerReducer = (state: CustomerState, action: CustomerAction): CustomerState => {
    switch (action.type) {
        case CustomerActionTypes.SET_CUSTOMERS:
            return { ...state, customers: action.payload }
        case CustomerActionTypes.DELETE_CUSTOMER:
            return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) }
        case CustomerActionTypes.ADD_NEW_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] }
        case CustomerActionTypes.EDIT_CUSTOMER:
            return {
                ...state,
                customers: state.customers.map(customer =>
                    customer.id === action.payload.id ? action.payload : customer
                ),
            }
        default:
            return state;
    }
}
