import { useCustomers } from "../context/CustomersPageContextProvider"
import styles from '../styles/CustomersList.module.css'
import CustomerItem from "./CustomerItem"

const CustomersList:React.FC = () => {

    const { customers } = useCustomers()

    return (
        <>
            <h2 className={styles.pageTitle}>{customers.length > 0? 'Customers' : 'No customers'}</h2>

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