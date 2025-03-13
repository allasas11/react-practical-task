import { NavLink } from "react-router-dom"
import { useCustomers } from "../../context/CustomersPageContextProvider"
import styles from '../../styles/customers/CustomersList.module.css'
import CustomerItem from "./CustomerItem"

const CustomersList:React.FC = () => {

    const { customers } = useCustomers()

    return (
        <>
            <h2 className={styles.pageTitle}>{customers.length > 0? 'Customers' : 'No customers'}</h2>

            <div className={styles.createLinkContainer}>
                <NavLink to="/create-customer" className={({ isActive }) => isActive ? styles.activeLink : styles.createLink} > Create new customer </NavLink>
            </div>

            <div className={styles.customersContainer}>
                {customers.length > 0 && (

                    <ul className={styles.customersWrapper}>
                        {customers.map((customer) => (
                            <CustomerItem key={customer.id} customerItem={customer} />
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default CustomersList