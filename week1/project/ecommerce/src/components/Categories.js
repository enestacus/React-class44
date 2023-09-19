const Categories = ({ categoriesData, selectedCategory, setSelectedCategory }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <ul className="category-list">
        {categoriesData.map((category) => (
          <li key={category} className={selectedCategory===category ? "active-category" : null}>
            <button onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
