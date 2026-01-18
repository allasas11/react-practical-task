import { NavLink } from "react-router-dom";
import styles from '../../styles/locations/LocationItem.module.scss'
import { Location } from "../../reducers/locationsReducer";
import { useLocations } from "../../context/LocationsPageContextProvider";

type LocationItemProps = {
    locationItem: Location;
};

const LocationItem: React.FC<LocationItemProps> = ({ locationItem }) => {

    const { id, name, address, image } = locationItem
    const { deleteLocation } = useLocations ()

    const handleDelete = () => {
        deleteLocation(Number(id))
    };

    return (
        <li className={styles.locationItemContainer}>
            <img src={image} alt={name} className={styles.locationImage} />
            <div className={styles.locationDetails}>
                <h3>
                    <NavLink to={`/locations/${id}`}>{name}</NavLink>
                </h3>
                <h4>{name}</h4>
                <p>Address: {address}</p>
            </div>
            <button onClick={handleDelete} className={styles.deleteButton}>Delete Location</button>
        </li>
    )
}

export default LocationItem