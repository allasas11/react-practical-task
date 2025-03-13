import React, { useState } from 'react';
import { useCustomers } from '../context/CustomersPageContextProvider';
import { Customer } from '../reducers/customersReducer';
import styles from '../styles/CreateNewCustomerPage.module.css'

const CreateNewCustomerPage: React.FC = () => {
    const { customers, addNewCustomer } = useCustomers();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        address: '',
        avatar: ''
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

  
        const highestId = customers.reduce((maxId, customer) => {
            return Math.max(Number(maxId), Number(customer.id));
        }, 0);

        const newId = (highestId + 1).toString();

        const newCustomer: Customer = {
            id: newId, 
            ...formData 
        };

        addNewCustomer(newCustomer);
        
        setFormData({
            name: '',
            username: '',
            email: '',
            phone: '',
            address: '',
            avatar: ''
        }); 

    };

    return (
        <div>
            <h1>Create New Customer</h1>
            <div className={styles.formContainer}>
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


                    <button type="submit">Create Customer</button>
                </form>
            </div>
        </div>
    );
};

export default CreateNewCustomerPage;
