export interface Location {
    id: number | string; 
    name: string;
    address: string;
    image: string;
}

export interface LocationState {
    locations: Location[];
}

export enum LocationActionTypes {
    SET_LOCATIONS = 'setLocations',
    DELETE_LOCATION = 'deleteLocation',
    ADD_NEW_LOCATION = 'addNewLocation',
    EDIT_LOCATION = 'editLocation',
}

type LocationAction =
    | { type: LocationActionTypes.SET_LOCATIONS; payload: Location[] }
    | { type: LocationActionTypes.DELETE_LOCATION; payload: number | string } 
    | { type: LocationActionTypes.ADD_NEW_LOCATION; payload: Location }
    | { type: LocationActionTypes.EDIT_LOCATION; payload: Location };

export const locationInitialState: LocationState = {
    locations: [],
};

export const locationReducer = (state: LocationState, action: LocationAction): LocationState => {
    switch (action.type) {
        case LocationActionTypes.SET_LOCATIONS:
            return { ...state, locations: action.payload };

        case LocationActionTypes.DELETE_LOCATION:
            return {
                ...state,
                locations: state.locations.filter(location => location.id !== action.payload),
            };

        case LocationActionTypes.ADD_NEW_LOCATION:
            return { ...state, locations: [...state.locations, action.payload] };

        case LocationActionTypes.EDIT_LOCATION:
            return {
                ...state,
                locations: state.locations.map(location =>
                    location.id === action.payload.id ? action.payload : location
                ),
            };

        default:
            return state;
    }
};