import React from 'react';
import styles from '../../styles/customers/CustomerForm.module.css';

interface CustomerFormProps {
    formData: {
        name: string;
        username: string;
        email: string;
        phone: string;
        address: string;
        avatar: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    buttonText: string; 
}

const CustomerForm: React.FC<CustomerFormProps> = ({ formData, handleChange, handleSubmit, buttonText }) => {
    return (
        <div className={styles.customerFormContainer}>
            <form onSubmit={handleSubmit}>

                <div className="form-control">
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

                <div className="form-control">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-control">
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

                <div className="form-control">
                    <label htmlFor="avatar">Profile image:</label>
                    <input
                        type="url"
                        name="avatar"
                        id="avatar"
                        placeholder="Avatar URL"
                        value={formData.avatar}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">{buttonText}</button>
            </form>
        </div>
    );
};

export default CustomerForm;
