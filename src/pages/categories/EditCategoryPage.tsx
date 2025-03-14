import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Category } from "../../reducers/categoriesReducer";
import { useCategories } from "../../context/CategoriesPageContextProvider";
import styles from '../../styles/categories/EditCategoryPage.module.css';
import CategoryForm from "../../components/categories/CategoryForm";

const EditCategoryPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { categories, editCategory } = useCategories();
    const navigate = useNavigate();

    const [categoryData, setCategoryData] = useState<Category | null>(null);

    useEffect(() => {
        const category = categories.find((category) => category.id === id);
        if (category) {
            setCategoryData(category);
        } else {
            navigate("/404");
        }
    }, [id, categories, navigate]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (categoryData) {
            setCategoryData({
                ...categoryData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (categoryData) {
            editCategory(categoryData);
            navigate("/categories");
        }
    };

    if (!categoryData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className={styles.pageTitle}>Edit Category</h1>
            <CategoryForm formData={categoryData} handleChange={handleInputChange} handleSubmit={handleSubmit} buttonText="Save Changes" />
        </div>
    );
};

export default EditCategoryPage;
