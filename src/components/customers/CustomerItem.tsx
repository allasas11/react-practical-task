import { NavLink } from "react-router-dom";
import { useCustomers } from "../../context/CustomersPageContextProvider"
import { Customer } from "../../reducers/customersReducer"
import styles from '../../styles/customers/CustomerItem.module.css'

type CustomerItemProps = {
    customerItem: Customer;
};

const CustomerItem: React.FC<CustomerItemProps> = ({ customerItem }) => {

    const { id, name, username, email, phone, address, avatar } = customerItem
    const { deleteCustomer } = useCustomers()

    const handleDelete = () => {
        deleteCustomer(Number(id))
    };

    return (
        <li className={styles.customerItemContainer}>
            <img src={avatar} alt={name} className={styles.avatar} />
            <div className={styles.customerDetails}>
                <h3>
                    <NavLink to={`/customers/${id}`}>{name}</NavLink>
                </h3>
                <h4>@{username}</h4>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
            </div>
            <button onClick={handleDelete} className={styles.deleteButton}>Delete Customer</button>
        </li>
    )
}

export default CustomerItem