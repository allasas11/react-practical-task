
import CustomersList from '../../components/customers/CustomersList';
import { CustomersPageContextProvider } from '../../context/CustomersPageContextProvider';
import styles from '../../styles/customers/CustomersPage.module.css'

const CustomersPage: React.FC = () => {
    return (
        <CustomersPageContextProvider>
            <div className={styles.customersContainer}>
                <CustomersList />
            </div>
        </CustomersPageContextProvider>
    )
}
export default CustomersPage;
