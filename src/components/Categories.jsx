const categories = [
  "All",
  "Gaming",
  "Podcasts",
  "Nvidia RTX",
  "Price action trading",
  "Live",
  "Action Thrillers",
  "Trailers",
  "News",
  "AI",
  "Music",
  "Wealth",
  "Superhero movies",
  "Tables",
  "Flights",
  "Gadgets"
];

function Categories() {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${
            category === "All" ? "active-category" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;