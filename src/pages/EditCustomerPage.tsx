import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { Customer } from "../reducers/customersReducer"; 
import { useCustomers } from "../context/CustomersPageContextProvider";

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
            <h1>Edit Customer</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={customerData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={customerData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={customerData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={customerData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={customerData.address}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="avatar">Avatar:</label>
                    <input
                        type="text"
                        id="avatar"
                        name="avatar"
                        value={customerData.avatar}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditCustomerPage;
