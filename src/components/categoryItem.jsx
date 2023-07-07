const CategoryItem = ({ category }) => {
    const categoryClass = category.toLowerCase();

    return (
        <div className={`clothing__type ${categoryClass}`}>
            <div className="clothing__type--category">
                <h2 title={category}>{category}</h2>
                <a href="/">Shop Now</a>
            </div>
        </div>
    );
};

export default CategoryItem;
