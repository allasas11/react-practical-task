import React from "react";
import styles from '../../styles/locations/LocationsPage.module.css'
import { LocationsPageContextProvider } from "../../context/LocationsPageContextProvider";
import LocationsList from "../../components/locations/LocationsList";


const LocationsPage:React.FC = () => {
    return (
        <LocationsPageContextProvider>
            <div className={styles.locationsContainer}>
                <LocationsList />
            </div>
        </LocationsPageContextProvider>
    )
} 

export default LocationsPage