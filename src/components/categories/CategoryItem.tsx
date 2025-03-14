import { NavLink } from "react-router-dom";
import { useCategories } from "../../context/CategoriesPageContextProvider";
import { Category } from "../../reducers/categoriesReducer";
import styles from '../../styles/categories/CategoryItem.module.css';

type CategoryItemProps = {
    categoryItem: Category;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ categoryItem }) => {
    const { id, title, description, image } = categoryItem;
    const { deleteCategory } = useCategories();

    const handleDelete = () => {
        deleteCategory(id);
    };

    return (
        <li className={styles.categoryItemContainer}>
            <img src={image} alt={title} className={styles.categoryImage} />
            <div className={styles.categoryDetails}>
                <h3>
                    <NavLink to={`/categories/${id}`}>{title}</NavLink>
                </h3>
                <p>{description}</p>
            </div>
            <div className={styles.actions}>
                <NavLink to={`/categories/${id}/edit`} className={styles.editButton}>
                    Edit
                </NavLink>
                <button onClick={handleDelete} className={styles.deleteButton}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default CategoryItem;