
import CategoriesList from '../../components/categories/CategoriesList';
import { CategoriesPageContextProvider } from '../../context/CategoriesPageContextProvider';
import styles from '../../styles/categories/CategoriesPage.module.css';

const CategoriesPage: React.FC = () => {
    return (
        <CategoriesPageContextProvider>
            <div className={styles.categoriesContainer}>
                <CategoriesList />
            </div>
        </CategoriesPageContextProvider>
    );
};

export default CategoriesPage;