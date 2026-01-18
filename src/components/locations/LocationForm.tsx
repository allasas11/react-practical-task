import React from 'react';
import styles from '../../styles/locations/LocationForm.module.scss';

interface LocationFormProps {
    formData: {
        name: string;
        address: string;
        image: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    buttonText: string; 
}

const LocationForm: React.FC<LocationFormProps> = ({ formData, handleChange, handleSubmit, buttonText }) => {
    return (
        <div className={styles.locationFormContainer}>
            <form onSubmit={handleSubmit}>

                <div className={styles.formControl}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formControl}>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formControl}>
                    <label htmlFor="image">Location image:</label>
                    <input
                        type="url"
                        name="image"
                        id="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">{buttonText}</button>
            </form>
        </div>
    );
};

export default LocationForm;
