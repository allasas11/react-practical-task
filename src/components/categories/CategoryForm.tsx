import React from 'react';
import styles from '../../styles/categories/CategoryForm.module.css';

interface CategoryFormProps {
    formData: {
        title: string;
        description: string;
        image: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    buttonText: string; 
}

const CategoryForm: React.FC<CategoryFormProps> = ({ formData, handleChange, handleSubmit, buttonText }) => {
    return (
        <div className={styles.categoryFormContainer}>
            <form onSubmit={handleSubmit}>
               
                <div className="form-control">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Category Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        name="description"
                        id="description"
                        placeholder="Category Description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        required
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="image">Image URL:</label>
                    <input
                        type="url"
                        name="image"
                        id="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">{buttonText}</button>
            </form>
        </div>
    );
};

export default CategoryForm;