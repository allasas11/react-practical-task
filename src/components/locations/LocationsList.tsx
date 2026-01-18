import { NavLink } from "react-router-dom"
import styles from '../../styles/locations/LocationsList.module.scss'
import { useLocations } from "../../context/LocationsPageContextProvider"
import LocationItem from "./LocationItem"

const LocationsList:React.FC = () => {

    const { locations } = useLocations()

    return (
        <>
            <h2 className={styles.pageTitle}>{locations.length > 0? 'Locations' : 'No locations'}</h2>

            <div className={styles.createLinkContainer}>
                <NavLink to="/create-location" className={({ isActive }) => isActive ? styles.activeLink : styles.createLink} > Create new location </NavLink>
            </div>

            <div className={styles.locationsContainer}>
                {locations.length > 0 && (

                    <ul className={styles.locationsWrapper}>
                        {locations.map((location) => (
                            <LocationItem key={location.id} locationItem={location} />
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default LocationsList