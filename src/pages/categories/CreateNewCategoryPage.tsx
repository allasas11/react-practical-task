import React, { useState } from 'react';
import { useCategories } from '../../context/CategoriesPageContextProvider';
import { Category } from '../../reducers/categoriesReducer';
import styles from '../../styles/categories/CreateNewCategoryPage.module.css';
import { useNavigate } from 'react-router-dom';
import CategoryForm from '../../components/categories/CategoryForm';

const CreateNewCategoryPage: React.FC = () => {
    const { categories, addNewCategory } = useCategories();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const highestId = categories.reduce((maxId, category) => {
            return Math.max(Number(maxId), Number(category.id));
        }, 0);

        const newId = (highestId + 1).toString();

        const newCategory: Category = {
            id: newId,
            ...formData
        };

        addNewCategory(newCategory);

        setFormData({
            title: '',
            description: '',
            image: ''
        });

        navigate('/categories');
    };

    return (
        <div>
            <h1>Create New Category</h1>
            <div className={styles.formContainer}>
                <CategoryForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} buttonText="Create Category" />
            </div>
        </div>
    );
};

export default CreateNewCategoryPage;