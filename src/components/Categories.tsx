import "../styles/components/_categories.scss";
import { useState } from "react";

const categoriesList = [
  { id: 1, title: "All Categories" },
  { id: 2, title: "Pop" },
  { id: 3, title: "Rock" },
  { id: 4, title: "Alternative Indie" },
  { id: 5, title: "Rap" },
  { id: 6, title: "Techno" },
  { id: 7, title: "All Categories" },
  { id: 8, title: "Pop" },
  { id: 9, title: "Rock" },
  { id: 10, title: "Alternative Indie" },
  { id: 11, title: "Rap" },
  { id: 12, title: "Techno" },
];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  return (
    <section className="categories">
      <div className="categories__wrapper">
        {categoriesList.map((item) => (
          <div
            className={`categories__item ${
              selectedCategory === item.id ? "selected" : ""
            }`}
            key={item.id}
            onClick={() => handleCategoryClick(item.id)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </section>
  );
}
