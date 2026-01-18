import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { fetchCustomerById } from "../../api/customerApi";
import { Customer } from "../../reducers/customersReducer";
import styles from "../../styles/customers/CustomerPage.module.css";
import Skeleton from 'react-loading-skeleton';

const CustomerPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [customer, setCustomer] = useState<Customer | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCustomer = async () => {
            try {
                if (!id) return;
                const customerData = await fetchCustomerById(Number(id));
                console.log("Fetched Customer Data:", customerData);
                setCustomer(customerData);
            } catch (error) {
                setError(`Failed to fetch customer details:` + error);
            } finally {
                setLoading(false);
            }
        };
        getCustomer();
    }, [id]);

    if (loading) return <Skeleton baseColor="seagreen" highlightColor="darkslategray" height={400} width={400} />;
    if (error) return <p>{error}</p>;
    if (!customer) return <p>No customer found.</p>;

    const { name, username, email, phone, address, avatar } = customer;

    return (
        <div className={styles.customerItem}>
            <div className={styles.customerItemContainer}>
                <img src={avatar} alt={name} className={styles.avatar} />
                <h2>{name}</h2>
                <h3>@{username}</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
                <NavLink to={`/customers/${id}/edit`} className={styles.editLink}>
                    Edit Customer
                </NavLink>
            </div>
        </div>
    );
};

export default CustomerPage;

