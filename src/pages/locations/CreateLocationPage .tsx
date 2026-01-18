import React, { useState } from "react";
import styles from '../../styles/locations/CreateLocationPage.module.css'
import { useLocations } from "../../context/LocationsPageContextProvider";
import { useNavigate } from "react-router-dom";
import { Location } from "../../reducers/locationsReducer";
import LocationForm from "../../components/locations/LocationForm";


const CreateLocationPage: React.FC = () => {
    const { locations, addNewLocation } = useLocations();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        image: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

  
        const highestId = locations.reduce((maxId, location) => {
            return Math.max(Number(maxId), Number(location.id));
        }, 0);

        const newId = (highestId + 1).toString();

        const newLocation: Location = {
            id: newId, 
            ...formData 
        };

        addNewLocation(newLocation);
        
        setFormData({
            name: '',
            address: '',
            image: ''
        }); 
        navigate('/locations')
    };

    return (
        <div>
            <h1>Create New Location</h1>
            <div className={styles.formContainer}>
                <LocationForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} buttonText="Create Location" />
            </div>
        </div>
    );
};

export default CreateLocationPage;
