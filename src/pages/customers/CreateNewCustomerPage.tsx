import React, { useState } from 'react';
import { useCustomers } from '../../context/CustomersPageContextProvider';
import { Customer } from '../../reducers/customersReducer';
import styles from '../../styles/customers/CreateNewCustomerPage.module.css'
import { useNavigate } from 'react-router-dom';
import CustomerForm from '../../components/customers/CustomerForm';

const CreateNewCustomerPage: React.FC = () => {
    const { customers, addNewCustomer } = useCustomers();
    const navigate = useNavigate();
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
        navigate('/customers')
    };

    return (
        <div>
            <h1>Create New Customer</h1>
            <div className={styles.formContainer}>
                <CustomerForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} buttonText="Create Customer" />
            </div>
        </div>
    );
};

export default CreateNewCustomerPage;
