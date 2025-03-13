import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { Customer } from "../../reducers/customersReducer"; 
import { useCustomers } from "../../context/CustomersPageContextProvider";
import styles from '../../styles/customers/EditCustomerPage.module.css'
import CustomerForm from "../../components/customers/CustomerForm";


const EditCustomerPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { customers, editCustomer } = useCustomers();
    const navigate = useNavigate(); 

    const [customerData, setCustomerData] = useState<Customer | null>(null);

    useEffect(() => {
        const customer = customers.find((customer) => customer.id === id);
        if (customer) {
            setCustomerData(customer);
        } else {
            navigate("/404"); 
        }
    }, [id, customers, navigate]); 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (customerData) {
            setCustomerData({
                ...customerData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (customerData) {
            editCustomer(customerData); 
            navigate("/customers"); 
        }
    };

    if (!customerData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className={styles.pageTitle}>Edit Customer</h1>
            <CustomerForm formData={customerData} handleChange={handleInputChange} handleSubmit={handleSubmit} />
        </div>
    );
};

export default EditCustomerPage;
