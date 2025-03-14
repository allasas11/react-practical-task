
export interface Category {
    id: number | string; 
    title: string;
    description: string;
    image: string;
}
export interface CategoryState {
    categories: Category[];
}

export enum CategoryActionTypes {
    SET_CATEGORIES = 'setCategories',
    DELETE_CATEGORY = 'deleteCategory',
    ADD_NEW_CATEGORY = 'addNewCategory',
    EDIT_CATEGORY = 'editCategory',
}

type CategoryAction =
    | { type: CategoryActionTypes.SET_CATEGORIES; payload: Category[] }
    | { type: CategoryActionTypes.DELETE_CATEGORY; payload: number | string } 
    | { type: CategoryActionTypes.ADD_NEW_CATEGORY; payload: Category }
    | { type: CategoryActionTypes.EDIT_CATEGORY; payload: Category };


export const categoryInitialState: CategoryState = {
    categories: [],
};


export const categoryReducer = (state: CategoryState, action: CategoryAction): CategoryState => {
    switch (action.type) {
        case CategoryActionTypes.SET_CATEGORIES:
            return { ...state, categories: action.payload };

        case CategoryActionTypes.DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== action.payload),
            };

        case CategoryActionTypes.ADD_NEW_CATEGORY:
            return { ...state, categories: [...state.categories, action.payload] };

        case CategoryActionTypes.EDIT_CATEGORY:
            return {
                ...state,
                categories: state.categories.map(category =>
                    category.id === action.payload.id ? action.payload : category
                ),
            };

        default:
            return state;
    }
};