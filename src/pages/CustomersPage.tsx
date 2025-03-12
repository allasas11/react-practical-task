
import CustomersList from '../components/CustomersList';
import { CustomersPageContextProvider } from '../context/CustomersPageContextProvider';
import styles from '../styles/CustomersPage.module.css'

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
