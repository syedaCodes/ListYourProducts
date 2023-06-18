import CategoryItem from "./categoryItem";

const Categories = ({ categories }) => {
    return (
        <div className="clothing">
            {categories?.map((category) => (
                <CategoryItem category={category?.title} key={category?.id} />
            ))}
        </div>
    );
};

export default Categories;
