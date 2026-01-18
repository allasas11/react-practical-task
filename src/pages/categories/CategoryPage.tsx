import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { fetchCategoryById } from "../../api/categoriesApi";
import { Category } from "../../reducers/categoriesReducer";
import styles from "../../styles/categories/CategoryPage.module.css";
// @ts-ignore
import BallTriangle from 'react-loading-components';

const CategoryPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [category, setCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCategory = async () => {
            try {
                if (!id) return;
                const categoryData = await fetchCategoryById(id); // Fetch category by ID
                console.log("Fetched Category Data:", categoryData);
                setCategory(categoryData);
            } catch (error) {
                console.error("Unexpected Error:", error)
                setError("Failed to fetch category details");
            } finally {
                setLoading(false);
            }
        };
        getCategory();
    }, [id]);

    if (loading) return <BallTriangle width={100} height={100} color="#90EE90" />;
    if (error) return <p>{error}</p>;
    if (!category) return <p>No category found.</p>;

    const { title, description, image } = category;

    return (
        <div className={styles.categoryItem}>
            <div className={styles.categoryItemContainer}>
                <img src={image} alt={title} className={styles.categoryImage} />
                <h2>{title}</h2>
                <p>{description}</p>
                <NavLink to={`/categories/${id}/edit`} className={styles.editLink}>
                    Edit Category
                </NavLink>
            </div>
        </div>
    );
};

export default CategoryPage;