import React from "react";
import styles from '../../styles/locations/LocationPage.module.scss'
import { NavLink, useParams } from "react-router-dom";
import { useLocations } from "../../context/LocationsPageContextProvider";


const LocationPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { locations } = useLocations();
    
    const location = locations.find((location) => location.id === id);

    if (!location) return <p>No location found.</p>;

    const { name, address, image } = location;

    return (
        <div className={styles.locationItem}>
            <div className={styles.locationItemContainer}>
                <img src={image} alt={name} className={styles.locationImage} />
                <h2>{name}</h2>
                <p>Address: {address}</p>
                <NavLink to={`/locations/${id}/edit`} className={styles.editLink}>
                    Edit Location
                </NavLink>
            </div>
        </div>
    );
};

export default LocationPage;
