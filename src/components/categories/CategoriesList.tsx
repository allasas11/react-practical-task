import { NavLink } from "react-router-dom";
import { useCategories } from "../../context/CategoriesPageContextProvider";
import styles from '../../styles/categories/CategoriesList.module.css';
import CategoryItem from "./CategoryItem";


const CategoriesList: React.FC = () => {
    const { categories } = useCategories();

    return (
        <>
            <h2 className={styles.pageTitle}>
                {categories.length > 0 ? 'Categories' : 'No categories'}
            </h2>

            <div className={styles.createLinkContainer}>
                <NavLink
                    to="/create-category"
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.createLink
                    }
                >
                    Create new category
                </NavLink>
            </div>

            <div className={styles.categoriesContainer}>
                {categories.length > 0 && (
                    <ul className={styles.categoriesWrapper}>
                        {categories.map((category) => (
                            <CategoryItem key={category.id} categoryItem={category} />
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default CategoriesList;