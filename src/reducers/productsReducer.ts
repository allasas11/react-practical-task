export interface Product {
    id: number | string;
    name: string;
    price: number;
    categoryId: number | string;
    image: string;
}

export interface ProductState {
    products: Product[];
}

export enum ProductActionTypes {
    SET_PRODUCTS = 'setProducts',
    DELETE_PRODUCT = 'deleteProduct',
    ADD_NEW_PRODUCT = 'addNewProduct',
    EDIT_PRODUCT = 'editProduct',
}

type ProductAction =
    | { type: ProductActionTypes.SET_PRODUCTS; payload: Product[] }
    | { type: ProductActionTypes.DELETE_PRODUCT; payload: number | string }
    | { type: ProductActionTypes.ADD_NEW_PRODUCT; payload: Product }
    | { type: ProductActionTypes.EDIT_PRODUCT; payload: Product };

export const productInitialState: ProductState = {
    products: [],
};

export const productReducer = (state: ProductState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
        case ProductActionTypes.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
            };
        case ProductActionTypes.ADD_NEW_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        case ProductActionTypes.EDIT_PRODUCT:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product
                ),
            };
        default:
            return state;
    }
};