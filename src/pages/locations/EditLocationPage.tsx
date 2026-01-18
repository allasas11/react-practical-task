import React, { useEffect, useState } from "react";
import styles from '../../styles/locations/EditLocationPage.module.css'
import LocationForm from "../../components/locations/LocationForm";
import { useNavigate, useParams } from "react-router-dom";
import { useLocations } from "../../context/LocationsPageContextProvider";
import { Location } from "../../reducers/locationsReducer";


const EditLocationPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { locations, editLocation } = useLocations();
    const navigate = useNavigate(); 

    const [locationData, setLocationData] = useState<Location | null>(null);

    useEffect(() => {
        const location = locations.find((location) => location.id === id);
        if (location) {
            setLocationData(location);
        } else {
            navigate("/404"); 
        }
    }, [id, locations, navigate]); 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (locationData) {
            setLocationData({
                ...locationData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (locationData) {
            editLocation(locationData); 
            navigate(`/locations/${id}`); 
        }
    };

    if (!locationData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className={styles.pageTitle}>Edit Location</h1>
            <LocationForm formData={locationData} handleChange={handleInputChange} handleSubmit={handleSubmit} buttonText="Save changes" />
        </div>
    );
};

export default EditLocationPage;
