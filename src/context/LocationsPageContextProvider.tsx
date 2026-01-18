
import axios from "axios";
import { Location, LocationActionTypes, locationReducer, locationInitialState } from "../reducers/locationsReducer";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { API_URL } from "../config/config";
import { fetchLocations } from "../api/locationsApi";
import { useReducer } from "react";

type LocationsPageContextType = {
    locations: Location[];
    deleteLocation: (id: number | string) => void;
    addNewLocation: (newLocation: Location) => void;
    editLocation: (updatedLocation: Location) => void;
};


const LocationsPageContext = createContext<LocationsPageContextType | undefined>(undefined);


type LocationsPageContextProviderProps = {
    children: ReactNode;
};


export const LocationsPageContextProvider: React.FC<LocationsPageContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(locationReducer, locationInitialState);
    const { locations } = state;

    const deleteLocation = async (id: number | string) => {
        try {
            await axios.delete(`${API_URL}/locations/${id}`);
            dispatch({ type: LocationActionTypes.DELETE_LOCATION, payload: id });

            const locationsData = await fetchLocations();
            dispatch({ type: LocationActionTypes.SET_LOCATIONS, payload: locationsData });
        } catch (error) {
            console.error(`Error deleting locations with ID ${id}:`, error);
        }
    };

    const addNewLocation = async (newLocation: Location) => {
        try {
            await axios.post(`${API_URL}/locations`, newLocation);
            dispatch({ type: LocationActionTypes.ADD_NEW_LOCATION, payload: newLocation });

            const locationsData = await fetchLocations();
            dispatch({ type: LocationActionTypes.SET_LOCATIONS, payload: locationsData });
        } catch (error) {
            console.error('Error adding new location:', error);
        }
    };

    const editLocation = async (updatedLocation: Location) => {
        try {

            await axios.put(`${API_URL}/locations/${updatedLocation.id}`, updatedLocation);
            dispatch({ type: LocationActionTypes.EDIT_LOCATION, payload: updatedLocation });

            const locationsData = await fetchLocations();
            dispatch({ type: LocationActionTypes.SET_LOCATIONS, payload: locationsData });
        } catch (error) {
            console.error('Error editing location:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const locationsData = await fetchLocations();
                dispatch({ type: LocationActionTypes.SET_LOCATIONS, payload: locationsData });
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };

        fetchData();
    }, []);

    const ctxValue: LocationsPageContextType = {
        locations,
        deleteLocation,
        addNewLocation,
        editLocation,
    };

    return (
        <LocationsPageContext.Provider value={ctxValue}>
            {children}
        </LocationsPageContext.Provider>
    );
};

export const useLocations = () => {
    const ctx = useContext(LocationsPageContext);
    if (!ctx) {
        throw new Error('useLocations can only be used within LocationsPageContextProvider');
    }
    return ctx;
};